import React, { useState, useEffect } from 'react';
import axios from 'axios';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const UpcomingSchedules = () => {
    const [schedules, setSchedules] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0 - January, 11 - December
    const [currentYear, ] = useState(new Date().getFullYear());

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    // Fetching schedules from the backend
    useEffect(() => {
        axios.get('/api/upcoming-schedules')
            .then(response => setSchedules(response.data))  // Assuming response.data contains an array of schedule dates in YYYY-MM-DD format
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
                    week.push(''); // Empty cells for days before the first day of the month
                } else if (currentDay > daysInMonth) {
                    week.push(''); // Empty cells after the last day of the month
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

    // Helper function to check if a day has a scheduled event
    const isScheduledDay = (day) => {
        const dayString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return schedules.some(schedule => schedule.date === dayString); // Assuming schedules is an array of objects like { date: 'YYYY-MM-DD' }
    };

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
                            <td
                                key={i}
                                className={`py-2 ${day && isScheduledDay(day) ? 'bg-blue-100 text-blue-600 font-bold rounded-full' : ''}`}
                            >
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
