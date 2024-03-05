import React, { useEffect } from 'react'
import "./Property.css"
import Button from '@mui/material/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { Gallery } from "react-grid-gallery";

const Property = () => {
    const images = [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            width: 280,
            height: 261,
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 176,
            height: 125,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 72,
            height: 125,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 72,
            height: 125,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 280,
            height: 125,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 176,
            height: 125,
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            width: 488,
            height: 125,
        },
    ];
    const { _id } = useParams();
    const getProperty = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/property/view/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json()
        console.log(json)
    }
    useEffect(() => {
        getProperty()
    }, [_id])
    return (
        <div className='container'>
            <div className='property-container'>
                <div className='prop-sec-1'>
                    <div className='prop-sub-sec-1'>
                        <p style={{ color: "rgba(26, 54, 62, 1)", fontWeight: 500, fontSize: "32px" }}>Rage Golden Spring</p>
                        <p style={{ fontWeight: 400, fontSize: "20px" }}>By <span style={{ color: "rgba(34, 179, 98, 1)", fontSize: 500, fontSize: "20px" }}>Sahai Construction</span></p>
                        <p style={{ fontWeight: 400, fontSize: "16px", color: "rgba(147, 147, 147, 1)" }}>Meera Road, Jaipur</p>
                    </div>
                    <div className='prop-sub-sec-2'>
                        <p style={{ fontWeight: 500, fontSize: "20px" }}>₹42.9 L - 58.9L</p>
                        <p style={{ fontWeight: 400, fontSize: "20px" }}>₹3.37 K/sq. ft</p>
                        <p style={{ fontWeight: 400, fontSize: "15px" }}><span style={{ color: "rgba(34, 179, 98, 1)" }}>EMI</span> starts at ₹22.72 K</p>
                        <Button sx={{ borderRadius: "10px", background: "rgba(34, 179, 98, 1)" }} variant="contained"><CallOutlinedIcon /> Contact Developer</Button>

                    </div>
                </div>
                <div className='prop-sec-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <span style={{ fontWeight: 400, fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>Gallery</span>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <ShareOutlinedIcon />
                            <TurnedInNotOutlinedIcon />
                        </div>
                    </div>
                    <div style={{ width: "100%", marginTop: "15px" }}>
                        <Gallery images={images} />
                    </div>
                </div>
                <div className='prop-sec-3'>
                    <div className='prop-sec-3-cont' style={{ width: "95%", display: "flex" }}>
                        <div className='sec-3-sub' id='sec-3-sub-1' style={{ borderRight: '1px solid rgba(0, 0, 0, 1)', justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                            <div>
                                <p className='sec-3-head'>2, 3 BHK Apartments</p>
                                <p style={{ width: "100%", textAlign: "center" }} className='sec-3-sub-head'>Configurations</p>
                            </div>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-2' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: '1px solid rgba(0, 0, 0, 1)' }}>
                            <p className='sec-3-head'>Dec, 2026</p>
                            <p className='sec-3-sub-head'>Possession Starts</p>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-3' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: '1px solid rgba(0, 0, 0, 1)' }}>
                            <p className='sec-3-head'>₹3.37 K/sq. Ft</p>
                            <p className='sec-3-sub-head'>Avg. Price</p>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-4' style={{ justifyContent: "flex-end", alignItems: "center", paddingLeft: "10px" }}>
                            <p className='sec-3-head'>1275.00 sq.ft. - 1515.00 sq.ft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property