import React,{useState,useEffect} from 'react'
import { Box, Stack, Typography } from "@mui/material";
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const location = "Lucknow"
    const [featured, setFeatured] = useState([])

    const getUpcoming = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/featured`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ location })
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
                <div className='row'>

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

