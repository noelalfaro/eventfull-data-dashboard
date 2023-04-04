import React from 'react'
// import { ReactComponent as Icon } from '../assets/SeatIcon.jsx'
// import { ReactComponent as ReactLogo } from './logo.svg';
// import { ReactComponent as Icon } from "../assets/SeatIcon.jsx";
import SeatIcon from '../assets/SeatIcon.jsx';
import NavItem from './NavItem.jsx';
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className='nav-bar-container'>
            <div className='title-container'>
                <Link to={'/'}><h1>EventFull</h1> </Link>
                <SeatIcon />
            </div>

            <Link to={'/about'}>
                <NavItem name={"About"} />
            </Link>

        </div>
    )
}
