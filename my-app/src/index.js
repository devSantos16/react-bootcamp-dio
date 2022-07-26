import React from "react"
import ReactDOM from "react-dom"
import './css/style.css'

const sum = (a, b) => {
    return a + b
}

function retornarNome() {
    return "Emanuel"
}

const App = () => {
    return (
        <div className="section-container">
            <h1>Soma</h1>
            <p>Resultado = {sum(2,2)}</p>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)