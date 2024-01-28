import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const featured = [
        {
            image: "https://i.ibb.co/NxLH2Ph/Whats-App-Image-2024-01-21-at-01-15-34.jpg",
            title: "Central park The Orchard",
            description: "1BHK Serviced Apartments, Financial District, Hyderabad",
            price: "23.7 Lac"
        },
        {
            image: "https://i.ibb.co/NxLH2Ph/Whats-App-Image-2024-01-21-at-01-15-34.jpg",
            title: "Central park The Orchard",
            description: "1BHK Serviced Apartments, Financial District, Hyderabad",
            price: "23.7 Lac"
        },
        {
            image: "https://i.ibb.co/NxLH2Ph/Whats-App-Image-2024-01-21-at-01-15-34.jpg",
            title: "Central park The Orchard",
            description: "1BHK Serviced Apartments, Financial District, Hyderabad",
            price: "23.7 Lac"
        },
        {
            image: "https://i.ibb.co/NxLH2Ph/Whats-App-Image-2024-01-21-at-01-15-34.jpg",
            title: "Central park The Orchard",
            description: "1BHK Serviced Apartments, Financial District, Hyderabad",
            price: "23.7 Lac"
        }
    ]
    return (
        <>
            <div style={{ marginTop: "90px" }} className='container'><Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                Featured Projects
            </Typography></div>
            <div className='container'>
                <div className='row'>

                    {
                        featured.map((item, idx) => {
                            return (
                                <div key={idx} className='col-md-3'>
                                    <FeaturedCard featured={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Featured

