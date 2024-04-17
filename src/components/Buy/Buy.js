import React, { useEffect, useState } from 'react'
import "./Buy.css"
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px"
};

const Buy = () => {
    const navigate = useNavigate()

    const handleView = (_id) => {
        navigate(`/property/${_id}`)
    }
    const onView = (_id) => {
        handleView(_id)
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [contactEmail, setContactEmail] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [contactOpen, setContactOpen] = React.useState(false);
    const handleContactOpen = (itm) => {
        setContactOpen(true);
        setContactEmail(itm.contact_email)
        setContactNumber(itm.contact_number)
    }
    const handleContactClose = () => setContactOpen(false);

    function incrementCount() {
        setRooms(rooms + 1);
    }
    function decrementCount() {
        setRooms(rooms - 1);
    }
    const [minBudget, setMinBudget] = useState(0)
    const [maxBudget, setMaxBudget] = useState(0)
    const [rooms, setRooms] = useState(0)
    const [location, setLocation] = useState("Lucknow")
    const [rmove, setRmove] = useState(false)
    const [progress, setProgress] = useState(false)
    const [property, setProperty] = useState([])
    const readyToMoveValue = (e) => {
        e ? setRmove(true) : setRmove(false)
    }

    const progressValue = (e) => {
        e ? setProgress(true) : setProgress(false)
    }

    useEffect(() => {
        let url = 'http://localhost:5000/api/properties/search';
        url += `?location=${encodeURIComponent("Lucknow")}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProperty(data)
                console.log(data)
            })
            .catch(error => console.error('Error fetching properties:', error));
    }, []);

    useEffect(() => {
        let url = 'http://localhost:5000/api/properties/search';
        if (location) url += `?location=${encodeURIComponent(location)}`;
        if (minBudget) url += `&minbudget=${encodeURIComponent(minBudget)}`;
        if (maxBudget) url += `&maxbudget=${encodeURIComponent(maxBudget)}`;
        if (rooms) url += `&rooms=${encodeURIComponent(rooms)}`;
        url += `&rmove=${encodeURIComponent(rmove)}`;
        url += `&progress=${encodeURIComponent(progress)}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProperty(data))
            .catch(error => console.error('Error fetching properties:', error));
    }, [location, minBudget, maxBudget, rooms, rmove, progress]);

    return (
        <div className='container' style={{ display: "flex" }}>
            <div className='view-sec'>
                <div style={{ height: "117px", width: "100%", display: "flex", marginTop: "20px", boxShadow: "0px 4px 20px 10px #0000001a", borderRadius: "5px", padding: "30px" }}>
                    <div className='options'>
                        <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                            <p className='filter-heading'>Budget</p>
                            <input onChange={(e) => setMinBudget(e.target.value)} placeholder='min budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px" }} type='number'></input>
                            <input onChange={(e) => setMaxBudget(e.target.value)} placeholder='max budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "10px" }} type='number'></input>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                            <p className='filter-heading'>Rooms</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#939393" }}>
                                <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={decrementCount}>-</button>
                                <div>{rooms}</div>
                                <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={incrementCount}>+</button>BHK
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                            <input onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location' style={{ padding: "10px", borderRadius: "5px", border: "1px solid #22B362", boxShadow: "2px 4px 10px 4px rgba(34, 179, 98, 0.1) inset", width: "100%" }}></input>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                            <p className='filter-heading'>Construction Status</p>
                            <div style={{ textAlign: "left" }}>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <input onChange={e => readyToMoveValue(e.currentTarget.checked)} style={{ border: "1px solid #939393", cursor: "pointer" }} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle1"> Ready to move</label>
                                </div>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <input onChange={e => progressValue(e.currentTarget.checked)} style={{ border: "1px solid #939393", cursor: "pointer" }} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                    <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle2"> In progress</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-options'>
                        <input onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location' style={{ padding: "10px", borderRadius: "5px", border: "1px solid #22B362", boxShadow: "2px 4px 10px 4px rgba(34, 179, 98, 0.1) inset" }}></input>
                        <FilterAltIcon onClick={handleOpen} />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={{ ...style, textAlign: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <p className='filter-heading'>Budget</p>
                                    <input onChange={(e) => setMinBudget(e.target.value)} placeholder='min budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px" }} type='number'></input>
                                    <input onChange={(e) => setMaxBudget(e.target.value)} placeholder='max budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "10px" }} type='number'></input>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <p className='filter-heading'>Rooms</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#939393" }}>
                                        <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={decrementCount}>-</button>
                                        <div>{rooms}</div>
                                        <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={incrementCount}>+</button>BHK
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <p className='filter-heading'>Construction Status</p>
                                    <div style={{ textAlign: "left" }}>
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <input onChange={e => readyToMoveValue(e.currentTarget.checked)} style={{ border: "1px solid #939393" }} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle1"> Ready to move</label>
                                        </div>
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <input onChange={e => progressValue(e.currentTarget.checked)} style={{ border: "1px solid #939393" }} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle2"> In progress</label>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div style={{ marginTop: "30px" }} className='row'>
                    {property.map(itm => {
                        return (
                            <div className='col-sm-6 col-md-6 col-lg-6'>
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
                                                <p class="card-text">{itm.listing_type} in {itm.address}</p>
                                                <p class="card-text"><small class="text-body-secondary">{itm.price} L</small></p>
                                                <div style={{ display: 'flex', gap: "5px" }}>
                                                    <Button
                                                        onClick={() => { onView(itm._id) }}
                                                        sx={{
                                                            color: "#22B362", "&:hover": {
                                                                backgroundColor: "#FFFF!important",
                                                                border: "1px solid #22B362"
                                                            },
                                                            "&:active": {
                                                                backgroundColor: "#FFFF !important",
                                                            }, border: "1px solid #22B362", background: "#FFFF"
                                                        }} variant="outlined">View</Button>
                                                    <Button onClick={() => handleContactOpen(itm)} sx={{
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
                                <Modal
                                    open={contactOpen}
                                    onClose={handleContactClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Contact Information
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Whatsapp: {contactNumber}
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Email: {contactEmail}
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='amenties-div' style={{
                height: "473px", width: "15%", backgroundColor: "red", justifyContent: "center", marginTop: "20px", marginLeft: "5%", borderRadius: "5px", background: "rgba(255, 255, 255, 1)", boxShadow: "2px 4px 10px 4px rgba(0, 0, 0, 0.1)",

            }}>
                <p style={{ fontSize: "20px", fontWeight: 500 }}>
                    Amenties
                </p>
            </div>
        </div>
    )
}

export default Buy