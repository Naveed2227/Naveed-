import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

type UserRole = 'viewer' | 'editor';

export interface User extends FirebaseUser {
  role: UserRole;
  isEditMode?: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  toggleEditMode: () => void;
  isEditMode: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// List of approved editor emails (stored in a constant for initial setup)
// In a production app, this should be managed in Firestore with proper security rules
const EDITOR_EMAILS = [
  'naveed.miandad.007@gmail.com',
  'admin@example.com' // Keep this as a placeholder
].map(email => email.toLowerCase()); // Ensure case-insensitive matching

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user exists in Firestore, if not create a new user document
        const userRef = doc(db, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userRef);
        
        if (!userDoc.exists()) {
          // Only check the email against the approved list for new users
          const userEmail = firebaseUser.email?.toLowerCase() || '';
          const isEditor = EDITOR_EMAILS.includes(userEmail);
          const userData = {
            email: firebaseUser.email,
            role: isEditor ? 'editor' : 'viewer',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          await setDoc(userRef, userData);
          setCurrentUser({ ...firebaseUser, ...userData, isEditMode: false });
        } else {
          const userData = userDoc.data();
          setCurrentUser({ 
            ...firebaseUser, 
            role: userData.role, 
            isEditMode: userData.role === 'editor' ? isEditMode : false 
          });
        }
      } else {
        setCurrentUser(null);
        setIsEditMode(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const role = EDITOR_EMAILS.includes(email) ? 'editor' : 'viewer';
      
      await setDoc(doc(db, 'users', user.uid), {
        email,
        role,
        createdAt: new Date().toISOString()
      });
      
      setCurrentUser({ ...user, role, isEditMode: false });
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      
      setCurrentUser({ 
        ...user, 
        role: userData?.role || 'viewer',
        isEditMode: userData?.role === 'editor' ? isEditMode : false
      });
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);
      setIsEditMode(false);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const toggleEditMode = () => {
    if (currentUser?.role === 'editor') {
      const newEditMode = !isEditMode;
      setIsEditMode(newEditMode);
      setCurrentUser(prev => prev ? { ...prev, isEditMode: newEditMode } : null);
    }
  };

  const value = {
    currentUser,
    loading,
    signUp,
    signIn,
    signOut,
    toggleEditMode,
    isEditMode: currentUser?.isEditMode || false,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
