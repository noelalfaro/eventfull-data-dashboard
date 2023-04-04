import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function EventDetail() {

    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);



    useEffect(() => {
        const getEventDetail = async () => {

            const details = await fetch(
                `https://api.seatgeek.com/2/events?id=${params.id}&client_id=` +
                API_KEY
            );

            const detailsJson = await details.json();
            // console.log('detailsJson: ', detailsJson);


            // const descJson = await description.json();
            // console.log('descJson: ', descJson);


            setFullDetails({ events: detailsJson.events });
            // console.log('detailsJson: ', detailsJson);
        };

        getEventDetail().catch(console.error);
    }, []);


    useEffect(() => {
        console.log('fullDetails: ', fullDetails)
    }, [fullDetails])




    return (

        <div className="event-detail-container">

            {fullDetails && (
                <>
                    <div className="event-info-expanded-container">
                        <img src={fullDetails.events[0].performers[0].image}></img>
                        <h1>{fullDetails.events[0].performers[0].name}</h1>
                        <div className="event-geo">
                            <h2>{fullDetails.events[0].type}</h2>
                            <h2>{fullDetails.events[0].venue.display_location}</h2>
                        </div>

                        <div className="price-container">
                            <div className="price-box">
                                <h3>Lowest Price - {fullDetails.events[0].stats.lowest_price || "unavailable"}</h3>
                            </div>
                            <div className="price-box">
                                <h3>Average Price - {fullDetails.events[0].stats.average_price || "unavailable"}</h3>
                            </div>
                            <div className="price-box">
                                <h3>Highest Price - {fullDetails.events[0].stats.highest_price || "unavailable"}</h3>
                            </div>



                        </div>


                        <h2><a href={fullDetails.events[0].performers[0].url}>Buy Tickets</a></h2>



                    </div>
                </>
            )}


        </div>


    )
}
