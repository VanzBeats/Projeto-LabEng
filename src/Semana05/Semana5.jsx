import React from 'react';
import { Link } from "react-router-dom";

const Semana5 = () => {
    return (
        <div className="container">
            <div>
                <div>
                    <h1>Atividades Semana 5</h1>
                </div>
            </div>
           
            <div>
                <div>
                    <Link to="/semana5/formquiz" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Form Quiz</Link>
                    <Link to="/semana5/formticket" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Form Ticket</Link>
                    <Link to="/semana5/accordion" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Accordion</Link>

                </div>
            </div>
        </div>
    )
}

export default Semana5;
