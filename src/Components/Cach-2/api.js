import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const fetchTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const addTask = async (task) => {
    try {
        const response = await api.post('/tasks', task);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        await api.delete(`/tasks/${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await api.put(`/tasks/${id}`, task);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
