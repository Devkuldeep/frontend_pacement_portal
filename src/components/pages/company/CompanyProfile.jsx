import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const CompanyProfile = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const { user } = useAuth();
const userId = user.userId;

// const company = {
//     companyName: 'Techwear',
//     contactPerson: 'Responsive Web Design',
//     contactEmail: 'skycreator360@gmail.com',
//     contactPhone: '6268363536',
//     companyWebsite: 'https://developer.mozilla.org',
//     companyType: 'STARTUP',
//     industryType: 'FINANCE',
//     companyAddress: 'Village Bore, Subdistrict - Baramkela, Dist. - Raighar',
//     companyDescription: 'This is a techwear company that provides the best techwear in the world.',
//     internshipAvailability: true,
    
//   };





useEffect(() => {
    const fetchCompanyData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/company/getOne/${userId}`);
            
            if (!response.data.success) {
                if (response.data.message === 'Company not found') {
                    window.location.href = 'http://localhost:5173/company/registration';
                    return;
                }
               
            }
            // console.log(response.data.company);
            setCompany(response.data.company);
            setLoading(false);
        } catch (err) {
            console.error(err.message);
            if (err.response.data.message==='Company not found') {
                window.location.href = 'http://localhost:5173/company/registration';
            } else {    
                setError(err.message);
            }
            setLoading(false);
        }
    };

    fetchCompanyData();
}, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-gray-100">
  <div className="pt-6">
    {/* Company Header */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        {/* Company Logo */}
        <div className="mx-auto mt-6">
          <img
            alt="Company Logo"
            src="/company.jpeg"
            className="object-cover w-full h-64 sm:rounded-lg border border-gray-300 shadow-lg"
          />
        </div>
        {/* Company Name */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl sm:text-4xl text-center font-bold text-primary-dark">
            {company.companyName}
          </h2>
          <p className="text-base text-gray-600 mt-2">Here At Your Campus</p>
        </div>
      </div>
    </div>

    {/* Company Details */}
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

      {/* Company Information */}
      <div className="mt-4 lg:row-span-3 lg:mt-0 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-primary-dark mb-4">Company Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Industry</h3>
            <p className="text-base text-gray-600">{company.industryType}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Company Type</h3>
            <p className="text-base text-gray-600">{company.companyType}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Address</h3>
            <p className="text-base text-gray-600">{company.companyAddress}</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-10 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 lg:pt-6 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-primary-dark">About</h3>
        <div className="space-y-6 mt-4">
          <p className="text-base text-gray-600">{company.companyDescription}</p>
        </div>

        {/* Internship Availability */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-primary-dark">Internship Availability</h3>
          <div className="mt-4">
            <p
              className={`text-base font-medium ${
                company.internshipAvailability ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {company.internshipAvailability ? 'Available' : 'Not Available'}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-primary-dark">Contact Information</h3>
          <div className="mt-4 space-y-2">
            <p className="text-base text-gray-600">
              <span className="font-bold">Contact Person:</span> {company.contactPerson}
            </p>
            <p className="text-base text-gray-600">
              <span className="font-bold">Email:</span> {company.contactEmail}
            </p>
            <p className="text-base text-gray-600">
              <span className="font-bold">Phone:</span> {company.contactPhone}
            </p>
            <p className="text-base text-gray-600">
              <span className="font-bold">Website:</span>{' '}
              <a href={company.companyWebsite} className="text-blue-500 hover:underline">
                {company.companyWebsite}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
   
};

export default CompanyProfile;
