// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(AuthService.loggedIn());

    const handleLoginChange = () => {
        setLoggedIn(AuthService.loggedIn());
    };

    // Consider using a more robust event system or dependency to trigger this update
    useEffect(() => {
        window.addEventListener('loginStatusChange', handleLoginChange);
        return () => {
            window.removeEventListener('loginStatusChange', handleLoginChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
