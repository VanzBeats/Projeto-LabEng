import React, { useState, useEffect } from 'react';

function Relogio() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hor = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const seg = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();


    return (
        <div className="Relogio">
            <p>{hor}:{min}:{seg}</p>
        </div>
    );
}

export default Relogio;
