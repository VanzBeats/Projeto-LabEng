import React, { useState } from 'react';
import './Contador.css'; 

function Contador() {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const adicionarHomem = () => {
        setHomens(prevHomens => prevHomens + 1);
    };

    const subtrairHomem = () => {
        if (homens > 0) {
            setHomens(prevHomens => prevHomens - 1);
        }
    };

    const adicionarMulher = () => {
        setMulheres(prevMulheres => prevMulheres + 1);
    };

    const subtrairMulher = () => {
        if (mulheres > 0) {
            setMulheres(prevMulheres => prevMulheres - 1);
        }
    };

    const zerarValores = () => {
        setHomens(0);
        setMulheres(0);
    };

    const totalPessoas = homens + mulheres;

    return (
        <div className="contador-container">
            <h1>Contador de Pessoas</h1>
            <h2>Total: {totalPessoas}</h2>
            <div className="contador-section">
                <h2>Homens: {homens}</h2>
                <button onClick={subtrairHomem}>-</button>
                <button onClick={adicionarHomem}>+</button>
            </div>
            <div className="contador-section">
                <h2>Mulheres: {mulheres}</h2>
                <button onClick={subtrairMulher}>-</button>
                <button onClick={adicionarMulher}>+</button>
            </div>
            <div className="contador-section">
                <button onClick={zerarValores}>Zerar</button>
            </div>
        </div>
    );
}

export default Contador;
