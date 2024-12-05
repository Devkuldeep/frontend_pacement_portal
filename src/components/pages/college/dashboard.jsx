import React, { useState, useEffect } from 'react';

const CollegeDashboard = () => {
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalFaculty: 0,
        activePrograms: 0,
        upcomingEvents: [],
        placementStats: {
            totalOffers: 0,
            averagePackage: 0,
            companiesVisited: 0,
            upcomingDrives: []
        }
    });

    useEffect(() => {
        setStats({
            totalStudents: 1200,
            totalFaculty: 80,
            activePrograms: 15,
            upcomingEvents: [
                { id: 1, name: 'Annual Sports Meet', date: '2024-02-15' },
                { id: 2, name: 'Technical Symposium', date: '2024-02-20' },
                { id: 3, name: 'Campus Recruitment Drive', date: '2024-03-01' }
            ],
            placementStats: {
                totalOffers: 450,
                averagePackage: 8.5,
                companiesVisited: 25,
                upcomingDrives: [
                    { id: 1, company: 'Tech Corp', date: '2024-02-25', role: 'Software Engineer' },
                    { id: 2, company: 'Global Systems', date: '2024-03-05', role: 'System Analyst' },
                    { id: 3, company: 'Innovation Labs', date: '2024-03-15', role: 'Product Developer' }
                ]
            }
        });
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Existing code remains the same until the Quick Actions section */}

            {/* Add this new section before the closing div */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Placement Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-600">Total Offers</h3>
                        <p className="text-2xl font-bold text-green-600">{stats.placementStats.totalOffers}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-600">Average Package (LPA)</h3>
                        <p className="text-2xl font-bold text-green-600">{stats.placementStats.averagePackage}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-600">Companies Visited</h3>
                        <p className="text-2xl font-bold text-green-600">{stats.placementStats.companiesVisited}</p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">Upcoming Placement Drives</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stats.placementStats.upcomingDrives.map(drive => (
                        <div key={drive.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-800">{drive.company}</h4>
                            <p className="text-gray-600">Role: {drive.role}</p>
                            <p className="text-gray-600">Date: {drive.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollegeDashboard;