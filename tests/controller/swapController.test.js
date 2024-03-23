const { expect,describe,test } = require('@jest/globals');
const {
    obtenerPlanetaSWApi,
    obtenerPlaneta,
    guardarPlaneta
} = require('../../src/controller/swapController');
const Request = require('../../src/model/requestModel');
const PlanetaModel = require('../../src/model/planetaModel');

describe('Pruebas para las funciones', () => {
    test('obtenerPlanetaSWApi debe manejar un evento y devolver un Request', async () => {
        const mockEvent = {
            pathParameters: { id: 2 }
        };
        const result = await obtenerPlanetaSWApi(mockEvent);
        expect(result).toBeInstanceOf(Request);
    });

    test('obtenerPlaneta debe manejar un evento y devolver un Request', async () => {
        const mockEvent = {
            pathParameters: { id: 2 }
        };

        const result = await obtenerPlaneta(mockEvent);
        expect(result).toBeInstanceOf(Request);
    });

    test('guardarPlaneta debe manejar un evento y devolver un Request', async () => {
        const mockEvent = {
            body: { /* Supongamos que es un cuerpo de request válido */ }
        };
        const result = await guardarPlaneta(mockEvent);
        expect(result).toBeInstanceOf(Request);
    });
});
