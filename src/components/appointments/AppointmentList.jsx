import React from 'react';

const AppointmentList = ({ appointments }) => {
    return (
        <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
            <div className="mt-4 space-y-4">
                {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <div>
                            <h4 className="font-semibold">{appointment.title}</h4>
                            <p>{appointment.date}</p>
                        </div>
                        <button className="bg-[#F5D6C2] text-[#357590] px-4 py-2 rounded-lg font-medium">Edit Appointment</button>
                    </div>
                ))}
            </div>
            <button className="mt-6 bg-#396B93 text-white px-6 py-2 rounded-lg">Create New Appointment</button>
        </div>
    );
};

export default AppointmentList;



