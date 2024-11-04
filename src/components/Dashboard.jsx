// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="panel">
                <h3>Panel 1</h3>
                <p className="aggregated-data">100</p>
            </div>
            <div className="panel">
                <h3>Panel 2</h3>
                <p className="aggregated-data">200</p>
            </div>
            <div className="panel">
                <h3>Panel 3</h3>
                <p className="aggregated-data">300</p>
            </div>
        </div>
    );
};

export default Dashboard;