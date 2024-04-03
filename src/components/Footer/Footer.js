import React from 'react'
import "./Footer.css"
import { Height } from '@mui/icons-material'

const Footer = () => {
    return (
        <div className='container'>
            <div className='footer-container '>
                <div className='footer-sub-1'>
                    <img src="https://i.ibb.co/Wk4L1G0/Group-47.png" />
                    <div style={{ marginTop: "1rem" }}>
                        <p>Transforming real estate: Discover listings, insights, andseamless transactions for buying, selling, and renting with Space Inn.</p>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <p style={{ fontWeight: 600 }}>Company Information:</p>
                        <ul>
                            <li>284/18, Lucknow</li>
                            <li>8840542151</li>
                            <li>spacein@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-sub-2'>
                    <div className='dummy' style={{ height: "50px" }}></div>
                    <div style={{ marginTop: "1rem" }}>
                        <p>Lorem ipsum dolor sit amet consectetur. Tincidunt vitae et tempus sit facilisis tincidunt augue. Tellus tristique ut faucibus lectus viverra mauris.</p>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <p style={{ fontWeight: 600 }}>Connect with us:</p>
                        <div style={{ display: "flex",gap:"45px" }}>
                            <img src='https://i.ibb.co/qJrRfr6/Vector.png' />
                            <img src='https://i.ibb.co/qJrRfr6/Vector.png' />
                            <img src='https://i.ibb.co/qJrRfr6/Vector.png' />
                            <img src='https://i.ibb.co/qJrRfr6/Vector.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer