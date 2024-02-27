import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const FeaturedCard = ({ featured }) => {
    const navigate = useNavigate()

    const handleView = (_id) => {
        navigate(`/property/${_id}`)
    }
    const onView = (_id) => {
        handleView(_id)
    }
    return (
        <div onClick={() => { onView(featured._id) }} class="card" style={{ cursor: "pointer", borderRadius: "5px", border: "none", boxShadow: "0px 4px 10px 5px #0000001a" }}>
            <img style={{ height: "244px", width: "100%" }} src={`${featured.images[0]}`} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 style={{
                    color: "#1a363e", fontSize: "20px", fontWeight: 500, letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-title">{featured.title}</h5>
                <p style={{
                    color: "#45666b",
                    fontFamily: "'Fira Sans-Regular', Helvetica",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-text">{featured.address}</p>
                <p style={{
                    color: "#1A363E",
                    fontFamily: "'Fira Sans-Regular', Helvetica",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-text"><small class="text-body-secondary">{featured.price} Lacs.</small></p>
            </div>
        </div >
    )
}

export default FeaturedCard