import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h1>Página inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Semana01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Semana02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Semana03">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Semana04">Atividade 4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;