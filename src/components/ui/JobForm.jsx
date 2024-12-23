import React, { useState } from 'react';
import Modal from '@components/ui/Modal';
import {createJob} from '@lib/actions/action.job';
import { useAuth } from '../../context/AuthContext';

const JobForm = () => {
    const { user } = useAuth();
    const userId = user.userId
    const [formData, setFormData] = useState({
        companyId: userId,
        title: '',
        description: '',
        salary: '',
        location: '',
        jobType: 'Full-time',
        jobStatus: 'active',
       
        skills: [],
        minimumCGPA: '',
        eligibleBranches: [],
        deadline: '',
       
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);

        // Add API call to create a new job post
     const res = createJob(formData);
     if(res){
        alert(" Job created Sucessfully ");
        setIsModalOpen(false)
        window.location.reload();
     }

         
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                New Job Post
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Create a new job post</h2>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
                        <FormField
                            label="Job Title"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Job Description"
                            type="textarea"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Salary"
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Location"
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Job Type"
                            type="select"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleChange}
                            options={['Full-time', 'Part-time', 'Contract', 'Internship']}
                            required
                        />
                        <FormField
                            label="Application Deadline"
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Job Status"
                            type="select"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            options={['active', 'inactive']}
                            required
                        />
                         <FormField
                            label="Minimum CGPA"
                            type="number"
                            name="minimumCGPA"
                            value={formData.minimumCGPA}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Eligible Branches"
                            type="text"
                            name="eligibleBranches"
                            value={formData.eligibleBranches}
                            onChange={handleChange}
                            required
                        />
                        <FormField
                            label="Skills"
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            required
                        />
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                        Close Modal
                    </button>
                </div>
            </Modal>
        </div>
    );
};

const FormField = ({ label, type, name, value, onChange, options, required }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required={required}
            />
        ) : type === 'select' ? (
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required={required}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required={required}
            />
        )}
    </div>
);

export default JobForm;
