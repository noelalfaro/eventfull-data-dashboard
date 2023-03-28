import React from 'react'
import '../App.css'

export default function NavItem(props) {
    return (
        <h2 id='nav-item-title'>{props.name}</h2>
    )
}
