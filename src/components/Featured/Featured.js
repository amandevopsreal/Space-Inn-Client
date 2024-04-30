import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import FeaturedCard from './FeaturedCard';
import { useContext } from 'react'
import locationContext from '../../context/location/locationContext';
import "./Featured.css"
const Featured = () => {
    const [featured, setFeatured] = useState([])
    const context = useContext(locationContext)
    const { location } = context
    const getUpcoming = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/featured/${location}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json()
        console.log(json)
        setFeatured(json)
    }

    useEffect(() => {
        getUpcoming()
    }, [location])

    return (
        <>
            <div style={{ marginTop: "90px" }} className='container'><Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                Featured Projects
            </Typography></div>
            <div className='container'>
                <div className='row row-spl'>

                    {
                        featured.map((item, idx) => {
                            return (
                                <div key={idx} className='col-md-6 col-lg-3'>
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

