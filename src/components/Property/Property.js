import React from 'react'
import "./Property.css"
import Button from '@mui/material/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Property = () => {
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
            </div>
        </div>
    )
}

export default Property