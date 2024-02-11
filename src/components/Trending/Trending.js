import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import TrendingCard from './TrendingCard';

const Trending = () => {
    const location = "Lucknow"
    const [upComing, setUpComing] = useState([])

    const getUpcoming = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/upcoming`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ location })
        });
        const json = await response.json()
        console.log(json)
        setUpComing(json)
    }

    useEffect(() => {
        getUpcoming()
    }, [location])

    return (
        <>
            <div style={{ marginTop: "90px" }} className='container'><Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                Up-Coming Projects
            </Typography></div>
            <div className='container'>
                <div className='row'>
                    {upComing.map(upcomingitem => {
                        return (
                            <div className='col-md-4'>
                                <TrendingCard upcomingitem={upcomingitem} />
                            </div>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Trending