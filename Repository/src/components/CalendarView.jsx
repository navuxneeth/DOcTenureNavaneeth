import React, { useState } from 'react';
import { getMonthDays, initialLogs } from '../data';

const CalendarView = () => {
    const [viewMode, setViewMode] = useState('month'); // month, week, day
    const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 2)); // Start at Dec 2, 2025

    const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 
                         'July', 'August', 'September', 'October', 'November', 'December'];
    const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get days based on view mode
    const getVisibleDays = () => {
        if (viewMode === 'month') {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            return getMonthDays(year, month);
        } else if (viewMode === 'week') {
            const startOfWeek = new Date(currentDate);
            const day = startOfWeek.getDay();
            startOfWeek.setDate(startOfWeek.getDate() - day); // Go to Sunday
            
            const weekDays = [];
            for (let i = 0; i < 7; i++) {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);
                weekDays.push({ date, isCurrentMonth: true });
            }
            return weekDays;
        } else {
            // Day view
            return [{ date: new Date(currentDate), isCurrentMonth: true }];
        }
    };

    const visibleDays = getVisibleDays();

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    const handlePrev = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() - 7);
        } else {
            newDate.setDate(newDate.getDate() - 1);
        }
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(currentDate);
        if (viewMode === 'week') {
            newDate.setDate(newDate.getDate() + 7);
        } else {
            newDate.setDate(newDate.getDate() + 1);
        }
        setCurrentDate(newDate);
    };

    const formatDateKey = (date) => {
        const y = date.getFullYear();
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        return `${y}-${m}-${d}`;
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
                
                <div className="nav-controls">
                    {viewMode === 'month' ? (
                        <>
                            <button onClick={handlePrevMonth}>&lt;</button>
                            <span>{MONTH_NAMES[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                            <button onClick={handleNextMonth}>&gt;</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handlePrev}>&lt;</button>
                            <span>
                                {viewMode === 'week' 
                                    ? `Week of ${currentDate.toLocaleDateString()}` 
                                    : currentDate.toLocaleDateString()}
                            </span>
                            <button onClick={handleNext}>&gt;</button>
                        </>
                    )}
                </div>
            </div>

            {viewMode === 'month' && (
                <div className="calendar-day-headers">
                    {DAY_NAMES.map(day => (
                        <div key={day} className="day-header">{day}</div>
                    ))}
                </div>
            )}

            <div className={`calendar-grid ${viewMode}`}>
                {visibleDays.map((dayObj, index) => {
                    const date = dayObj.date;
                    const dateStr = formatDateKey(date);
                    const log = initialLogs[dateStr] || '';
                    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                    const isOtherMonth = !dayObj.isCurrentMonth;

                    return (
                        <div 
                            key={`${dateStr}-${index}`} 
                            className={`calendar-cell ${isWeekend ? 'weekend' : ''} ${isOtherMonth ? 'other-month' : ''}`}
                        >
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
