import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('pruebas en 1-async-await', () =>{

    test('getImagen debe retornar imagen', async () => {
        const url = await getImagen()
        expect ( typeof url ).toBe( 'string' )
        expect ( url ).not.toBe( 'No se encontro la imagen' )
    })
})