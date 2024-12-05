import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyProfile = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                const response = await axios.get('/api/company'); // Adjust the API endpoint as needed
                setCompany(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCompanyData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="company-profile">
            <h1>{company.companyName}</h1>
            <p><strong>Contact Person:</strong> {company.contactPerson}</p>
            <p><strong>Contact Email:</strong> {company.contactEmail}</p>
            <p><strong>Contact Phone:</strong> {company.contactPhone}</p>
            <p><strong>Company Website:</strong> <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer">{company.companyWebsite}</a></p>
            <p><strong>Company Type:</strong> {company.companyType}</p>
            <p><strong>Industry Type:</strong> {company.industryType}</p>
            <p><strong>Company Address:</strong> {company.companyAddress}</p>
            <p><strong>Number of Employees:</strong> {company.numberOfEmployees}</p>
            <p><strong>Company Description:</strong> {company.companyDescription}</p>
            <p><strong>Internship Availability:</strong> {company.internshipAvailability ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default CompanyProfile;