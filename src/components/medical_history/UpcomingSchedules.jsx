import React, { useState, useEffect } from 'react';
import axios from 'axios';


const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const UpcomingSchedules = () => {
    const [schedules, setSchedules] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0 - January, 11 - December
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();


    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    useEffect(() => {

        axios.get('/api/upcoming-schedules')
            .then(response => setSchedules(response.data))
            .catch(error => console.error(error));
    }, []);


    const handleMonthChange = (event) => {
        setCurrentMonth(parseInt(event.target.value));
    };


    const generateCalendar = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);


        const calendarDays = [];
        let currentDay = 1;

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push('');
                } else if (currentDay > daysInMonth) {
                    week.push('');
                } else {
                    week.push(currentDay);
                    currentDay++;
                }
            }
            calendarDays.push(week);
        }

        return calendarDays;
    };

    const calendar = generateCalendar();

    return (
        <div className="bg-white p-6 rounded-lg relative">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-4">Upcoming Schedules</h3>

                <div className="flex items-center mr-10">

                    <select
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className="bg-gray-200 p-2 rounded-lg text-gray-700 mr-4"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>


                    <span className="text-lg font-semibold text-gray-700">{currentYear}</span>
                </div>
            </div>

            <table className="w-full mt-4">
                <thead>
                <tr className="text-center">
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                </thead>
                <tbody>
                {calendar.map((week, index) => (
                    <tr className="text-center" key={index}>
                        {week.map((day, i) => (
                            <td className="py-2" key={i}>
                                {day || ''}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpcomingSchedules;
