import React, { useState } from 'react'
import ToolContainer from './ToolContainer'

export default function DataList({ list }) {
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // const searchItems = searchValue => {
    //     setSearchInput(searchValue);
    //     if (searchValue !== "") {
    //         const filteredData = Object.keys(list.events).filter((event) =>
    //             Object.values(item)
    //                 .join("")
    //                 .toLowerCase()
    //                 .includes(searchValue.toLowerCase())
    //         )
    //         setFilteredResults(filteredData);
    //     } else {
    //         setFilteredResults(Object.keys(list.events));
    //     }
    // };


    const searchItems = (inputString) => {
        setSearchInput(inputString)

        setFilteredResults(list.events.filter((event) => {
            return event.venue.name_v2.toLowerCase().includes(inputString.toLowerCase())
        }))

    }


    console.log(filteredResults);

    return (
        <div className='data-container'>

            <ToolContainer />

            <div className='search-container'>
                {/* <label htmlFor="">Search for event </label> */}
                <input type="text" placeholder='Search for Event' value={searchInput} onChange={(inputString) => searchItems(inputString.target.value)} />
                <button on>Go</button>
            </div>

            {/* onChange={(inputString) => searchItems(inputString.target.value)} */}

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

                            searchInput.length > 0
                                ? filteredResults.map((item) =>
                                    <tr>
                                        <td>
                                            <p>{item.venue.name_v2}</p>
                                        </td>
                                        <td>
                                            <p>{item.type}</p>
                                        </td>
                                        <td>
                                            <p>{item.venue.city}</p>
                                        </td>
                                        <td>
                                            <p>{item.venue.state}</p>
                                        </td>
                                    </tr>


                                )
                                :




                                // {
                                //     searchInput.length > 0
                                //         ? filteredResults.map((coin) =>
                                //             list.Data[coin].PlatformType === "blockchain" ?
                                //                 <CoinInfo
                                //                     image={list.Data[coin].ImageUrl}
                                //                     name={list.Data[coin].FullName}
                                //                     symbol={list.Data[coin].Symbol}
                                //                 />
                                //                 : null
                                //         )
                                //         : list && Object.entries(list.Data).map(([coin]) =>
                                //             list.Data[coin].PlatformType === "blockchain" ?
                                //                 <CoinInfo
                                //                     image={list.Data[coin].ImageUrl}
                                //                     name={list.Data[coin].FullName}
                                //                     symbol={list.Data[coin].Symbol}
                                //                 />
                                //                 : null
                                //         )
                                // }
                                list && Object.entries(list.events).map(([event]) =>
                                    <tr>
                                        <td>
                                            <p key={list.events[event].id}> {list.events[event].venue.name_v2}  </p>
                                        </td>
                                        <td>
                                            <p key={list.events[event].id}>{list.events[event].type} </p>
                                        </td>
                                        <td>
                                            <p key={list.events[event].id}>{list.events[event].venue.city}</p>
                                        </td>
                                        <td>
                                            <p key={list.events[event].id}>{list.events[event].venue.state} </p>
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
