import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


export default function EventInfo({ id, name, type, city, state }) {


    useEffect(() => {
        const fetchSeatGeekData = async () => {
            const response = await fetch(
                // how do we call an API using fetch? 
                `https://api.seatgeek.com/2/events?id=${id}&client_id=`
                + API_KEY
            );
            const json = await response.json();

        };

        fetchSeatGeekData().catch(console.error);
    }, [id]);
    return (
        <>
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{name}</p>
                </Link>
            </td >

            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{type}</p>
                </Link>
            </td>
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{city}</p>
                </Link>
            </td>
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{state}</p>
                </Link>
            </td>

        </>
    )
}
