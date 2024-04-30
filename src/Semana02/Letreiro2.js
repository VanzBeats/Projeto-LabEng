import React, { useState, useEffect } from 'react';

function Letreiro2() {
    const texto = "Conheça a Fatec";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(texto.substring(0, index));
            index++;
            if (index > texto.length) {
            index = 0;
            }
        }, 200);
        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <h1>{displayedText}</h1>
        </div>
    );
}

export default Letreiro2;
