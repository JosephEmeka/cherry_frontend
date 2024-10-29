import React, { useContext } from 'react';
import { Search } from 'react-feather';
import { UserContext } from '../context/UserContext';
import LoadingSpinner from './LoadingSpinner';

const Header = () => {
    const { user, loading } = useContext(UserContext);

    return (
        <header className="flex justify-between items-center mb-8 bg-white p-4 shadow-md pb-8">
            <div className="flex justify-between items-center w-full">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="border rounded-full px-4 py-2 pl-10 focus:outline-none"
                    />
                    <Search className="absolute top-2.5 left-3 w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center mr-10">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <img
                                src={user?.profilePicture || "https://placehold.co/40x40"}
                                alt="Profile"
                                className="rounded-full mr-4 w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold">{user?.name || 'User'}</p>
                                <p className="text-gray-600">Profile</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
