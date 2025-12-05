import React, { useState } from 'react';
import { getDays, initialLogs } from '../data';

const CalendarView = () => {
    const [viewMode, setViewMode] = useState('month'); // month, week, day
    const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 2)); // Start at Dec 2

    const days = getDays();

    // Filter days based on view mode
    const getVisibleDays = () => {
        if (viewMode === 'month') {
            return days;
        } else if (viewMode === 'week') {
            const startOfWeek = new Date(currentDate);
            const day = startOfWeek.getDay();
            // Adjust to start of week (Sunday)
            const diff = startOfWeek.getDate() - day;
            const start = new Date(startOfWeek);
            start.setDate(diff);

            const end = new Date(start);
            end.setDate(start.getDate() + 6);

            return days.filter(d => d >= start && d <= end);
        } else {
            // Day view
            return days.filter(d => d.toDateString() === currentDate.toDateString());
        }
    };

    const visibleDays = getVisibleDays();

    const handlePrev = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'month') {
            // No prev month needed for this specific task as range is fixed to Dec
        } else if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() - 7);
        } else {
            newDate.setDate(newDate.getDate() - 1);
        }
        if (newDate >= days[0] && newDate <= days[days.length - 1]) {
            setCurrentDate(newDate);
        }
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'month') {
            // No next month
        } else if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() + 7);
        } else {
            newDate.setDate(newDate.getDate() + 1);
        }
        if (newDate >= days[0] && newDate <= days[days.length - 1]) {
            setCurrentDate(newDate);
        }
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="view-switcher">
                    <button
                        className={viewMode === 'month' ? 'active' : ''}
                        onClick={() => setViewMode('month')}
                    >
                        Monthly
                    </button>
                    <button
                        className={viewMode === 'week' ? 'active' : ''}
                        onClick={() => setViewMode('week')}
                    >
                        Weekly
                    </button>
                    <button
                        className={viewMode === 'day' ? 'active' : ''}
                        onClick={() => setViewMode('day')}
                    >
                        Daily
                    </button>
                </div>
                {viewMode !== 'month' && (
                    <div className="nav-controls">
                        <button onClick={handlePrev}>&lt;</button>
                        <span>{viewMode === 'week' ? 'Week of ' + currentDate.toLocaleDateString() : currentDate.toLocaleDateString()}</span>
                        <button onClick={handleNext}>&gt;</button>
                    </div>
                )}
            </div>

            <div className={`calendar-grid ${viewMode}`}>
                {visibleDays.map(date => {
                    // Use local date string construction to avoid UTC shifts
                    const y = date.getFullYear();
                    const m = (date.getMonth() + 1).toString().padStart(2, '0');
                    const d = date.getDate().toString().padStart(2, '0');
                    const dateStr = `${y}-${m}-${d}`;

                    const log = initialLogs[dateStr];
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

                    return (
                        <div key={dateStr} className={`calendar-cell ${isWeekend ? 'weekend' : ''}`}>
                            <div className="cell-date">{date.getDate()}</div>
                            <div className="cell-content">{log}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarView;
