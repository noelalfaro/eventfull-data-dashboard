import React from 'react'
// import { ReactComponent as Icon } from '../assets/SeatIcon.jsx'
// import { ReactComponent as ReactLogo } from './logo.svg';
// import { ReactComponent as Icon } from "../assets/SeatIcon.jsx";
import SeatIcon from '../assets/SeatIcon.jsx';
import NavItem from './NavItem.jsx';


export default function NavBar() {
    return (
        <div className='nav-bar-container'>

            <div className='title-container'>
                <h1>EventFull</h1>
                <SeatIcon />
            </div>

            <NavItem name={"Dashboard"} />
            <NavItem name={"Search"} />
            <NavItem name={"About"} />
            {/*         
            <NavItem>
                Search
            </NavItem>
            <NavItem>
                About
            </NavItem> */}

            {/* <SeatIcon></SeatIcon> */}


        </div>
    )
}
