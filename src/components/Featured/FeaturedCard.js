import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'

const FeaturedCard = ({ featured }) => {
    return (
        <div class="card" style={{borderRadius:"5px", border:"none"}}>
            <img src={`${featured.image}`} class="card-img-top" alt="..." />
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
                }} class="card-text">{featured.description}</p>
                <p style={{
                    color: "#1A363E",
                    fontFamily: "'Fira Sans-Regular', Helvetica",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-text"><small class="text-body-secondary">{featured.price}</small></p>
            </div>
        </div >
    )
}

export default FeaturedCard