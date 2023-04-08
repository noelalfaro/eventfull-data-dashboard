import React from 'react'

export default function AboutDetail() {
    return (
        <div className='about-detail-container'>
            <div className='about-text-container'>
                <p>This is a web app built using React.js and uses the <a href="https://platform.seatgeek.com/">Seatgeek API</a>  to showcase popular events across the United States. <br /> <br /> The user can search through events by their different performers and click any specific event to view more information about it such as the prices. <br /><br />The <a href="https://recharts.org/en-US">Recharts JS library</a>  helps chart the lowest prices of the top 20 most popular events. <br /> <br />The site also uses react-router-dom to accomplish the navigation.</p>
            </div>
        </div>
    )
}
