import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('pruebas en 09-promises', () => {


    // test heroe conocido con done()
    test('getHeroeByIdAsync testing heroe conocido con done()',  (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
                done()
            })   
    })



    // test heroe desconocido con done()
    test('getHeroeByIdAsync testing heroe desconocido con done()',  (done) => {
        const id = 131
        getHeroeByIdAsync(id)
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el héroe ' + id )
                done()
            })
    })
  
  





    // test('getHeroeByIdAsync testing heroe conocido con async await', async () => {
    //     const id = 1
    //     const returnedHero = await getHeroeByIdAsync(id)
    //     const expectedHero = { id: 1, name: 'Batman', owner: 'DC' }

    //     expect( returnedHero ).toEqual( expectedHero )
    // })


    // test('getHeroeByIdAsync testing heroe desconocido con async await', async () => {
    //     const id = 1323
    //     let returnedHero
    //     try { returnedHero = await getHeroeByIdAsync(id)
    //     } catch (error) {
    //          returnedHero = error
    //     }
    //     const expectedHero = { id: 1, name: 'Batman', owner: 'DC' }
    //     console.log(returnedHero)
    //     expect( returnedHero ).toEqual( 'No se pudo encontrar el héroe ' + id )
    // })

})