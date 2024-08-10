import { useState } from 'react'
import { AuthContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
/*

import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;

const AuthContext = createContext({
  isAuthenticated: false,

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(fals
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
//Hook que nos permite acceder a las funciones de    nuestro useContext.
export const useAuth = () => useContext(AuthContext);
*/
