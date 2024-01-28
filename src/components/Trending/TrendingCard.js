import { Height } from '@mui/icons-material'
import React from 'react'

const TrendingCard = () => {
    return (
        <div class="card mb-3" style={{maxWidth: "540px" ,boxShadow: "0px 4px 10px 5px #0000001a",borderRadius:"10px",border:"none"}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img style={{height:"100%"}} src="https://i.ibb.co/NxLH2Ph/Whats-App-Image-2024-01-21-at-01-15-34.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p style={{fontSize:"20px",color:"#1A363E"}} class="card-title">Feet Skyvillie</p>
                        <p style={{fontSize:"12px",color:"#939393",fontWeight:"500",letterSpacing: "0",lineHeight: "normal"}}  class="card-text">By M/S SUNITA CONSTRUCTION CO</p>
                        <p style={{fontSize:"12px",color:"#45666B",fontWeight:"500",letterSpacing: "0",lineHeight: "normal"}} class="card-text mt-2">3BHK Apartment</p>
                        <p style={{fontSize:"12px",fontWeight:"500",color:"#939393",letterSpacing: "0",lineHeight: "normal"}} class="card-text mt-2">Khasra No. 99/2/1, 99/2/2, 100/1 And 100/2, Ayodhya Bypass, Bhopal</p>
                        <p style={{fontSize:"12px",fontWeight:"500",color:"#1A363E",letterSpacing: "0",lineHeight: "normal"}} class="card-text mt-2">56 Lacs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard