class Utils {
    constructor() {
    }
    static planetaUtil(body) {
        console.log("body:",body)
        return {
            'nombre': body.name,
            'periodo_rotacion': body.rotation_period,
            'periodo_orbital': body.orbital_period,
            'diametro': body.diameter,
            'clima': body.climate,
            'gravedad': body.gravity,
            'terreno': body.terrain,
            'agua_superficial': body.surface_water,
            'poblacion': body.population,
            'residentes': body.residents,
            'peliculas': body.films,
            'creado': body.created,
            'editado': body.edited,
            'url': body.url
        }
    }

}

module.exports = Utils;