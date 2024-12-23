import React, { useState } from 'react';

const CollegeForm = () => {
    const [formData, setFormData] = useState({
        // Personal Information
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        designation: '',
        department: '',
        
        // College Information
        collegeName: '',
        collegeCode: '',
        university: '',
        location: '',
        
        // Portal Access Details
        username: '',
        password: '',
        role: '',
        accessLevel: '',
        
        // Additional Details
        experience: '',
        specialization: '',
        responsibilities: '',
        
        // Documents
        profilePicture: null,
        idProof: null,
        
        // Declaration
        agreement: false
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.employeeId) newErrors.employeeId = "Employee ID is required";
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Valid email is required";
        }
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Valid 10-digit phone number is required";
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            alert('Form submitted successfully!');
            // Add API call here to submit the form data
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
                <h1 className="text-3xl font-bold text-center mb-8">College Placement Staff Registration</h1>

                {/* Personal Information Section */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Employee ID *</label>
                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Designation *</label>
                            <select
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            >
                                <option value="">Select Designation</option>
                                <option value="tpo">Training & Placement Officer</option>
                                <option value="coordinator">Placement Coordinator</option>
                                <option value="assistant">Placement Assistant</option>
                                <option value="admin">Administrative Staff</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* College Information */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">College Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">College Name *</label>
                            <input
                                type="text"
                                name="collegeName"
                                value={formData.collegeName}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">College Code *</label>
                            <input
                                type="text"
                                name="collegeCode"
                                value={formData.collegeCode}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">University *</label>
                            <input
                                type="text"
                                name="university"
                                value={formData.university}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Location *</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                    </div>
                </section>

                {/* Portal Access Details */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Portal Access Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Username *</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password *</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Role *</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="coordinator">Coordinator</option>
                                <option value="viewer">Viewer</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Access Level *</label>
                            <select
                                name="accessLevel"
                                value={formData.accessLevel}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                required
                            >
                                <option value="">Select Access Level</option>
                                <option value="full">Full Access</option>
                                <option value="limited">Limited Access</option>
                                <option value="readonly">Read Only</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Additional Details */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Specialization</label>
                            <input
                                type="text"
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Key Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                value={formData.responsibilities}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                rows="3"
                            />
                        </div>
                    </div>
                </section>

                {/* Document Upload */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Profile Picture</label>
                            <input
                                type="file"
                                name="profilePicture"
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                accept="image/*"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">ID Proof</label>
                            <input
                                type="file"
                                name="idProof"
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2"
                                accept=".pdf,.jpg,.jpeg,.png"
                            />
                        </div>
                    </div>
                </section>

                {/* Declaration */}
                <section className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            required
                        />
                        <label className="text-sm">
                            I hereby declare that all the information provided is true to the best of my knowledge.
                        </label>
                    </div>
                </section>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700"
                    >
                        Submit Registration
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CollegeForm;