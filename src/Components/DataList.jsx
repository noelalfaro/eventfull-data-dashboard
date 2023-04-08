import React, { useState } from 'react'
import ToolContainer from './ToolContainer'
import EventInfo from './EventInfo';
import EventChart from './EventChart';
import { ResponsiveContainer } from 'recharts';

export default function DataList({ list }) {

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    const searchItems = (inputString) => {
        setSearchInput(inputString)

        setFilteredResults(list.events.filter((event) => {
            // return event.venue.name_v2.toLowerCase().includes(inputString.toLowerCase())
            return event.performers[0].name.toLowerCase().includes(inputString.toLowerCase())
        }))

    }



    // console.log(filteredResults);

    console.log('list: ', list);
    return (
        <div className='data-container'>

            <ResponsiveContainer width={900} height="50%"><EventChart list={list} /></ResponsiveContainer>



            <div className='search-container'>
                <input type="text" placeholder='Search for Event by City    ' value={searchInput} onChange={(inputString) => searchItems(inputString.target.value)} />
            </div>

            <div className='event-list-container'>


                <table>
                    <thead>
                        <tr>
                            <th className='tableHead tableHeadEdgeLeft'>Event</th>
                            <th className='tableHead'>Type</th>
                            <th className='tableHead'>City</th>
                            <th className='tableHead'>State</th>
                            <th className='tableHead '>Date</th>
                            <th className='tableHead tableHeadEdgeRight'>Popularity Score</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            searchInput.length > 0
                                ? filteredResults.map((item) =>
                                    <tr key={item.id}>
                                        <EventInfo
                                            id={item.id}
                                            // name={item.venue.name_v2}
                                            name={item.performers[0].name}
                                            type={item.type}
                                            city={item.venue.city}
                                            state={item.venue.state}
                                            date={item.datetime_local}

                                            list={list}

                                        />
                                    </tr>
                                )
                                :

                                list && Object.entries(list.events).map(([event]) =>

                                    <tr key={list.events[event].id}>
                                        <EventInfo
                                            id={list.events[event].id}
                                            // name={list.events[event].venue.name_v2}
                                            name={list.events[event].performers[0].name}
                                            type={list.events[event].type}
                                            city={list.events[event].venue.city}
                                            state={list.events[event].venue.state}
                                            date={list.events[event].datetime_utc}
                                            score={list.events[event].score}
                                            list={list}
                                        />
                                    </tr>

                                )

                        }

                    </tbody>


                </table>
            </div>


        </div>
    )
}
