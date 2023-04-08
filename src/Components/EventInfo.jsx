import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function EventInfo({ id, name, type, city, state, date, score }) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const fetchSeatGeekData = async () => {
            const response = await fetch(
                `https://api.seatgeek.com/2/events?id=${id}&client_id=${API_KEY}`
            );
            const json = await response.json();
        };

        fetchSeatGeekData().catch(console.error);
    }, [id]);

    useEffect(() => {
        const accurateDay = new Date(date.toString());
        const formattedDay = accurateDay.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setFormattedDate(formattedDay);
    }, [date]);

    return (
        <>
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{name}</p>
                </Link>
            </td>

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
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{formattedDate}</p>
                </Link>
            </td>
            <td>
                <Link to={`/eventDetails/${id}`}>
                    <p>{Math.round(1000 * score) / 100}/10 </p>
                </Link>
            </td>
        </>
    );
}