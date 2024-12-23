// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '@/context/AuthContext';

const PrivateRoute = ({ children, roles }) => {
    const { user } = useAuth();
    
    if (!user.userId) {
        return <Navigate to="/login" />;
    }

    // console.log(user.userRole);
    // console.log(roles);  

    if (roles && !roles.includes(user.userRole)) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default PrivateRoute;