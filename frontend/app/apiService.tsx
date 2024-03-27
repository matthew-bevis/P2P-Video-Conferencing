import axios from 'axios';

const API_URL = 'https://localhost:8000/api/';

export const getSession = async () => {
    return axios.get(`${API_URL}Session/`)
}

export const getParticipant= async () => {
    return axios.get(`${API_URL}Participant/`)
}

export const getEncryptionKey = async () => {
    return axios.get(`${API_URL}EncryptionKey/`)
}