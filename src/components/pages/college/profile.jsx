import React, { useState } from 'react';

const CollegeProfile = () => {
    const demoCollege = {
        collegeName: "Rungta College of Engineering and Technology",
        collegeCode: "DC123",
        address: "123 Bhilai,Chhattisgarh",
        city: "Bhilai",
        state: "Chhattisgarh",
        website: "www.rugta.ac.com",
        establishedYear: 2000,
        placementHead: {
            name: "Ramesh Kumar",
            email: "ramesh@democollege.com",
            phone: "123-456-7890"
        },
        departments: ["Computer Science", "Mechanical Engineering", "Electrical Engineering"],
        placementStats: {
            totalStudents: 500,
            studentsPlaced: 450,
            avgPackage: 6,
            highestPackage: 12
        }
    };

    const [college] = useState(demoCollege);

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
