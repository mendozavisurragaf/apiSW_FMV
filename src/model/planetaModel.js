const Joi = require('@hapi/joi');


const planet = Joi.object({
    clima: Joi.string(),
    diametro: Joi.string(),
    peliculas: Joi.array().items(Joi.string()),
    gravedad: Joi.string(),
    nombre: Joi.string(),
    periodo_orbital: Joi.string(),
    poblacion: Joi.string(),
    residentes: Joi.array().items(Joi.string()),
    periodo_rotacion: Joi.string(),
    agua_superficial: Joi.string(),
    terreno: Joi.string(),
    creado: Joi.date().iso(),
    editado: Joi.date().iso(),
    url: Joi.string()
});

module.exports = planet;