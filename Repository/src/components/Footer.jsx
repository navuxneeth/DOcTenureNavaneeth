import React from 'react';

const Footer = ({ darkMode, setDarkMode, onExportCSV }) => {
    return (
        <footer className="footer">
            <button 
                className="export-csv-btn" 
                onClick={onExportCSV}
                aria-label="Export table as CSV"
            >
                Export table as .CSV
            </button>
            
            <div className="dark-mode-switch-container">
                <span className="switch-label">Dark Mode</span>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                        aria-label="Toggle dark mode"
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </footer>
    );
};

export default Footer;
