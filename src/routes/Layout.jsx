import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'

export default function Layout() {
    return (
        <div className='whole-page'>
            <NavBar></NavBar>
            <Outlet />
        </div >
    )
}
