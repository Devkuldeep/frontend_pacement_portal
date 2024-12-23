import React, { useState, useEffect } from 'react';
import { getAllJob } from '../../../lib/actions/action.job';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const StudentDashboard = () => {
    const { user } = useAuth();
    const userId = user.userId;
    const [stats, setStats] = useState({
        totalApplications: 0,
        shortlisted: 0,
        interviews: 0,
        offers: 0,
    });

    const [studentData, setStudentData] = useState([]);
    const [jobsData ,setjobsData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/student/getApplications/${userId}`);
                if (isMounted && response.data.success) {
                    setStudentData(response.data.applications);
                }
            } catch (err) {
                if (isMounted) {
                    console.error('Error:', err.message);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
        
        return () => {
            isMounted = false;
        };
    }, [userId]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/student/getAll');
                if (!response.ok) throw new Error('Failed to fetch stats');
                const data = await response.json();
                setStats(data);
            } catch (err) {
                console.error(err.message);
            }
        };
        const fetchJobs = async () => {
            try {
            const jobs = await getAllJob();
            setjobsData(jobs);
            } catch (err) {
            console.error(err.message);
            }
        };

        fetchJobs();
        fetchStats();
      
    }, []);
    
   const handleApply = async (jobId) => {
        if (!jobId || !userId) {
            alert("Invalid job or user information");
            return;
        }
        try {
            const response = await axios.post(`http://localhost:3000/api/job/${jobId}/apply/${userId}`);
            if (!response.data.success) {
                alert("Failed to apply for the job");
                return;
            }
            alert("Application Submitted Successfully!");
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } 
        }
   }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Student Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-blue-700">Total Applications</h3>
                    <p className="text-2xl text-blue-900">3</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-green-700">Shortlisted</h3>
                    <p className="text-2xl text-green-900">0</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-yellow-700">Interviews</h3>
                    <p className="text-2xl text-yellow-900">2</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-red-700">Offers</h3>
                    <p className="text-2xl text-red-900">1</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Active Jobs</h3>
                <div className="space-y-4">
                    {jobsData && jobsData.map((job) => (
                        <div key={job._id} className="border p-4 rounded-lg bg-purple-50">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-medium text-purple-800">{job.title}</h4>
                                    <p className="text-gray-600 mt-1">{job.description}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                                        View Details
                                    </button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => handleApply(job._id)}>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                                Last Date: {job.deadline}
                            </div>
                        </div>
                    ))}    
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Recent Applications</h3>
                <div className="space-y-2">
                    <div className="grid grid-cols-4 bg-teal-100 p-2 rounded">
                        <div className="px-4 py-2 font-semibold text-teal-700">Job Title</div>
                        <div className="px-4 py-2 font-semibold text-teal-700">Company</div>
                        <div className="px-4 py-2 font-semibold text-teal-700">Status</div>
                        <div className="px-4 py-2 font-semibold text-teal-700">Actions</div>
                    </div>
                    
                    {studentData.map((application) => (
                        <div key={application.jobId} className="grid grid-cols-4 p-2 border-b bg-teal-50">
                            <div className="px-4 py-2 text-lg font-semibold text-teal-800">{application.jobId.title}</div>
                            <div className="px-4 py-2 font-semibold text-teal-800">Tata Consultancy Services</div>
                            <div className="px-4 py-2 text-teal-800">pending</div>
                            <div className="px-4 py-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
