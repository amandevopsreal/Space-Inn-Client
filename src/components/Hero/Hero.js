import React, { useState } from 'react'
import { Box, Stack } from "@mui/material";
import SearchBar from '../SearchBar/SearchBar';
import Intro from '../Intro/Intro';

const Hero = () => {
    const handleSubmit = () => { }
    const [searchTerm, setSearchTerm] = useState()
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "column" } }}>
            <Box p={2} sx={{ height: "90vh", flex: "2", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={"https://i.ibb.co/BscwKCs/3786385-78786-removebg-preview-1.png"} alt='logo' style={{ height: "387px",width:"100%" }} />
                <SearchBar />
                <Intro />
            </Box>
        </Stack >
    )
}

export default Hero