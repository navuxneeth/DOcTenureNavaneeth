import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import DailyLogTable from './components/DailyLogTable';
import CalendarView from './components/CalendarView';
import ProjectsTable from './components/ProjectsTable';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('calendar'); // table or calendar
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const tableRef = useRef(null);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Save preference
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleExportCSV = () => {
    if (tableRef.current && tableRef.current.exportToCSV) {
      tableRef.current.exportToCSV();
    }
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <div className="view-toggle-main">
          <button
            className={activeTab === 'table' ? 'active' : ''}
            onClick={() => setActiveTab('table')}
          >
            Table View
          </button>
          <button
            className={activeTab === 'calendar' ? 'active' : ''}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar View
          </button>
        </div>

        <div className="content-area">
          {activeTab === 'table' ? <DailyLogTable ref={tableRef} /> : <CalendarView />}
        </div>

        <div className="projects-section">
          <ProjectsTable />
        </div>
      </main>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} onExportCSV={handleExportCSV} />
    </div>
  );
}

export default App;
