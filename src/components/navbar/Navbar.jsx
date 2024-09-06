import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : ""); 


export default function Navbar() {
    return (
        <container className="navbar-principal">
            <div className="navbar-esquerda">
                <nav className="nav">
                    <ul>

                        <NavLink className={classNameFunc} exact to="/"><p>Home</p></NavLink>
                        <NavLink className={classNameFunc} to="/cabana"><p>Cabanas</p></NavLink>
                        <NavLink className={classNameFunc} to="/packages"><p>Pacotes</p></NavLink>
                        <NavLink className={classNameFunc} to="/activities"><p>Atividades</p></NavLink>
                        <NavLink className={classNameFunc} to="/about"><p>Sobre</p></NavLink>
                    </ul>
                </nav>
            </div>
            <div className="navbar-meio">
                <Link to="/"><img src='src/assets/navbar/deer.png' /></Link>
            </div>

            <div className="navbar-direita">
                <div className="navbar-bt-agendar">
                    <NavLink to='/send_book'>BAIXAR E-BOOK</NavLink>

                </div>
               <div>
                
               <div className='btnLogin'> <p>Login</p> 
                {/*<ConditionLogin/>*/}
               </div> 
               </div>
            </div>
        </container>
    )
}
