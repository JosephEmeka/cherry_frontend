import React from 'react';
import { Layout, Calendar, Heart, User, Settings, Menu } from 'react-feather';
import Logo from "../assets/cherryLogo.png"

const Sidebar = () => (
    <aside className="mt-8 w-64 bg-white pl-6 pt-6 pb-4 shadow-md h-screen">

        <div className=" mb-8 rounded-lg flex justify-between items-center">
            <img src={Logo} alt="Logo" className="mr-3"/>
            <div className="pl-14 pr-3">
                <Menu />
            </div>
        </div>
        <nav>
            <ul>
                <div className="ml-4">
                    <h3 className="text-gray-600 mb-4 mr-8 ml-3">Main Menu</h3>
                </div>
                <div className="ml-4">

                    <li className="mr-6 mt-10 mb-10 hover:bg-custom-cherry h-[48px] w-[180px] rounded-lg">
                        <button  className="flex items-center text-custom-cherry hover:text-white text-[16px]">
                            <Layout className="mr-3 ml-3 mt-3"/> <h3 className="mt-3">Dashboard</h3>
                        </button>
                    </li>

                </div>
                <div className="ml-4">
                    <li className="mr-6 mt-10 mb-10 hover:bg-custom-cherry h-[48px] w-[180px] rounded-lg">
                        <button className="flex items-center text-custom-cherry hover:text-white text-[16px]">
                            <Calendar className="mr-3 ml-3 mt-3"/> <h3 className="mt-3"> Appointments</h3>
                        </button>
                    </li>
                </div>

                <div className="ml-4">
                    <li className="mr-6 mt-10 mb-10 hover:bg-custom-cherry h-[48px] w-[180px] rounded-lg">
                        <button className="flex items-center text-custom-cherry hover:text-white text-[16px]">
                            <Heart className="mr-3 ml-3 mt-3"/> <h3 className="mt-3">Elderly Care</h3>
                        </button>
                    </li>
                </div>


                <div className="mt-8">
                    <div className="ml-4">
                        <h3 className="text-gray-600 mb-4 mr-8 ml-3">Other Menu</h3>
                    </div>

                        <ul>
                            <div className="ml-4">
                                <li className="mr-6 mt-10 mb-10 hover:bg-custom-cherry h-[48px] w-[180px] rounded-lg">
                                    <button
                                       className="flex items-center text-custom-cherry hover:text-white text-[16px]">
                                        <User className="mr-3 ml-3 mt-3"/> <h3 className="mt-3"> Profile Settings</h3>
                                    </button>
                                </li>
                            </div>

                            <div className="ml-4">
                                <li className="mr-6 mt-10 mb-10 hover:bg-custom-cherry h-[48px] w-[180px] rounded-lg">
                                    <button
                                       className="flex items-center text-custom-cherry hover:text-white text-[16px]">
                                        <Settings className="mr-3 ml-3 mt-3"/> <h3 className="mt-3"> Wallet</h3>
                                    </button>
                                </li>
                            </div>

                        </ul>
                    </div>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;
