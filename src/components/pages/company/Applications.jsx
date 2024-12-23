import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router'

const Applications = () => {
   const navigate = useNavigate();
   const {jobId} = useParams();
   const [applicants, setApplicant] = useState([]);

useEffect(() => {
      const fetchApplicant = async () => {
            try {
                 const response = await axios.get(`http://localhost:3000/api/job/applications/${jobId}`);
                 if (!response.data.success) {
                     throw new Error('Failed to fetch applicant data');
                 }
                 console.log(response.data.jobWithApplicants);
                 setApplicant(response.data.jobWithApplicants.applications);
            } catch (error) {
                 console.error(error);
            }
      };
      fetchApplicant();
 }, [jobId]);
    return (
        <div className="bg-gray-50 min-h-screen py-8 max-w-7xl mx-auto px-8">
            <div className="max-w-6xl mx-auto px-4"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Job Applications</h2>
                <div className="space-y-4 px-4 max-w-6xl mx-auto">
                    {applicants.map((applicant) => (
                        <div 
                            key={applicant} 
                            className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
                        >
                            <div className="flex justify-between items-center">
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-gray-800">Applicant {applicant.applicant.username}</h5>
                                    <p className="text-gray-600">Email : {applicant.applicant.email}</p>
                                    <span className="text-sm text-gray-500">Applied on: {new Date().toLocaleDateString()}</span>
                                </div>
                                <div className="flex space-x-3">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        onClick={() => navigate(`/company/dashboard/applications/${jobId}/${applicant.applicant._id}`)}
                                    >
                                        View Profile
                                    </button>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                        Shortlist
                                    </button>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       
    )
}

export default Applications
