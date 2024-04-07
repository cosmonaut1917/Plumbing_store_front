// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn())
    const [isAdmin, setIsAdmin] = useState(AuthService.isAdmin())

    const handleLoginChange = () => {
        setLoggedIn(AuthService.loggedIn());
        setIsAdmin(AuthService.isAdmin())
    };

    
    useEffect(() => {
        window.addEventListener('loginStatusChange', handleLoginChange);
        return () => {
            window.removeEventListener('loginStatusChange', handleLoginChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, isAdmin, setIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
