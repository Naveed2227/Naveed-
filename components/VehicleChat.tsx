'use client';

import { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, DocumentData } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: any;
}

interface VehicleChatProps {
  vehicleId: string;
}

export default function VehicleChat({ vehicleId }: VehicleChatProps) {
  const [messages, setMessages] = useState<Array<Message & DocumentData>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser] = useState('Guest'); // In a real app, get this from auth
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch and listen for messages
  useEffect(() => {
    if (!vehicleId || !isOpen) return;
    
    const messagesRef = collection(db, 'vehicles', vehicleId, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesList: Message[] = [];
      snapshot.forEach((doc) => {
        messagesList.push({ 
          id: doc.id, 
          ...doc.data() 
        } as Message & DocumentData);
      });
      setMessages(messagesList);
    });

    return () => unsubscribe();
  }, [vehicleId, isOpen]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !vehicleId) return;

    try {
      await addDoc(collection(db, 'vehicles', vehicleId, 'messages'), {
        user: currentUser,
        text: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        Chat about this vehicle
      </button>
    );
  }

  return (
    <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex justify-between items-center">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">Vehicle Chat</h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
      </div>
      
      {/* Messages container */}
      <div className="h-64 overflow-y-auto p-4 space-y-3 bg-white dark:bg-gray-900">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user === currentUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                  message.user === currentUser
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                }`}
              >
                <div className="text-xs font-semibold mb-1">
                  {message.user === currentUser ? 'You' : message.user}
                </div>
                <div className="break-words">{message.text}</div>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp?.toDate
                    ? new Date(message.timestamp.toDate()).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : 'Just now'}
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <form onSubmit={handleSendMessage} className="flex border-t border-gray-200 dark:border-gray-700">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-800 dark:text-gray-200"
        />
        <button
          type="submit"
          disabled={!newMessage.trim()}
          className="px-4 py-2 bg-blue-500 text-white disabled:opacity-50 hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
