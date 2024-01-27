import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import TrendingCard from './TrendingCard';

const Trending = () => {

    return (
        <>
            <div style={{ marginTop: "90px" }} className='container'><Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                Trending Projects
            </Typography></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                    <div className='col-md-4'>
                        <TrendingCard />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Trending