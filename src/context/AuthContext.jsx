import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
       
        const userRole = localStorage.getItem('userRole');
        const userId = localStorage.getItem('userId');
      
        if( userRole || userId ){
        return {
            userRole,
            userId
        };
    }else{
        console.log('user is not found logged in again')
        return null
    }
    });

    const logout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/logout');
            setUser(null);
            localStorage.removeItem('userRole');
            localStorage.removeItem('userId');
            alert('Logout successful');
            window.location.href = '/';
             

        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

  

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);