import React, { useState,useEffect } from 'react'
import { Button } from '@mui/material'
const Posted = () => {
    const [property, setProperty] = useState([])
    useEffect(() => {
        let url = 'http://localhost:5000/api/properties/posted';
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        })
            .then(response => response.json())
            .then(data => {
                setProperty(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching properties:', error));
    }, []);
    return (
        <div style={{ marginTop: "30px" }} className='row'>
            {property.map(itm => {
                return (
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <div class="card mb-3" style={{
                            maxWidth: "540px", background: "#22B3621A", border: "none", boxShadow: "2px 4px 7px 2px rgba(0, 0, 0, 0.1)"
                        }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img style={{ width: "100%", height: "244px", objectFit: "cover", borderRadius: "5px" }} src={`${itm.images[0]}`} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{itm.title}</h5>
                                        <p class="card-text">{itm.configuration} BHK in {itm.address}</p>
                                        <p class="card-text"><small class="text-body-secondary">{itm.minPrice} - {itm.maxPrice}</small></p>
                                        <div style={{ display: 'flex', gap: "5px" }}>
                                            <Button
                                                sx={{
                                                    color: "#22B362", "&:hover": {
                                                        backgroundColor: "#FFFF!important",
                                                        border: "1px solid #22B362"
                                                    },
                                                    "&:active": {
                                                        backgroundColor: "#FFFF !important",
                                                    }, border: "1px solid #22B362", background: "#FFFF"
                                                }} variant="outlined">View</Button>
                                            <Button sx={{
                                                background: "#22B362", "&:hover": {
                                                    backgroundColor: "#22B362!important",
                                                },
                                                "&:active": {
                                                    backgroundColor: "#22B362!important",
                                                }
                                            }} variant="contained">Contact</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posted