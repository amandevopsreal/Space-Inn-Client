import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
};

const Saved = ({ tags }) => {
    const [delId, setDelId] = useState("")
    const [property, setProperty] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        setOpen(true);
        setDelId(id)
    }
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const handleView = (_id) => {
        navigate(`/property/${_id}`)
    }
    const onView = (_id) => {
        handleView(_id)
    }

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:5000/api/properties/property/delete/${delId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        console.log("Deleting a property")
        console.log(response.json())
    }

    const onClickEdit = (id) => {
        localStorage.setItem("editId", id)
        navigate("/update")
    }
    
    useEffect(() => {
        let url = 'http://localhost:5000/api/properties/getsaved';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ tags: tags }),
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirmation
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Do you really want to delete this property?
                    </Typography>
                    <div style={{ marginTop: "10px" }}>
                        <Button onClick={handleDelete}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>
                    </div>
                </Box>
            </Modal>
            {property&&property.map(itm => {
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
                                        <div style={{ display: 'flex', gap: "5px", flexWrap: "wrap" }}>
                                            <Button
                                                onClick={() => onView(itm._id)}
                                                sx={{
                                                    color: "#22B362", "&:hover": {
                                                        backgroundColor: "#FFFF!important",
                                                        border: "1px solid #22B362"
                                                    },
                                                    "&:active": {
                                                        backgroundColor: "#FFFF !important",
                                                    }, border: "1px solid #22B362", background: "#FFFF"
                                                }} variant="outlined">View</Button>
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

export default Saved