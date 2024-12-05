import React, { useState } from 'react';

const CompanyDashboard = () => {
    // Sample state for jobs and applications
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: 'Software Engineer',
            applications: 25,
            status: 'active',
            criteria: {
                cgpa: 7.5,
                branch: ['CSE', 'IT'],
                skills: ['React', 'Node.js'],
            },
        },
        // Add more sample jobs as needed
    ]);

    const [activeTab, setActiveTab] = useState('jobListings');

    // Tab components
    const JobListings = () => (
        <div className="space-y-4">
            <div className="flex justify-between mb-4">
                <h3 className="text-xl font-semibold">Job Listings</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Post New Job
                </button>
            </div>
            <div className="grid gap-4">
                {jobs.map((job) => (
                    <div key={job.id} className="border p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-medium">{job.title}</h4>
                            <span className={`px-2 py-1 rounded ${
                                job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100'
                            }`}>
                                {job.status}
                            </span>
                        </div>
                        <p className="text-gray-600">Applications: {job.applications}</p>
                        <div className="mt-2 flex gap-2">
                            <button className="text-blue-500 hover:underline">Edit</button>
                            <button className="text-red-500 hover:underline">Delete</button>
                            <button className="text-green-500 hover:underline">View Applications</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const EligibilityCriteria = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Eligibility Criteria Management</h3>
            <form className="space-y-4">
                <div>
                    <label className="block font-medium">Minimum CGPA</label>
                    <input type="number" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                    <label className="block font-medium">Eligible Branches</label>
                    <select multiple className="w-full px-4 py-2 border rounded-md">
                        <option>Computer Science</option>
                        <option>Information Technology</option>
                        <option>Electronics</option>
                        <option>Mechanical</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Required Skills</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md" />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Update Criteria
                </button>
            </form>
        </div>
    );

    const ApplicationManagement = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Application Management</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Student Name</th>
                            <th className="px-4 py-2">Position</th>
                            <th className="px-4 py-2">CGPA</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">John Doe</td>
                            <td className="border px-4 py-2">Software Engineer</td>
                            <td className="border px-4 py-2">8.5</td>
                            <td className="border px-4 py-2">Pending</td>
                            <td className="border px-4 py-2">
                                <button className="text-green-500 mr-2">Shortlist</button>
                                <button className="text-red-500">Reject</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Company Dashboard</h2>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Total Jobs Posted</h3>
                    <p className="text-2xl">{jobs.length}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Active Applications</h3>
                    <p className="text-2xl">42</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">Shortlisted Candidates</h3>
                    <p className="text-2xl">12</p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'jobListings' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('jobListings')}
                >
                    Job Listings
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'eligibility' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('eligibility')}
                >
                    Eligibility Criteria
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${
                        activeTab === 'applications' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('applications')}
                >
                    Applications
                </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6 rounded-lg shadow">
                {activeTab === 'jobListings' && <JobListings />}
                {activeTab === 'eligibility' && <EligibilityCriteria />}
                {activeTab === 'applications' && <ApplicationManagement />}
            </div>
        </div>
    );
};

export default CompanyDashboard;