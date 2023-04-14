import { getUser,getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Tests de 05-funciones', () =>{

    test('Test getUser', () =>{
        const obj = getUser()
        expect( obj ).toEqual( { uid: 'ABC123',username: 'El_Papi1502'} )
    })



    test('Test getUsuarioActivo', () =>{
        const nombre = 'Pedro'
        const obj = getUsuarioActivo(nombre)


        expect( obj ).toStrictEqual( {uid: 'ABC567', username: nombre} )
    })
})