"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface AuthContextValue {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  
  const login = () => {
    setIsAuthenticated(true);
    setUser({ name: "Student" });
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
