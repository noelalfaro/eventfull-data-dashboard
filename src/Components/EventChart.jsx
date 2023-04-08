import React, { Component, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
} from "recharts";

const EventChart = ({ list }) => {
    const [histData, setHistData] = useState(null);

    useEffect(() => {
        const getEventHist = async () => {

            const response = await fetch(
                "https://api.seatgeek.com/2/events?sort=score.desc&sort=lowest_price.desc&per_page=20&client_id="
                + API_KEY
            );
            const json = await response.json();
            setHistData(json.events);

        };
        getEventHist().catch(console.error);
    }, []);

    const cleanData = (data) => {
        let filteredData = [];

        for (const item of data) {

            filteredData.push({
                'Lowest Price': item.stats.lowest_price,
                'state': item.venue.state
            });
        }

        // data is given counting backwards, so return the reverse to have data ordered from oldest to newest for accurate plotting
        return filteredData;
    };





    console.log('histData', histData);
    return (
        <div>
            {list ? (// rendering only if API call actually returned us data
                <div>

                    <br></br>
                    <h2 style={{ margin: '0' }}>Lowest Price of Top 20 Most Popular Events</h2>

                    <LineChart
                        width={800}
                        height={300}
                        data={cleanData(histData)}
                    >
                        <Line
                            type="monotone"
                            dataKey="Lowest Price"
                            stroke="currentColor"
                        />
                        <CartesianGrid />
                        <XAxis dataKey="state" angle={20} dx={20}>
                            {/* <Label value="State" /> */}
                        </XAxis>

                        <YAxis
                            label={{
                                value: "Price",
                                angle: -90,
                                position: "insideLeft"
                            }}
                        />
                        <Tooltip wrapperStyle={{ color: "#213547", backgroundColor: "blue" }} />
                    </LineChart>


                </div>
            ) : null
            }
        </div >
    );

};

export default EventChart;