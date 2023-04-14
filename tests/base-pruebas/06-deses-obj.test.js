import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas 06-deses-obj', () => {


    test('Probando funcion usContext', () => {
        const nombre = 'nombre1'
        const clave = 'clave1'
        const edad = 'edad1'
        const testObj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const obj = usContext({clave, nombre, edad})

        expect( obj ).toEqual( testObj )
    })
})