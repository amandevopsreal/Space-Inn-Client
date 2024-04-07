import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import TrendingCard from './TrendingCard';
import { useContext } from 'react'
import locationContext from '../../context/location/locationContext';
const Trending = () => {
    const [upComing, setUpComing] = useState([])
    const context = useContext(locationContext)
    const { location } = context
    const getUpcoming = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/upcoming/Lucknow`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
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
                            <div className='col-sm-6 col-md-6 col-lg-4'>
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