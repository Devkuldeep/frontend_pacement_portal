import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth } from "../../../context/AuthContext";

const CompanyRegistrationForm = () => {
  const { user } = useAuth();
   const userId = user.userId;

  const [formData, setFormData] = useState({

    companyId: userId,
    companyName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    companyWebsite: "",
    companyType: "",
    industryType: "",
    companyAddress: "",
    companyDescription: "",
    internshipAvailability: false,
  
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.contactPerson) newErrors.contactPerson = "Contact Person is required";
    if (!formData.contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Valid Email is required";
    }
    if (!formData.contactPhone || !/^\d{10}$/.test(formData.contactPhone)) {
      newErrors.contactPhone = "Valid 10-digit Phone Number is required";
    }
    if (!formData.companyWebsite || !/^https?:\/\/[\w.-]+\.[a-z]{2,}$/.test(formData.companyWebsite)) {
      newErrors.companyWebsite = "Valid Website URL is required";
    }
    if (!formData.companyType) newErrors.companyType = "Company Type is required";
    if (!formData.industryType) newErrors.industryType = "Industry Type is required";
    if (!formData.companyAddress) newErrors.companyAddress = "Company Address is required";
    if (!formData.companyDescription) newErrors.companyDescription = "Company Description is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {

    try {
      console.log('Form submitted:', formData);
      await axios.post('http://localhost:3000/api/company/create', formData)
        .then(response => {
          console.log('Form submitted successfully:', response.data);
          alert("Form Submitted Successfully!");     
        
    })
   
    } catch (error) {
      console.error('Form submission error:', error);
    }
     
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Company Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.companyName && (
            <p className="text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label className="block font-medium">Contact Person</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.contactPerson ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.contactPerson && (
            <p className="text-sm text-red-500">{errors.contactPerson}</p>
          )}
        </div>

        {/* Contact Email */}
        <div>
          <label className="block font-medium">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.contactEmail ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.contactEmail && (
            <p className="text-sm text-red-500">{errors.contactEmail}</p>
          )}
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block font-medium">Contact Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.contactPhone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.contactPhone && (
            <p className="text-sm text-red-500">{errors.contactPhone}</p>
          )}
        </div>

        {/* Company Website */}
        <div>
          <label className="block font-medium">Company Website</label>
          <input
            type="url"
            name="companyWebsite"
            value={formData.companyWebsite}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.companyWebsite ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.companyWebsite && (
            <p className="text-sm text-red-500">{errors.companyWebsite}</p>
          )}
        </div>

     
        <div>
  <label className="block font-medium">Company Type</label>
  <select
    name="companyType"
    value={formData.companyType}
    onChange={handleChange}
    className={`w-full px-4 py-2 border rounded-md ${
      errors.companyType ? "border-red-500" : "border-gray-300"
    }`}
  >
  
    <option value="">Select Type</option>
    <option value="STARTUP">Startup</option>
    <option value="MNC">MNC</option>
    <option value="SME">Corporate</option>
    <option value="GOVERNMENT">Government</option>
    <option value="NGO">NGO</option>
    <option value="OTHERS">Others</option>
  </select>
  {errors.companyType && (
    <p className="text-sm text-red-500">{errors.companyType}</p>
  )}
</div>

{/* Industry Type */}
<div>
  <label className="block font-medium">Industry Type</label>
  <select
    name="industryType"
    value={formData.industryType}
    onChange={handleChange}
    className={`w-full px-4 py-2 border rounded-md ${
      errors.industryType ? "border-red-500" : "border-gray-300"
    }`}
  >
    <option value="">Select Industry</option>
    <option value="IT">Information Technology</option>
    <option value="FINANCE">Finance</option>
    <option value="HEALTHCARE">Healthcare</option>
    <option value="EDUCATION">Education</option>
    <option value="MARKETING">Marketing</option>
    <option value="OTHERS">Others</option>

  </select>
  {errors.industryType && (
    <p className="text-sm text-red-500">{errors.industryType}</p>
  )}
</div>

{/* Company Address */}
<div className="col-span-2">
  <label className="block font-medium">Company Address</label>
  <textarea
    name="companyAddress"
    value={formData.companyAddress}
    onChange={handleChange}
    className={`w-full px-4 py-2 border rounded-md ${
      errors.companyAddress ? "border-red-500" : "border-gray-300"
    }`}
    rows="3"
  />
  {errors.companyAddress && (
    <p className="text-sm text-red-500">{errors.companyAddress}</p>
  )}
</div>



{/* Company Description */}
<div className="col-span-2">
  <label className="block font-medium">Company Description</label>
  <textarea
    name="companyDescription"
    value={formData.companyDescription}
    onChange={handleChange}
    className={`w-full px-4 py-2 border rounded-md ${
      errors.companyDescription ? "border-red-500" : "border-gray-300"
    }`}
    rows="4"
  />
  {errors.companyDescription && (
    <p className="text-sm text-red-500">{errors.companyDescription}</p>
  )}
</div>

{/* Internship Availability */}
<div className="col-span-2">
  <label className="flex items-center space-x-2">
    <input
      type="checkbox"
      name="internshipAvailability"
      checked={formData.internshipAvailability}
      onChange={handleChange}
      className="rounded"
    />
    <span className="font-medium">Internship Opportunities Available</span>
  </label>
</div>



{/* Submit Button */}
<div className="col-span-2">
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
  >
    Register Company
  </button>
</div>


      </form>
    </div>


  );
};

export default CompanyRegistrationForm;

