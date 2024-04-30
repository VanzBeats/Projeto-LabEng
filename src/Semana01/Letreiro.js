import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Letreiro() {
    const texto = "Venha estudar na Fatec";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(texto.substring(0, index));
            index++;
            if (index > texto.length) clearInterval(timer);
        }, 200);
        return () => clearInterval(timer);
    }, []);

    ReactDOM.render(
        <div>
            <h1>{displayedText}</h1>
        </div>,
        document.getElementById('root')
    );
}

export default Letreiro;
