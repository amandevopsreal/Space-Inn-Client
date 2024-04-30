import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const ArticlesCard = ({ news }) => {
    const navigate = useNavigate()

    const handleView = (_id) => {
        navigate(`/property/${_id}`)
    }
    const onView = (_id) => {
        handleView(_id)
    }
    return (
        <div class="card" style={{ cursor: "pointer", borderRadius: "5px", border: "none", boxShadow: "0px 4px 10px 5px #0000001a" }}>
            <img style={{ width: "100%", height: "244px", objectFit: "cover" }} src={news.urlToImage ? news.urlToImage : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 style={{
                    color: "#1a363e", fontSize: "20px", fontWeight: 500, letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-title">{news.title}</h5>
                <p style={{
                    color: "#45666b",
                    fontFamily: "'Fira Sans-Regular', Helvetica",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-text">{news.description?news.description.slice(0, 88):""}</p>
                <p style={{
                    color: "#1A363E",
                    fontFamily: "'Fira Sans-Regular', Helvetica",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: "normal"
                }} class="card-text"><small class="text-body-secondary">{new Date(news.publishedAt).toGMTString()}</small></p>
                <a href={news.url} rel="noreferrer" target='_blank' className="btn btn-sm" style={{background:"#22B362",color:'white'}}>Read More</a>
            </div>
        </div >
    )
}

export default ArticlesCard