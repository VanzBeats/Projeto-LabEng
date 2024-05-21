import React from 'react';
import { Link } from "react-router-dom";

const Semana4 = () => {
    return (
        <div className="container">
            <div>
                <div>
                    <h1>Atividades Semana 4</h1>
                </div>
            </div>
           
            <div>
                <div>
                    <Link to="/semana4/bucketlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Bucket List</Link>
                    <Link to="/semana4/counter" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Contador</Link>
                    <Link to="/semana4/counterlist" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista de Contadores</Link>
                    <Link to="/semana4/form" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário</Link>
                    <Link to="/semana4/form2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 2</Link>
                    <Link to="/semana4/form3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Formulário 3</Link>
                    <Link to="/semana4/gallery" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Galeria</Link>
                    <Link to="/semana4/list" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista</Link>
                    <Link to="/semana4/list2" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 2</Link>
                    <Link to="/semana4/list3" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 3</Link>
                    <Link to="/semana4/list4" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Lista 4</Link>
                    <Link to="/semana4/movingdot" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Ponto em Movimento</Link>
                    <Link to="/semana4/shapeeditor" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Editor de Formas</Link>
                    <Link to="/semana4/toolbar" className="btn bg-secondary-subtle"
                        style={{ marginBottom: '10px', display: 'block' }}>Barra de Ferramentas</Link>

                </div>
            </div>
        </div>
    )
}

export default Semana4;
