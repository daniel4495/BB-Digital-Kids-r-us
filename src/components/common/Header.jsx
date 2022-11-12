import React from 'react'
import logo from "../assets/recursos/main/logo.png"
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'
import { FcSearch, FcLike, FcPortraitMode } from "react-icons/fc";

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
                    <div className='right'>
                        <div className="right_search">
                            <input type="text" placeholder='Search products...' />
                            <FcSearch className="searchIcon menuIcon"/>
                        </div>
                    </div>
                    <div className="right_user">
                        <FcPortraitMode className="userIcon menuIcon"/>
                        <FcLike className="userIcon menuIcon"/>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
