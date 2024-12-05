import React, { useState, useEffect } from 'react';


const StudentDashboard = () => {
    const [stats, setStats] = useState({
        totalApplications: 0,
        shortlisted: 0,
        interviews: 0,
        offers: 0,
    });

    useEffect(() => {
        // Fetch student dashboard stats from API
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/student/dashboard-stats');
                if (!response.ok) throw new Error('Failed to fetch stats');
                const data = await response.json();
                setStats(data);
            } catch (err) {
                console.error(err.message);
            }
        };
        fetchStats();
    }, []);
    

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Total Applications</h3>
                    <p className="text-2xl">{stats.totalApplications}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Shortlisted</h3>
                    <p className="text-2xl">{stats.shortlisted}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Interviews</h3>
                    <p className="text-2xl">{stats.interviews}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Offers</h3>
                    <p className="text-2xl">{stats.offers}</p>
                </div>
            </div>

        
            {/* Job Notifications with Details */}
            <div className="bg-white p-6 rounded-lg shadow mt-6">
                <h3 className="text-xl font-semibold mb-4">Active Job Postings</h3>
                <div className="space-y-4">
                    <div className="border p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-medium">Software Developer</h4>
                                <p className="text-gray-600 mt-1">We are looking for a skilled software developer to join our team. Experience with React and Node.js required.</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            Last Date: March 15, 2024
                        </div>
                    </div>

                    <div className="border p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-medium">Frontend Engineer</h4>
                                <p className="text-gray-600 mt-1">Looking for a frontend developer with expertise in modern JavaScript frameworks and responsive design.</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Apply Now
                            </button>
                        </div>
                        <div className="mt-4 text-sm text-gray-500">
                            Last Date: March 20, 2024
                        </div>
                    </div>
                </div>
            </div>

             {/* Recent Applications */}
             <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2">Company</th>
                                <th className="px-4 py-2">Position</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Date Applied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through recent applications here */}
                            <tr>
                                <td className="border px-4 py-2">Tech Corp</td>
                                <td className="border px-4 py-2">Software Engineer</td>
                                <td className="border px-4 py-2">Pending</td>
                                <td className="border px-4 py-2">2024-02-01</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;