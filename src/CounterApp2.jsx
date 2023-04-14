//Ejercicio

import { useState } from "react";
import PropTypes from 'prop-types'


export const CounterApp2 = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () =>{
        setCounter( counter + 1 )
    }

    const handlePop = () =>{
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp2</h1>
            <h3>{ counter }</h3>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handlePop }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )


}


CounterApp2.propTypes ={
    value: PropTypes.number.isRequired
}