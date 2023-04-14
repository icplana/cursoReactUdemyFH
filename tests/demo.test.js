

//  EJEMPLO INTRODUCCION NO DEBE USARSE ASI
// test('Descripcion de la prueba (por ejemplo esta prueba hace esto', () => {
//     if ( 0 === 0 ){
//         throw new Error('No puede dividir entre 0')
//     }
// })




//INICIO DE CODIGO REAL (estructura)


//Identificacion grupo pruebas
describe('Pruebas en<DemoComponent />',() =>{

    //prueba
    test('Descripcion de la prueba (por ejemplo esta prueba hace esto', () => {
    
        // 1. Inicialización
        const message1 = 'Hola mundo';


        // 2. Estímulo
        const message2 = message1.trim();


        // 3. Observamos comportamiento
        expect ( message1 ).toBe( message2 );
    })
})