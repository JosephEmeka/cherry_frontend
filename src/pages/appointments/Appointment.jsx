import React, { useState, useEffect } from 'react';
import AppointmentCancelled from "../../components/appointments/AppointmentCancelled";
import UpcomingSchedules from "../../components/medical_history/UpcomingSchedules";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppointmentList from "../../components/appointments/AppointmentList";

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/appointments');
                setAppointments(response.data);
                toast.success("Appointments loaded successfully!", { toastId: 'success1' });
            } catch (error) {
                console.error('Error fetching appointments:', error);
                toast.error("Failed to load appointments. Please try again.", { toastId: 'error1' });
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="w-64 h-full bg-gray-900 text-white fixed">
                <Sidebar />
            </aside>
            <div className="flex flex-col flex-1 ml-64 bg-gray-100 min-h-screen">
                <Header />
                <main className="flex-1 p-4 md:p-6 overflow-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                        </div>
                    ) : appointments.length > 0 ? (
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AppointmentList appointments={appointments}/>
                            <UpcomingSchedules appointments={appointments}/>
                        </section>
                    ) : (
                        <AppointmentCancelled />
                    )}
                </main>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick />
            </div>
        </div>
    );
};

export default Appointment;
