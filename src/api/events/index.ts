import axios from 'axios';

const baseUrl = 'http://localhost:3000/events';

export const getEvents = async (limit, page) => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                limit: limit,
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching events', error);
    }
};