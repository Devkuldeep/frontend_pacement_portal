import React, { useEffect, useState } from 'react';

const CollegeProfile = () => {
    const collegeId = "12345"; // Replace with actual college ID
    const [college, setCollege] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCollege = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/college/${collegeId}`);
                if (!response.ok) throw new Error('Failed to fetch college data');
                const data = await response.json();
                setCollege(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCollege();
    }, [collegeId]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">{college?.collegeName} Profile</h1>

            {/* College Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700"><span className="font-semibold">College Code:</span> {college?.collegeCode}</p>
                    <p className="text-gray-700"><span className="font-semibold">Address:</span> {college?.address}</p>
                    <p className="text-gray-700"><span className="font-semibold">City:</span> {college?.city}</p>
                    <p className="text-gray-700"><span className="font-semibold">State:</span> {college?.state}</p>
                    <p className="text-gray-700"><span className="font-semibold">Website:</span> <a href={`https://${college?.website}`} className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">{college?.website}</a></p>
                    <p className="text-gray-700"><span className="font-semibold">Established Year:</span> {college?.establishedYear}</p>
                </div>
            </div>

            {/* Placement Head */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Placement Head</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {college?.placementHead.name}</p>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {college?.placementHead.email}</p>
                    <p className="text-gray-700"><span className="font-semibold">Phone:</span> {college?.placementHead.phone}</p>
                </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Departments</h2>
                <div className="flex flex-wrap gap-2">
                    {college?.departments.map((department, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {department}
                        </span>
                    ))}
                </div>
            </div>

            {/* Placement Statistics */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Placement Statistics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700"><span className="font-semibold">Total Students:</span> {college?.placementStats.totalStudents}</p>
                    <p className="text-gray-700"><span className="font-semibold">Students Placed:</span> {college?.placementStats.studentsPlaced}</p>
                    <p className="text-gray-700"><span className="font-semibold">Average Package:</span> ₹{college?.placementStats.avgPackage} LPA</p>
                    <p className="text-gray-700"><span className="font-semibold">Highest Package:</span> ₹{college?.placementStats.highestPackage} LPA</p>
                </div>
            </div>
        </div>
    );
};

export default CollegeProfile;