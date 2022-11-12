import React from 'react'
import logo from "../assets/recursos/main/logo.png"
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <div className="toogle">
                        <button>menu</button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="center">
                        <ul className="menu">
                            {navlist.map((nav) =>(
                                <li key={nav.id}>
                                    <Link to={nav.path}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
