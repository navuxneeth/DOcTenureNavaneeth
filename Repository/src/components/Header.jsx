import React from 'react';
import { userInfo } from '../data';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={userInfo.logoUrl} alt="Company Logo" className="company-logo" />
                <div className="company-info">
                    <h1>{userInfo.company}</h1>
                    <p className="subtitle">Tenure Navigation</p>
                </div>
            </div>
            <div className="header-right">
                <div className="user-details">
                    <h2>{userInfo.name}</h2>
                    <p className="role">{userInfo.role}</p>
                    <p className="doj">
                        <span className="doj-label">DOJ:</span> {userInfo.doj}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
