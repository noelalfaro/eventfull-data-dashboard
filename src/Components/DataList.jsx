import React from 'react'
import ToolContainer from './ToolContainer'

export default function DataList({ list }) {



    return (
        <div className='data-container'>

            <ToolContainer />

            <div className='search-container'>
                <label htmlFor="">Search for event </label>
                <input type="text" />
                <button>Go</button>
            </div>



            <div className='event-list-container'>


                <table>
                    <thead>
                        <tr>
                            <th className='tableHead'>Event Title</th>
                            <th className='tableHead'>Event Type</th>
                            <th className='tableHead'>Event State</th>
                            <th className='tableHead'>Event Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            list && Object.entries(list.events).map(([event]) =>
                                <tr>
                                    <td>
                                        <p key={list.events[event].id}> {list.events[event].venue.name_v2}  </p>
                                    </td>
                                    <td>
                                        <p key={list.events[event].id}>{list.events[event].type} </p>
                                    </td>
                                    <td>
                                        <p key={list.events[event].id}>{list.events[event].venue.state}</p>
                                    </td>
                                    <td>
                                        <p key={list.events[event].id}>{list.events[event].datetime_local} </p>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>


        </div>
    )
}
