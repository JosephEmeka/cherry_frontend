import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../utils/Api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        toast.success("Logged out successfully.");
        navigate('/login');
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get('/user/profile');
                setUser(response.data);
            } catch (error) {
                console.error("User fetch failed", error);
                toast.error("Failed to load user data. Please log in again.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, logout, loading }}>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-custom-cherry border-solid"></div>
                </div>
            ) : children}
        </UserContext.Provider>
    );
};