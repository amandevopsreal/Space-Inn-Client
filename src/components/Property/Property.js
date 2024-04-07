import React, { useEffect, useState } from 'react'
import "./Property.css"
import Button from '@mui/material/Button';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import { Gallery } from "react-grid-gallery";
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WaterDrop from '@mui/icons-material/WaterDrop';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LandscapeIcon from '@mui/icons-material/Landscape';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import FenceIcon from '@mui/icons-material/Fence';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import { ShareModal } from "react-share-modal";

const Property = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [propertyItem, setPropertyItem] = useState({})
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
        setPropertyItem(json)
    }
    useEffect(() => {
        getProperty()
    }, [_id])
    const featureIcon = (itm) => {
        if (itm === "Rain Water Harvesting") {
            return <WaterDrop />
        }
        else if (itm === "Fire Fighting System") {
            return <FireTruckIcon />
        }
        else if (itm === "Sewage Treatment") {
            return <WaterDrop />
        }
        else if (itm === "Play Area") {
            return <SportsHandballIcon />
        }
        else if (itm === "24X7 Water Supply") {
            return <WaterDropIcon />
        }
        else if (itm === "Landscaping & Tree Planting") {
            return <LandscapeIcon />
        }
        else if (itm === "Power Backup") {
            return <SolarPowerIcon />
        }
        else if (itm === "Gated Community") {
            return <FenceIcon />
        }
        else if (itm === "24x7 Security") {
            return <NoEncryptionIcon />
        }
        else if (itm === "Car Parking") {
            return <TimeToLeaveOutlinedIcon />
        }
    }
    return (
        <div style={{ marginBottom: "20px" }} className='container property-main'>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Contact Information
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Whatsapp: {propertyItem.contact_number}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Email: {propertyItem.contact_email}
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <ShareModal
                view={isOpen}
                onCancel={() => setIsOpen(false)}
                theme="light"
                lang="en"
            >
                <button type="type">
                </button>
            </ShareModal>

            <div className='property-container'>
                <div className='prop-sec-1'>
                    <div className='prop-sub-sec-1'>
                        <p style={{ color: "rgba(26, 54, 62, 1)", fontWeight: 500, fontSize: "32px" }}>{propertyItem.title}</p>
                        <p style={{ fontWeight: 400, fontSize: "20px" }}>By <span style={{ color: "rgba(34, 179, 98, 1)", fontSize: 500, fontSize: "20px" }}>{propertyItem.owner}</span></p>
                        <p style={{ fontWeight: 400, fontSize: "16px", color: "rgba(147, 147, 147, 1)" }}>{propertyItem.address}</p>
                    </div>
                    <div className='prop-sub-sec-2'>
                        <p style={{ fontWeight: 500, fontSize: "20px" }}>₹{propertyItem.price} L</p>
                        <p style={{ fontWeight: 400, fontSize: "20px" }}>₹{propertyItem.average_price} K/sq. ft</p>
                        <p style={{ fontWeight: 400, fontSize: "15px" }}><span style={{ color: "rgba(34, 179, 98, 1)" }}>EMI</span> starts at ₹{propertyItem.emi} K</p>
                        <Button sx={{
                            borderRadius: "10px", background: "rgba(34, 179, 98, 1)", "&:hover": {
                                backgroundColor: "rgba(34, 179, 98, 1) !important",
                            },
                            "&:active": {
                                backgroundColor: "rgba(34, 179, 98, 1) !important",
                            }
                        }} onClick={handleOpen} variant="contained"><CallOutlinedIcon /> Contact Developer</Button>

                    </div>
                </div>
                <div className='prop-sec-2'>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <span style={{ fontWeight: 400, fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>Gallery</span>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <ShareOutlinedIcon onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }} />
                            <TurnedInNotOutlinedIcon style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <div style={{ width: "100%", marginTop: "15px" }}>
                        <Gallery images={propertyItem.images && propertyItem.images.map(img => {
                            return (
                                {
                                    src: img,
                                    width: 320,
                                    height: 212,
                                }
                            )
                        })} />
                    </div>
                </div>
                <div className='prop-sec-3'>
                    <div className='prop-sec-3-cont' style={{ width: "95%", display: "flex" }}>
                        <div className='sec-3-sub' id='sec-3-sub-1' style={{ borderRight: '1px solid rgba(0, 0, 0, 1)', justifyContent: "center", alignItems: "flex-start", flexDirection: "column" }}>
                            <div>
                                <p style={{ textAlign: "center" }} className='sec-3-head'>{propertyItem.listing_type}</p>
                                <p style={{ width: "100%", textAlign: "center" }} className='sec-3-sub-head'>Configurations</p>
                            </div>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-2' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: '1px solid rgba(0, 0, 0, 1)' }}>
                            <p className='sec-3-head'>{new Date(propertyItem.possession_date).toLocaleDateString()}</p>
                            <p className='sec-3-sub-head'>Possession Starts</p>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-3' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", borderRight: '1px solid rgba(0, 0, 0, 1)' }}>
                            <p className='sec-3-head'>₹{propertyItem.average_price} K/sq. Ft</p>
                            <p className='sec-3-sub-head'>Avg. Price</p>
                        </div>
                        <div className='sec-3-sub' id='sec-3-sub-4' style={{ justifyContent: "flex-end", alignItems: "center", paddingLeft: "10px" }}>
                            <p className='sec-3-head'>{propertyItem.area && propertyItem.area.map((ar, index) => (
                                <React.Fragment key={index}>
                                    {ar} sq.ft{index !== propertyItem.area.length - 1 && ', '}
                                </React.Fragment>
                            ))}</p>
                        </div>
                    </div>
                </div>
                <div className='prop-sec-4'>
                    <div className='container' style={{ marginTop: "20px" }} >
                        <div className='row' style={{ marginLeft: "5%" }}>
                            <div className='col-md-12'>
                                <p style={{ textAlign: "center", color: "rgba(0, 0, 0, 1)", fontWeight: 500, fontSize: "24px" }} className=''>{propertyItem.title} Amenities</p>
                            </div>
                        </div>
                        <div className='container' /*style={{ display: "flex", flexWrap: 'wrap',width:"80%" }}*/>
                            <div className='row'>
                                {
                                    propertyItem.features && propertyItem.features.map(itm => {
                                        return (
                                            <div className='col-sm-6 col-md-4 col-lg-3' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                {featureIcon(itm)}
                                                <p style={{ fontSize: "16px", fontWeight: 400, color: "rgba(26, 54, 62, 1)" }}>{itm}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
                <div className='prop-sec-5'>
                    <div className='prop-sub-sec-1' style={{ textAlign: "center" }}>
                        <h1>{propertyItem.title} - Brochure</h1>
                        <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                            {propertyItem.images && propertyItem.images.slice(0,3).map(img => {
                                return (

                                    <img style={{ width: "80px", height: "76px",borderRadius:"10px"}} src={img} />
                                )
                            })}
                        </div>
                        <a href={""} download="" target='_blank'><Button sx={{
                            borderRadius: "10px", background: "rgba(34, 179, 98, 1)", marginTop: "20px", "&:hover": {
                                backgroundColor: "rgba(34, 179, 98, 1) !important",
                            },
                            "&:active": {
                                backgroundColor: "rgba(34, 179, 98, 1) !important",
                            }
                        }} variant="contained"><DownloadIcon /> Download Brochure</Button></a>
                    </div>
                    <div className='prop-sub-sec-2' style={{ display: "flex" }}>
                        <div style={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="https://i.ibb.co/mT0Rxht/Ellipse-1.png" />
                        </div>
                        <div style={{ width: "80%", textAlign: "center" }}>
                            <h1>{propertyItem.title} Developer</h1>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>2009 Established</p>
                                <p>56 projects</p>
                                <p>56 projects</p>
                            </div>
                            <p style={{ textAlign: "center" }}>With a focus on excellence, we provide personalized service to help you find your ideal home. Explore our diverse range of residences, from tranquil retreats to vibrant urban spaces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property