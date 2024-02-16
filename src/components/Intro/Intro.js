import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Intro = () => {
    const navigate = useNavigate()
    const handleAuth = () => {
        navigate("/signup")
    }
    return (
        <Stack direction={"row"} alignItems={"center"} sx={{ background: "#ffffff", justifyContent: "center", borderRadius: "10px", height: "147px", boxShadow: "0px 4px 20px 10px #0000000d", width: { xs: "100%", sm: "100%", md: "82%" }, marginTop: "25px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
                <img src={"https://i.ibb.co/rw2vQQg/Vector-1.png"} alt='logo' style={{ height: "65px", width: "65px" }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                    {!localStorage.getItem("token") && <Typography variant="h5">
                        Sign in to streamline your search
                    </Typography>}
                    <Typography variant='h6'>
                        Save properties, create alerts and keep track of the<br />enquiries you send to agents.
                    </Typography>
                </Box>
                {!localStorage.getItem("token") && <Button onClick={() => { handleAuth() }} variant="outlined" sx={{
                    background: "#ffffff", borderRadius: "10px",
                    color: "#1a363e",
                    fontFamily: '"Fira Sans-Regular", Helvetica',
                    border: "3px solid #54BE49",
                    textTransform: 'none',
                    "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent",
                        border: "3px solid #54BE49"
                    }
                }}>
                    Sign in or create account
                </Button>}
            </Box>
        </Stack>
    )
}

export default Intro