export const userInfo = {
    name: "Navaneeth Sankar K P",
    role: "UX Design Intern",
    doj: "02/12/2025",
    company: "DO Communication",
    logoUrl: "https://images.yourstory.com/cs/images/companies/docommunicationLogo-VikramSingh1-1760603388416.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=75"
};

export const projects = [
    {
        id: 1,
        name: "FICSI e-Learning",
        status: "Ongoing",
        notes: "Submitted 2 Drafts, Designing second version drafts after client review"
    },
    {
        id: 2,
        name: "Mankind Agritech",
        status: "Ongoing",
        notes: "Homepage Redesign, Menu and Footer redesign submitted"
    }
];

export const initialLogs = {
    "2025-12-02": "FICSI e-Learning page redesign: 2 Drafts",
    "2025-12-03": "FICSI Figma Sites setup, Mankind Agritech Menu and Homepage Plan",
    "2025-12-04": "Mankind agritech Homepage redesign, Implement new Menu and Footer",
    "2025-12-05": "FICSI e-Learning page Redesign Drafts 1.1 and 2.1 (after client feedback 1)",
    "2025-12-06": "FICSI e-Learning page Redesign Drafts 1.1 and 2.1 (after client feedback 1)"
};

// Helper to get all dates for a given month
export const getMonthDays = (year, month) => {
    const days = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Get day of week for first day (0 = Sunday)
    const startDayOfWeek = firstDay.getDay();
    
    // Add padding days from previous month to start on Sunday
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const prevDate = new Date(year, month, 0 - i);
        days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Add all days of current month
    for (let d = 1; d <= lastDay.getDate(); d++) {
        days.push({ date: new Date(year, month, d), isCurrentMonth: true });
    }
    
    // Add padding days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let d = 1; d <= remainingDays; d++) {
        days.push({ date: new Date(year, month + 1, d), isCurrentMonth: false });
    }
    
    return days;
};

// Helper to generate dates from Dec 2, 2025 to Dec 30, 2025 (for backward compatibility)
export const getDays = () => {
    const days = [];
    const start = new Date(2025, 11, 2); // Month is 0-indexed: 11 = Dec
    const end = new Date(2025, 11, 30);

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }
    return days;
};
