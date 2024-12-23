import React, { useState, useEffect } from 'react';
import JobForm from '../../ui/JobForm';
import axios from 'axios';
import JobUpdateForm from '../../ui/JobUpdateForm';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router';
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';

const CompanyDashboard = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const userId = user.userId;
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/job/company/${userId}`)
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [userId]);

    const handleDelete = (job) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            axios.delete(`http://localhost:3000/api/job/delete/${job.job._id}`)
                .then((response) => {
                    console.log(response.data);
                    alert("Job Deleted Successfully!");
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const [activeTab, setActiveTab] = useState('jobListings');

    const JobListings = () => (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Job Listings</h3>
                <JobForm />
            </div>
            <div className="grid gap-4">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-lg font-semibold">{job.title}</h4>
                                <p className="text-sm text-gray-600">{job.location}</p>
                            </div>
                            <div className="flex space-x-2">
                                <JobUpdateForm job={job} />
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-red-600 transition-colors duration-300"
                                    onClick={() => handleDelete({ job })}
                                >
                                    <FaTrash />
                                    <span>Delete</span>
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-green-600 transition-colors duration-300"
                                    onClick={() => navigate('/company/dashboard/applications/' + job._id)}
                                >
                                    <FaEye />
                                    <span>View Applications</span>
                                </button>
                            </div>
                        </div>
                        <p className="mt-2 text-gray-700">{job.description}</p>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Salary: {job.salary}</p>
                                <p className="text-sm text-gray-600">Job Type: {job.jobType}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Deadline: {job.deadline}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Company Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 flex flex-col items-center">
                    <h3 className="font-semibold">Total Jobs Posted</h3>
                    <p className="text-2xl">{jobs.length}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 flex flex-col items-center">
                    <h3 className="font-semibold">Active Applications</h3>
                    <p className="text-2xl">42</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 flex flex-col items-center">
                    <h3 className="font-semibold">Shortlisted Candidates</h3>
                    <p className="text-2xl">12</p>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
                <JobListings />
            </div>
        </div>
    );
};

export default CompanyDashboard;
