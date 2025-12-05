import React, { useState } from 'react';
import Header from './components/Header';
import DailyLogTable from './components/DailyLogTable';
import CalendarView from './components/CalendarView';
import ProjectsTable from './components/ProjectsTable';

function App() {
  const [activeTab, setActiveTab] = useState('calendar'); // table or calendar

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
          {activeTab === 'table' ? <DailyLogTable /> : <CalendarView />}
        </div>

        <div className="projects-section">
          <ProjectsTable />
        </div>
      </main>
    </div>
  );
}

export default App;
