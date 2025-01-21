import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Changed to start false
  const navigate = useNavigate();

  // Check authentication status on mount
  useEffect(() => {
    console.log('AdminProvider mounted');
    const token = sessionStorage.getItem('adminToken');
    if (!token) {
      setIsAdmin(false);
      return;
    }

    setIsAdmin(true);
  }, []);

  const login = async (password) => {
    try {
      // Simplified login for development
      if (password === 'admin123') {
        sessionStorage.setItem('adminToken', 'dev-token');
        setIsAdmin(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    sessionStorage.removeItem('adminToken');
    setIsAdmin(false);
    navigate('/');
  };

  const contextValue = {
    isAdmin,
    isLoading,
    login,
    logout
  };

  console.log('AdminProvider rendering with:', contextValue);

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};