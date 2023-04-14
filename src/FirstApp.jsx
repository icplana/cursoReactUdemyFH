// // import { Fragment } from "react"

// export function FirstApp(){
//     return(
//         <> //equivale a fragment pero no necesita el import
//             <h2>feknfke</h2>
//             <p>jefnjwef</p>
//         </>
// )}



// // export const FirstApp = () =>{
// //     return <h1>first app arrow</h1>
// // }    





// const newMessage = {
    //     message:'Hola mundo',
    //     titulo: 'ejemplo'
    // } // es mejor declarar y definir la variable fuera del scope de la funcion, va a funcionar igual y react no va a reprocesar algo que este fuera del componente (no entiendo que significa...) y solo se puede poner fuera cuando este valor no se esta cambiando y no tiene relación con un hook.
    //Conclusion posterior: si al volver a renderizar la pagina no hay cambios en esta funcion es mejor dejarla fuera porque el resultado sera el mismo y no se va a volver a designar el espacio en memoria, es decir el renderizado tendra menos trabajo porque la funcion ya estara guardada y no tendra que volver a guardarse y por lo tanto sera mas rapido
  
    

// const funcionTarea = (a) => {
//     return `El numero elegido es ${ a }, su cuadro es ${ a * a } y su raiz es ${ Math.sqrt( a ) }`
// }

//<p>{ funcionTarea( 4 ) }</p>/* //cuidado no puedes añadir una funcion asincrona porque retorna un objeto(una promesa) y ademas podriamos entrar en errores ciclicos y react no lo permite */

import PropTypes from 'prop-types'

export const FirstApp = ( { title, subTitle, name } ) =>{

   


    return(
        <>
            <h1>{ title }</h1>
            <h2>{ subTitle + 1 }</h2>
            <h2>{ name }</h2>
            
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name:'Fernando'
}