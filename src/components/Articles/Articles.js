import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import ArticlesCard from './ArticlesCard';
import { useContext } from 'react'
import locationContext from '../../context/location/locationContext';
import "./Articles.css"
const Articles = () => {
    const [news, setNews] = useState([])
    const context = useContext(locationContext)
    const { location } = context

    const fetchNews = async () => {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=79e755070c6046dda182ac1b1c03ba3c&pageSize=4&category=business";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setNews(parsedData.articles)
    }

    useEffect(() => {
        fetchNews()
    }, [location])

    return (
        <div style={{ marginBottom: "90px" }}>
            <div style={{ marginTop: "90px" }} className='container'><Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#1A363E", textAlign: "left", width: "100%" }}>
                Top articles on home buying
            </Typography></div>
            <div className='container'>
                <div className='row row-spl'>

                    {
                        news && news.map((item, idx) => {
                            return (
                                <div key={idx} className='col-md-6 col-lg-3'>
                                    <ArticlesCard news={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Articles