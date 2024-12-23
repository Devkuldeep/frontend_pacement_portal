import axios from 'axios';

const API_URL = 'http://localhost:3000/api/job';

export const createJob = (formData) => {
    return axios.post(`${API_URL}/create`, formData)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export const getAllJob=()=>{
    return axios.get(`${API_URL}/getAll`)
    .then((response)=> {
        // console.log(response.data);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error;
    })
}

export const getJob = (id) => {
    return axios.get(`${API_URL}/getOne/${id}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export const updateJob = (id, formData) => {
    return axios.put(`${API_URL}/update/${id}`, formData)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};

export const deleteJob = (id) => {
    return axios.delete(`${API_URL}/delete/${id}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};