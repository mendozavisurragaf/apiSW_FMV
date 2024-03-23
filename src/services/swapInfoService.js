const axios = require('axios');
const {saveItem, getItem} = require('../db/dynamodb');
const {get} = require("axios");


class SwapInfoService {

    async obtenerPlanetaSWApiService(id) {
        try {
            const response = await axios.get('https://swapi.py4e.com/api/planets/' + id);
            return response.data;
        } catch (error) {
            throw new Error('Error al recuperar información de SWAPI');
        }
    }

    async obtenerPlanetaService(id) {
        const data = await getItem(id);
        return JSON.parse(JSON.stringify(data.Item.planet.S));
    }

    async guardarPlanetaService(item) {
        await saveItem(item);
    }
}


module.exports = SwapInfoService;