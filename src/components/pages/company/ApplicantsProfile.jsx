
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const ApplicantsProfile = () => {
    const { studentId } = useParams();
    console.log(studentId);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/student//getOne/${studentId}`, {
                    withCredentials: true
                });
                if (!response.data.success) {
                    throw new Error('Failed to fetch student profile');
                }
                console.log(response.data.student);
                setProfile(response.data.student);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [studentId]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">{profile?.name} Profile</h1>

        <div className="grid gap-4">

            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600">Name</p>
                        <p className="text-gray-800 font-semibold">{profile?.name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Email</p>
                        <p className="text-gray-800 font-semibold">{profile?.email}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Phone</p>
                        <p className="text-gray-800 font-semibold">{profile?.phoneNumber}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Date of Birth</p>
                        <p className="text-gray-800 font-semibold">{profile?.dateOfBirth}</p>
                    </div>
                </div>
            </div>        

            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Educational Details</h2>
                <div className="grid grid-cols-2 gap-4">
                   
                    <div>
                        <p className="text-gray-600">10th</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.tenth?.board}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.tenth?.percentage}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.tenth?.yearOfPassing}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">12th</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.twelfth?.board}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.twelfth?.percentage}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.twelfth?.yearOfPassing}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Graduation</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.ug?.course}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.ug?.cgpa}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.ug?.yearOfPassing}</p>
                     </div>
                    <div>
                        <p className="text-gray-600">Post Graduation</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.pg?.course}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.pg?.cgpa}</p>
                        <p className="text-gray-800 font-semibold">{profile?.education?.pg?.yearOfPassing}</p>
                     </div>              
                </div>
            </div> 

            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>                           
                        <p className="text-gray-800 font-semibold">{profile?.skills}</p>
                    </div>                        
                </div>
            </div>    
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Resume</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>                           
                    {profile?.resume && (
                        <a 
                        href={profile.resume.startsWith('http') ? profile.resume : `https://${profile.resume}`} 
                         target='_blank' 
                         rel="noopener noreferrer" 
                        className="text-gray-800 font-semibold"
                      >
                      View Resume
                     </a>
                       )}
                    </div>                        
                </div>
            </div>  

        </div>
    </div>
    );
};

export default ApplicantsProfile;