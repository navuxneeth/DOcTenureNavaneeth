import React from 'react';
import { getDays, initialLogs } from '../data';

const DailyLogTable = () => {
    const days = getDays();

    const formatDate = (date) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    };

    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    };

    return (
        <div className="table-container">
            <table className="log-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Activity Log</th>
                    </tr>
                </thead>
                <tbody>
                    {days.map((date) => {
                        // Use local date string construction to avoid UTC shifts
                        const y = date.getFullYear();
                        const m = (date.getMonth() + 1).toString().padStart(2, '0');
                        const d = date.getDate().toString().padStart(2, '0');
                        const dateStr = `${y}-${m}-${d}`;

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
