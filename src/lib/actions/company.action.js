import axios from 'axios';

const API_BASE_URL = '/api/companies'; // Adjust this based on your API endpoint

// Create a new company
export const createCompany = async (companyData) => {
    try {
        const response = await axios.post(API_BASE_URL, companyData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to create company');
    }
};

// Get company by ID
export const getCompanyById = async (companyId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${companyId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch company');
    }
};

// Update company by ID
export const updateCompanyById = async (companyId, updateData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${companyId}`, updateData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update company');
    }
};

// Delete company by ID
export const deleteCompanyById = async (companyId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${companyId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to delete company');
    }
};

// Get all companies
export const getAllCompanies = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch companies');
    }
};

// Search companies by query
export const searchCompanies = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, { params: { query } });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to search companies');
    }
};