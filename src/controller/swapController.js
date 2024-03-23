const SwapInfoService= require('../services/swapInfoService')
const Request = require('../model/requestModel')
const planeta = require('../model/planetaModel')
const Utils = require('../utils/utils');

const swapInfoService = new SwapInfoService();
const obtenerPlanetaSWApi = async (event) => {
    try {
        const {id} = event.pathParameters;
        const data = await swapInfoService.obtenerPlanetaSWApiService(id);
        return new Request(
            200,
            JSON.stringify(Utils.planetaUtil(data))
        );
    } catch (error) {
        return new Request(500, JSON.stringify({message: error.message}));
    }
};


const obtenerPlaneta = async (event) => {
    try {
        const {id} = event.pathParameters;
        const body = await swapInfoService.obtenerPlanetaService(id);
        return new Request(
            200,
            body
        );
    } catch (error) {
        return new Request(500, JSON.stringify({message: error.message}));
    }
};


const guardarPlaneta = async (event) => {
    try {
        planeta.validate(event.body);
        await swapInfoService.guardarPlanetaService(event.body);
        return new Request(
            200,
            'Planeta guardado con exito.'
        );
    } catch (error) {
        return new Request(500, JSON.stringify({message: error.message}));
    }
};

module.exports = {
    obtenerPlanetaSWApi: obtenerPlanetaSWApi,
    obtenerPlaneta: obtenerPlaneta,
    guardarPlaneta: guardarPlaneta
};
