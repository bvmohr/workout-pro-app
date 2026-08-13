'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  username: string | null;
  login: (username: string) => void;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check if session is already active
  useEffect(() => {
    fetch('/api/me')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Not logged in');
      })
      .then(data => {
        setUsername(data.username);
      })
      .catch(() => {
        setUsername(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = (user: string) => {
    setUsername(user);
  };

  const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (e) {
      console.error("Logout request failed", e);
    }
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
