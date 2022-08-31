import React, { useState } from 'react'
import "./nav.css"
import NavItem from './NavItem'
import { ReactComponent as Logo } from "../../assets/svgs/shoe.svg"
import { Link } from 'react-router-dom'
//import { HashLink as Link } from 'react-router-hash-link';

export default function Nav(props: { isConnected: boolean, id: string }) {

    //console.log(languageNum)

    const [isNavOpened, handleNavOpen] = useState(false)
    return (
        <>
            {!isNavOpened ? null : <div className='nav__closer' onClick={() => handleNavOpen(!isNavOpened)}></div>}
            <div className={`menu-bg ${!isNavOpened ? "" : "change"}`} id="menu-bg"></div>
            <div className={`nav ${!isNavOpened ? "" : "change"}`}>
                <div id="menu-bar" className={!isNavOpened ? "" : "change"} onClick={() => handleNavOpen(!isNavOpened)}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <Link to={"/"} className='nav__item nav__logo nav__logo--pc'><Logo /></Link>
                <ul className={`nav__list ${!isNavOpened ? "" : "change"}`}>
                    <li className='nav__item'><Link to={"/"} className='nav__logo--mobile nav__logo'><Logo /></Link></li>
                    < li className='nav__item' >
                        <Link to="/Shoes" >Shoes</Link>
                    </li>
                    < li className='nav__item' >
                        <Link to="/Profiles" >Profiles</Link>
                    </li>
                    < li className='nav__item' >
                        <Link to="/Accounts" >Accounts</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
