import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MedicalHistory = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);

    useEffect(() => {
        axios.get('/api/medical-history')
            .then(response => setMedicalHistory(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Medical History</h3>
                <button className="border custom-border custom-color px-4 py-2 rounded-full">Show all</button>
            </div>
            <table className="w-full">
                <thead>
                <tr className="text-left">
                    <th className="pb-2">Doctor Name</th>
                    <th className="pb-2">Diagnosis</th>
                    <th className="pb-2">Date</th>
                </tr>
                </thead>
                <tbody>
                {medicalHistory.map((item, index) => (
                    <tr key={index}>
                        <td className="py-2">{item.doctorName}</td>
                        <td className="py-2">{item.diagnosis}</td>
                        <td className="py-2">{item.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MedicalHistory;
