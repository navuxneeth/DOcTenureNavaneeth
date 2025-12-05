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
        name: "FISCI e-Learning",
        status: "Ongoing",
        notes: "Submitted 2 Drafts, Awaiting client review"
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
    "2025-12-05": ""
};

// Helper to generate dates from Dec 2, 2025 to Dec 30, 2025
export const getDays = () => {
    const days = [];
    const start = new Date(2025, 11, 2); // Month is 0-indexed: 11 = Dec
    const end = new Date(2025, 11, 30);

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }
    return days;
};
