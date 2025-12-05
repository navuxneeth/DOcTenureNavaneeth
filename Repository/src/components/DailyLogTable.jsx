import React, { useState } from 'react';
import { initialLogs } from '../data';

const DailyLogTable = () => {
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        // Start with the week containing Dec 2, 2025 (which is a Tuesday)
        const dec2 = new Date(2025, 11, 2);
        const dayOfWeek = dec2.getDay(); // 2 for Tuesday
        const sunday = new Date(dec2);
        sunday.setDate(dec2.getDate() - dayOfWeek); // Go back to Sunday
        return sunday;
    });

    const getWeekDays = (startDate) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push(date);
        }
        return days;
    };

    const weekDays = getWeekDays(currentWeekStart);

    const formatDate = (date) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const formatDateKey = (date) => {
        const y = date.getFullYear();
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        return `${y}-${m}-${d}`;
    };

    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    };

    const handlePrevWeek = () => {
        const newStart = new Date(currentWeekStart);
        newStart.setDate(newStart.getDate() - 7);
        setCurrentWeekStart(newStart);
    };

    const handleNextWeek = () => {
        const newStart = new Date(currentWeekStart);
        newStart.setDate(newStart.getDate() + 7);
        setCurrentWeekStart(newStart);
    };

    const getWeekRange = () => {
        const start = formatDate(weekDays[0]);
        const end = formatDate(weekDays[6]);
        return `${start} - ${end}`;
    };

    return (
        <div className="table-container">
            <div className="table-header">
                <h3>Weekly Activity Log</h3>
                <div className="table-nav-controls">
                    <button onClick={handlePrevWeek}>&lt;</button>
                    <span>{getWeekRange()}</span>
                    <button onClick={handleNextWeek}>&gt;</button>
                </div>
            </div>
            <table className="log-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity Log</th>
                    </tr>
                </thead>
                <tbody>
                    {weekDays.map((date) => {
                        const dateStr = formatDateKey(date);
                        const log = initialLogs[dateStr] || "";
                        const weekend = isWeekend(date);

                        return (
                            <tr key={dateStr} className={weekend ? "weekend-row" : ""}>
                                <td className="date-cell">{formatDate(date)}</td>
                                <td className="log-cell">{log}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DailyLogTable;
