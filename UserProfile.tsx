import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const { currentUser, signOut, toggleEditMode, isEditMode } = useAuth();

  if (!currentUser) return null;

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          {currentUser.email}
        </span>
        <span className={`px-2 py-1 text-xs rounded-full ${
          currentUser.role === 'editor' 
            ? 'bg-purple-100 text-purple-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {currentUser.role.toUpperCase()}
        </span>
      </div>

      {currentUser.role === 'editor' && (
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={isEditMode}
            onChange={toggleEditMode}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">
            {isEditMode ? 'Edit Mode' : 'View Mode'}
          </span>
        </label>
      )}

      <button
        onClick={signOut}
        className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserProfile;
