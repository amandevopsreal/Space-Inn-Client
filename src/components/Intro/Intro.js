import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'

const Intro = () => {
    return (
        <Stack direction={"row"} alignItems={"center"} sx={{ background: "#ffffff", justifyContent: "center", borderRadius: "10px", height: "147px", boxShadow: "0px 4px 20px 10px #0000000d", marginTop: "-50px", width: { sm: "100%", md: "80%" }, marginTop: "25px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "35px" }}>
                <img src={"https://i.ibb.co/rw2vQQg/Vector-1.png"} alt='logo' style={{ height: "65px", width: "65px" }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "20px", marginRight: "20px", display: { xs: "none", sm: "none", md: "block" } }}>
                    <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                        Sign in to streamline your search
                    </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "400", fontFamily: '"Fira Sans-Regular", Helvetica' }}>
                        Save properties, create alerts and keep track of the enquiries you send to agents.
                    </Typography>
                </Box>
                <Button variant="outlined" sx={{
                    background: "#ffffff", borderRadius: "10px",
                    color: "#1a363e",
                    fontFamily: '"Fira Sans-Regular", Helvetica',
                    fontSize: { sm: "17px", md: "24px" },
                    border: "3px solid #54BE49"
                }}>
                    Sign up
                </Button>
            </Box>
        </Stack>
    )
}

export default Intro