import './topbar.scss'
import React from 'react'
import { Mail } from '@mui/icons-material'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left content">
                    <a href="#intro" className='logo'>big ideas.</a>
                    <div className="itemContainer">

                    </div>
                    <div className="itemContainer">
                        <a href=" mailto:drewgomez209@gmail.com"><Mail className="icon" /></a>
                        <span><a href="mailto:drewgomez209@gmail.com">drewgomez209@gmail.com</a></span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div >
    )
}

//vercel push test
