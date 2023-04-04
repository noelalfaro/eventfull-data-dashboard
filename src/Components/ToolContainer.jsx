import React from 'react'
import EventChart from './EventChart'

export default function ToolContainer({ list }) {
    return (
        <div className='tool-container'>

            <div className='tool'> Tool </div>
            <EventChart list={list}></EventChart>




        </div >
    )
}
