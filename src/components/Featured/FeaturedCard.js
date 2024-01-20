import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

const FeaturedCard = ({ featured }) => {
    return (
        <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px", borderRadius: "5px" }, boxShadow: "none" }}>
            <Link to={""}>
                <CardMedia image={featured.image}
                    alt={featured.title}
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "358px",
                            md: "320px"

                        }, height: 180
                    }} />

            </Link>
            <CardContent sx={{ backgroundColor: "#SSSSSS", height: "125px" }}>
                <Link to={""}>
                    <Typography variant='h6' fontWeight={"bold"}
                        color={"#1A363E"}>
                        {featured.title}
                    </Typography>
                    <Typography variant='subtitle2' 
                        color={"#45666B"}>
                        {featured.description}
                    </Typography>
                </Link>
                <Link to={""}>
                    <Typography variant='subtitle1' fontWeight={"bold"}
                        color={"#45666B"}>
                        {featured.price}
                    </Typography>
                </Link>
            </CardContent>
        </Card>

    )
}

export default FeaturedCard