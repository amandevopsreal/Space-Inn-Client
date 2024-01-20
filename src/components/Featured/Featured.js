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

        <Stack sx={{ flexDirection: { sx: "column", md: "column" } }}>
            <Box p={2} sx={{ flex: "2", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                    Featured Projects
                </Typography>
                <Stack direction={"row"} flexWrap={"wrap"} gap={2} justifyContent={"start"}>
                    {featured.map((item, idx) => {
                        return (
                            <Box key={idx}>
                                <FeaturedCard featured={item} />
                            </Box>
                        )
                    })}
                </Stack>
            </Box>
        </Stack >
    )
}

export default Featured