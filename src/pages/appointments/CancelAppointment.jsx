import React from 'react';
import AppointmentCancelled from "../../components/appointments/AppointmentCancelled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const CancelAppointment = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar: fixed to ensure it stays in place */}
            <aside className="w-64 h-full bg-gray-900 text-white fixed">
                <Sidebar />
            </aside>

            {/* Main content: adds padding and takes up the remaining space */}
            <div className="flex flex-col flex-1 ml-64 bg-gray-100 min-h-screen">
                <Header />
                <main className="flex-1 p-4 md:p-6 overflow-auto">
                    <AppointmentCancelled />
                </main>

            </div>
        </div>
    );
};

export default CancelAppointment;
