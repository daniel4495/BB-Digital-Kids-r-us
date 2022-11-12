import React from 'react'
import logo from "../assets/recursos/main/logo.png"
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom'
import { FaSearch, FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";


export const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <div className="toogle">
                        <button>menu</button>
                    </div>
                    <div className="centerLogo">
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
                            <FaSearch className="searchIcon menuIcon"/>
                        </div>
                    </div>
                    <div className="right_user">
                        <FaRegUser className="userIcon menuIcon"/>
                        <FaRegHeart className="userIcon menuIcon"/>
                    </div>
                    <div className="right_card">
                        <button className="button">
                            <FaShoppingCart className="shop menuIcon"/>
                            (0)
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
