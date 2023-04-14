import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    
    //getHeroById
    test('testing getHeroById', () => {

        const id = 1
        const returnedHero = getHeroeById( id )
        const testingHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }

        expect( returnedHero ).toEqual( testingHero )
    })

    test('testing getHeroById', () => {

        const id = 22
        const returnedHero = getHeroeById( id )
        const testingHero = undefined

        expect( returnedHero ).toEqual( testingHero )
        expect( returnedHero ).toBeFalsy() //toBeFalsy permite un resulado que sea (false, 0, null y undefined)
    })



    //getHeroesByOwner

    test('comprobando heroes DC con getHeroesByOwner', () => {
        const owner = 'DC'
        const returnedHeroes = getHeroesByOwner( owner )
        const expectedHeroes = [
            { id: 1,  name: 'Batman', owner: 'DC'},
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]

        //comprovamos length
        expect( returnedHeroes ).toHaveLength( 3 )

        //comprovamos array estricto en "duro"
        expect( returnedHeroes ).toStrictEqual( expectedHeroes )

        //comprovamos array estricto de forma flexible (solo comprovamos que no haya owners distintos, pero podrian faltar heroes)
        expect( returnedHeroes ).toStrictEqual( returnedHeroes.filter( heroe => heroe.owner === owner) )
    })

    test('comprobando heroes Marvel con getHeroesByOwner', () => {
        const owner = 'Marvel'
        const returnedHeroes = getHeroesByOwner( owner )
        const expectedHeroes = [
            { id: 2,  name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]

        //comprovamos length
        expect( returnedHeroes ).toHaveLength( 2 )

        //comprovamos array estricto en "duro"
        expect( returnedHeroes ).toStrictEqual( expectedHeroes )

        //comprovamos array estricto de forma flexible (solo comprovamos que no haya owners distintos, pero podrian faltar heroes)
        expect( returnedHeroes ).toStrictEqual( returnedHeroes.filter( heroe => heroe.owner === owner) )
    })
})