import React from 'react';
import { Layout, Calendar, Heart, User, Menu } from 'react-feather';
import { Wallet } from 'lucide-react';
import Logo from "../assets/cherryLogo.png";

const Sidebar = () => (
    <aside className="w-64 bg-white shadow-lg h-screen p-6 flex flex-col justify-between">


        <div>
            <div className="flex justify-between items-center mb-8">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
                <Menu className="text-gray-500 cursor-pointer" />
            </div>


            <div className="mb-8">
                <h3 className="text-gray-600 font-semibold text-lg mb-4">Main Menu</h3>
                <ul className="space-y-4">
                    <li>
                        <button className="flex items-center text-custom-cherry hover:bg-custom-cherry hover:text-white transition-all duration-300 rounded-lg w-full p-3">
                            <Layout className="mr-3" />
                            <span className="text-[16px]">Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center text-custom-cherry hover:bg-custom-cherry hover:text-white transition-all duration-300 rounded-lg w-full p-3">
                            <Calendar className="mr-3" />
                            <span className="text-[16px]">Appointments</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center text-custom-cherry hover:bg-custom-cherry hover:text-white transition-all duration-300 rounded-lg w-full p-3">
                            <Heart className="mr-3" />
                            <span className="text-[16px]">Elderly Care</span>
                        </button>
                    </li>
                </ul>
            </div>


            <div>
                <h3 className="text-gray-600 font-semibold text-lg mb-4">Other Menu</h3>
                <ul className="space-y-4">
                    <li>
                        <button className="flex items-center text-custom-cherry hover:bg-custom-cherry hover:text-white transition-all duration-300 rounded-lg w-full p-3">
                            <User className="mr-3" />
                            <span className="text-[16px]">Profile Settings</span>
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center text-custom-cherry hover:bg-custom-cherry hover:text-white transition-all duration-300 rounded-lg w-full p-3">
                            <Wallet className="mr-3" />
                            <span className="text-[16px]">Wallet</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>


        <div className="mt-8">
            <p className="text-sm text-gray-500">
                © 2024 CherryMedicals. All rights reserved.
            </p>
        </div>
    </aside>
);

export default Sidebar;
