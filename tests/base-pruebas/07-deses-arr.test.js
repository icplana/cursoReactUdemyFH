import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas 07-deses-arr', () => {

    //test array entero
    test('Test retornaArreglo entero', () => {
        const expectedArr = ['ABC', 123]
        const returnedArr = retornaArreglo()

        expect( returnedArr ).toStrictEqual( expectedArr )
    })

    //test por componentes
    test('test retornaArreglo por componentes', () => {
        const [letters, numbers] = retornaArreglo()

        //comparación estricta
        expect( letters ).toBe( 'ABC' )
        expect( numbers ).toBe( 123 )


        //comparacion tipo de dato
        expect( typeof letters ).toBe( 'string' )
        expect( typeof numbers ).toBe( 'number' )


        //Comparacion por tipo de datos de otra forma
        expect( letters ).toEqual( expect.any(String))
        expect( numbers ).toEqual( expect.any(Number))
    })
})