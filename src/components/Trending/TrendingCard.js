import { Height } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
const TrendingCard = ({ upcomingitem }) => {
    const navigate = useNavigate()

    const handleView = (_id) => {
        navigate(`/property/${_id}`)
    }
    const onView = (_id) => {
        handleView(_id)
    }
    return (
        <div onClick={() => { onView(upcomingitem._id) }} class="card mb-3" style={{ cursor: "pointer", maxWidth: "540px", boxShadow: "0px 4px 10px 5px #0000001a", borderRadius: "10px", border: "none" }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img style={{ height: "100%" }} src={`${upcomingitem.images[0]}`} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p style={{ fontSize: "20px", color: "#1A363E" }} class="card-title">{upcomingitem.title}</p>
                        <p style={{ fontSize: "12px", color: "#939393", fontWeight: "500", letterSpacing: "0", lineHeight: "normal" }} class="card-text">By {upcomingitem.owner}</p>
                        <p style={{ fontSize: "12px", color: "#45666B", fontWeight: "500", letterSpacing: "0", lineHeight: "normal" }} class="card-text mt-2">{upcomingitem.listing_type}</p>
                        <p style={{ fontSize: "12px", fontWeight: "500", color: "#939393", letterSpacing: "0", lineHeight: "normal" }} class="card-text mt-2">{upcomingitem.address}</p>
                        <p style={{ fontSize: "12px", fontWeight: "500", color: "#1A363E", letterSpacing: "0", lineHeight: "normal" }} class="card-text mt-2">{upcomingitem.price} Lacs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard