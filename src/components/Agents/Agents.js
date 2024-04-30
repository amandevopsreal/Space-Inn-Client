import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import "./Agents.css"

const Agents = () => {
    const [agents, setAgents] = useState([])
    const [selectedAgent, setSelectedAgent] = useState({})
    const [properties, setProperties] = useState([])
    const getAgent = async () => {
        const response = await fetch(`http://localhost:5000/api/agents`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json()
        setAgents(json)
        setSelectedAgent(json[0])
    }
    const getPropertiesAssigned = async () => {
        const response = await fetch(`http://localhost:5000/api/agents/assigned/${selectedAgent._id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json()
        setProperties(json)
    }

    useEffect(() => {
        getPropertiesAssigned()
    }, [selectedAgent])

    useEffect(() => {
        getAgent()
    }, [])

    return (
        <div style={{ marginTop: "20px", marginBottom: "20px" }} className='container'>
            <div style={{
                width: "100%", height: "166px", background: "#FFFFFF", boxShadow: "2px 4px 10px 5px rgba(0, 0, 0, 0.1)", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingLeft: "20px"
            }}>
                <p style={{ fontSize: "24px", fontWeight: 400, textAlign: "left", width: "100%" }} class="text-justify">Our Agents</p>
                <div style={{ width: "100%", display: "flex", gap: "15px" }}>
                    {agents.map(itm => {
                        return (<div onClick={() => {
                            setSelectedAgent(itm)
                            console.log(itm)
                        }} style={{ width: "25%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", height: "60px", borderRadius: "10px", background: "#54BE4933", border: "1px solid #22B362", cursor: "pointer" }}><PersonIcon /><p style={{ margin: 0 }}>{itm.name}</p></div>)
                    })}
                </div>
            </div>
            <div className='container' style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "20px", fontWeight: 400 }}>Lorem Ipsum is a highly enterprising and dynamic real estate professional who has a Degree in Management from the St. Andrews Institution and has completed her <span style={{ fontSize: "20px", fontWeight: 500 }}>Executive Development Program</span> in Real Estate <span style={{ fontSize: "20px", fontWeight: 500 }}>Business Management from the Symbiosis Institute of Management Studies</span> in Pune. With Gupta & Sen associates, she handles our  <span style={{ fontSize: "20px", fontWeight: 500 }}>real estate marketing strategy,</span> conducts Real Estate Market research for our clients in the Indian and Global Market and assists NRI’s and HNI’s for their India Entry strategy and Real Estate Investment decisions.</p>
            </div>
            <div style={{
                display: "flex", marginTop: "20px", borderRadius: "5px", boxShadow: "2px 4px 4px 0px rgba(0, 0, 0, 0.1)"
            }} className='container threediv'>
                <div className='img-details' style={{ width: "60%", display: "flex" }}>
                    <div className='photo' style={{ width: "50%" }}>
                        <PersonIcon sx={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className='contact' style={{ width: "50%" }}>
                        <p style={{ fontSize: "20px", fontWeight: 400, textAlign: "left", width: "100%" }} class="text-justify">Details</p>
                        <p style={{ fontSize: "20px", fontWeight: 400 }}>{selectedAgent.address}</p>
                        <ul style={{ fontSize: "20px", fontWeight: 400 }}>
                            <li>{selectedAgent.phone}</li>
                            <li><p style={{ overflowWrap: "break-word" }}>{selectedAgent.email}</p></li>
                            <li>{selectedAgent.website}</li>
                        </ul>
                    </div>
                </div>
                <div className='form-div' style={{ width: "40%" }}>
                    <p style={{ fontSize: "20px", fontWeight: 500, textAlign: "left", width: "100%" }} class="text-justify">Contact form</p>
                    <div class="mb-3">
                        <input placeholder='Name' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <input placeholder='Phone' type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <input placeholder='Email' type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <Button sx={{
                        color: "white",
                        width: "100%",
                        background: "#22B362", "&:hover": {
                            backgroundColor: "#22B362 !important",
                        },
                        "&:active": {
                            backgroundColor: "#22B362 !important",
                        }
                    }} type="submit">Email</Button>
                </div>
            </div>
            <div style={{ marginTop: "20px" }} className='container'>
                <p style={{ fontSize: "24px", fontWeight: 500, textAlign: "left", width: "100%" }} class="text-justify">Assigned Properties</p>
                <div className='row row-spl'>
                    {
                        properties && properties.map((item, idx) => {

                            return (

                                <div key={idx} className='col-md-6 col-lg-3'>
                                    <div class="card" style={{ cursor: "pointer", borderRadius: "5px", border: "none", boxShadow: "0px 4px 10px 5px #0000001a" }}>
                                        <img style={{ width: "100%", height: "244px", objectFit: "cover" }} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 style={{
                                                color: "#1a363e", fontSize: "20px", fontWeight: 500, letterSpacing: 0,
                                                lineHeight: "normal"
                                            }} class="card-title"></h5>
                                            <p style={{
                                                color: "#45666b",
                                                fontFamily: "'Fira Sans-Regular', Helvetica",
                                                fontSize: "15px",
                                                fontWeight: 400,
                                                letterSpacing: 0,
                                                lineHeight: "normal"
                                            }} class="card-text"></p>
                                            <p style={{
                                                color: "#1A363E",
                                                fontFamily: "'Fira Sans-Regular', Helvetica",
                                                fontSize: "15px",
                                                fontWeight: 400,
                                                letterSpacing: 0,
                                                lineHeight: "normal"
                                            }} class="card-text"><small class="text-body-secondary"></small></p>
                                        </div>
                                    </div >
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Agents