import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

const Profile = () => {
    const { user } = useAuth();
    const studentId = user.userId;
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/student/getOne/${studentId}`, {
                    withCredentials: true
                });

                if (response.data.success === false) {
                    window.location.href = 'http://localhost:5173/student/registration';
                    return;
                }
                setProfile(response.data.student);
            } catch (err) {
                if (err.response.data.success === false) {
                    window.location.href = 'http://localhost:5173/student/registration';
                    return;
                }
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
        <div className="max-w-6xl mx-auto p-6 space-y-8 font-sans">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center uppercase">{profile?.name} Profile</h1>

            <div className="grid gap-6">

                <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Personal Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 uppercase">Name</p>
                            <p className="text-gray-800 font-semibold uppercase">{profile?.name}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase">Email</p>
                            <p className="text-gray-800 font-semibold uppercase">{profile?.email}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase">Phone</p>
                            <p className="text-gray-800 font-semibold uppercase">{profile?.phoneNumber}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase">Date of Birth</p>
                            <p className="text-gray-800 font-semibold uppercase">{profile?.dateOfBirth}</p>
                        </div>
                    </div>
                </div>        

                <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Educational Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 uppercase font-bold text-lg">10th</p>
                            <p className="text-gray-800 font-semibold uppercase">Board : {profile?.education?.tenth?.board}</p>
                            <p className="text-gray-800 font-semibold uppercase">Percentage :  {profile?.education?.tenth?.percentage}</p>
                            <p className="text-gray-800 font-semibold uppercase">Year Of passing :  {profile?.education?.tenth?.yearOfPassing}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase font-bold text-lg">12th</p>
                            <p className="text-gray-800 font-semibold uppercase">Board : {profile?.education?.twelfth?.board}</p>
                            <p className="text-gray-800 font-semibold uppercase">Percentage : {profile?.education?.twelfth?.percentage}</p>
                            <p className="text-gray-800 font-semibold uppercase">Year Of passing : {profile?.education?.twelfth?.yearOfPassing}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase font-bold text-lg">Graduation</p>
                            <p className="text-gray-800 font-semibold uppercase">Course :  {profile?.education?.ug?.course}</p>
                            <p className="text-gray-800 font-semibold uppercase">Cgpa : {profile?.education?.ug?.cgpa}</p>
                            <p className="text-gray-800 font-semibold uppercase">Year Of Passing : {profile?.education?.ug?.yearOfPassing}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 uppercase font-bold text-lg">Post Graduation</p>
                            <p className="text-gray-800 font-semibold uppercase">Course : {profile?.education?.pg?.course}</p>
                            <p className="text-gray-800 font-semibold uppercase">Cgpa : {profile?.education?.pg?.cgpa}</p>
                            <p className="text-gray-800 font-semibold uppercase">Year Of Passing : {profile?.education?.pg?.yearOfPassing}</p>
                        </div>              
                    </div>
                </div> 

                <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>                           
                            <p className="text-gray-800 font-semibold uppercase">{profile?.skills}</p>
                        </div>                        
                    </div>
                </div>    
                <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Resume</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>                           
                        {profile?.resume && (
                            <a 
                            href={profile.resume.startsWith('http') ? profile.resume : `https://${profile.resume}`} 
                             target='_blank' 
                             rel="noopener noreferrer" 
                            className="text-gray-800 font-semibold underline uppercase"
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

export default Profile;
