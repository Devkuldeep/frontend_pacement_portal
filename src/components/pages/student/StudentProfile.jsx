import React, { useEffect, useState } from 'react';

const Profile = () => {
    const studentId = "6751b9d6e9e951cd5945a1fb";
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/student/${studentId}`);
                if (!response.ok) throw new Error('Failed to fetch profile data');
                const data = await response.json();
                setProfile(data);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">{profile?.name}'s Profile</h1>

            {/* Profile Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {profile?.email}</p>
                    <p className="text-gray-700"><span className="font-semibold">Student ID:</span> {profile?.studentId}</p>
                    <p className="text-gray-700"><span className="font-semibold">Department:</span> {profile?.department}</p>
                    <p className="text-gray-700"><span className="font-semibold">Course:</span> {profile?.course}</p>
                    <p className="text-gray-700"><span className="font-semibold">CGPA:</span> {profile?.cgpa}</p>
                    <p className="text-gray-700"><span className="font-semibold">Phone:</span> {profile?.phoneNumber}</p>
                    <p className="text-gray-700"><span className="font-semibold">LinkedIn:</span> 
                        <a href={`https://${profile?.linkedin}`} className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">{profile?.linkedin}</a>
                    </p>
                    <p className="text-gray-700"><span className="font-semibold">Resume:</span> 
                        <a href={profile?.resume} className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {profile?.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

      

            {/* Education */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <p className="text-gray-700"><span className="font-semibold">10th:</span> {profile?.education.tenth.percentage}% from {profile?.education.tenth.board} ({profile?.education.tenth.yearOfPassing})</p>
                        <p className="text-gray-700"><span className="font-semibold">12th:</span> {profile?.education.twelfth.percentage}% from {profile?.education.twelfth.board} ({profile?.education.twelfth.yearOfPassing})</p>
                        <p className="text-gray-700"><span className="font-semibold">UG:</span> {profile?.education.ug.cgpa} CGPA from {profile?.education.ug.university} ({profile?.education.ug.yearOfPassing})</p>
                        <p className="text-gray-700"><span className="font-semibold">PG:</span> {profile?.education.pg.cgpa} CGPA from {profile?.education.pg.university} ({profile?.education.pg.yearOfPassing})</p>
                    </div>
                </div>
            </div>

            {/* Placement Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Placement Status</h2>
                {profile?.placementStatus.isPlaced ? (
                    <p className="text-green-600">
                        Placed at <span className="font-medium">{profile?.placementStatus.company}</span> as a {profile?.placementStatus.jobRole} with a package of ₹{profile?.placementStatus.package}
                    </p>
                ) : (
                    <p className="text-yellow-600">Not Placed Yet</p>
                )}
            </div>

            
        </div>
    );
};

export default Profile;
