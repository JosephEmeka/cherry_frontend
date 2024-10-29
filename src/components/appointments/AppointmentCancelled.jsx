import React from 'react';
import { Frown } from 'react-feather';

const AppointmentCancelled = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-white relative">


            <div className="bg-white rounded-lg shadow-xl h-auto max-w-md px-8 py-8 mx-6 md:mx-0 w-full">
                <div className="flex items-center justify-center mb-4">
                    <Frown size={48} className="text-gray-600" />
                </div>
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    No Appointments
                </h1>


                <div className="flex items-center justify-center">
                    <button className="bg-[#396B93] hover:bg-[#2c5673] text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out">
                        Create An Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCancelled;
