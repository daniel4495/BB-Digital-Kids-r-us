import React from 'react'
import logo from "../assets/recursos/main/logo.png"

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
                </nav>
            </div>
        </header>
    </>
  )
}
