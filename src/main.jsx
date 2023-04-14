import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'
import { CounterApp2 } from './CounterApp2'


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>

        <CounterApp2 value={ 54 } />
    </React.StrictMode>
)