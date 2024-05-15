import axios from 'axios';

const API_URL = 'unityviddb.database.windows.net/api/';

export const getSession = async () => {
    return axios.get(`${API_URL}Session/`)
}

export const getParticipant= async () => {
    return axios.get(`${API_URL}Participant/`)
}

export const getEncryptionKey = async () => {
    return axios.get(`${API_URL}EncryptionKey/`)
}
export const postEncryptionKey = async () => {
    return axios.post(`${API_URL}EncryptionKey/`)
}