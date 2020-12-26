import fetchApi from './fetchApi';

const hunterApi = {
    createCharacter: async (parameters) => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.post('/characters', parameters, config);
        return data;
    },
    getCharacter: async () => {
        const token = 'e9e54356514faa4bf4dfb15858802f6e';
        const config = {
            Authorization: `Bearer ${token}`,
        };
        const data = await fetchApi.get('/characters', config);
        return data;
    }
};

export default hunterApi;