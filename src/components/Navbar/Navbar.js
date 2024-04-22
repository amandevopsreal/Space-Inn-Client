import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SpaceIcon from "/Users/aman/space-inn-client/src/assets/Group-16.svg"
import { Button } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import locationContext from '../../context/location/locationContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const handleAuth = () => {
        navigate("/signup")
    }
    const handleLogOut = () => {
        localStorage.removeItem("token")
        window.location.reload();
    }
    const context = useContext(locationContext)
    const { setCurrentLocation, location } = context
    let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json"
    let apiKey = "a47bdc1d5b30434395346c0859645b82"
    const getUserCurrentAddress = async (latitude, longitude) => {
        let query = `${latitude},${longitude}`
        let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${query}&pretty=1`
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            console.log(data.results[0].components.state_district)
            setCurrentLocation(data.results[0].components.state_district)
            console.log(location)

        }
        catch {

        }
    }
    const getLocation = () => {
        console.log("aman")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    console.log(latitude, longitude)
                    getUserCurrentAddress(latitude, longitude)
                },
                (error) => {
                    console.log(error.message)
                }
            )
        }
    }
    return (
        <div style={{}} className='container'>
            <nav style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", boxShadow: "0px 4px 20px 10px #0000001a" }} class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
                <div class="container-fluid">
                    <Link to={"/"}><img style={{ width: "65px", height: "65px" }} className="icon" alt="Icon" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul style={{ display: "flex", width: "100%", justifyContent: "space-between" }} class="navbar-nav">
                            <li class="nav-item">
                                <Link style={{ textDecoration: "none", }} to="/buy"><a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px" }} class="nav-link" href="#">Buy</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: "none", }} to="/sell"> <a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px" }} class="nav-link active" aria-current="page" href="#">Sell</a></Link>
                            </li>
                            <Link style={{ textDecoration: "none", }} to="/rent"><li class="nav-item">
                                <a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px" }} class="nav-link" href="#">Rent</a>
                            </li></Link>
                            <li class="nav-item">
                                <a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px" }} class="nav-link" href="#">Agent Finder</a>
                            </li>

                            <li class="nav-item">
                                <a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px", cursor: "pointer" }} class="nav-link">Manage Rental</a>
                            </li>
                            <li class="nav-item">
                                <a style={{ color: "rgba(26, 54, 62, 1)", fontSize: "24px", fontWeight: 400, lineHeight: "28.8px", cursor: "pointer" }} class="nav-link">Help</a>
                            </li>
                            <li style={{ cursor: "pointer" }} onClick={() => { getLocation() }} class="nav-item">
                                <a class="nav-link"><LocationOnIcon /></a>
                            </li>
                            <li class="nav-item">
                                {localStorage.getItem("token") ? <Button variant="outlined" onClick={() => { handleLogOut() }} sx={{
                                    background: "#ffffff", borderRadius: "10px",
                                    color: "#1a363e",
                                    fontFamily: '"Fira Sans-Regular", Helvetica',
                                    border: "3px solid #54BE49",
                                    textTransform: 'none',
                                    "&.MuiButtonBase-root:hover": {
                                        bgcolor: "transparent",
                                        border: "3px solid #54BE49"
                                    }
                                }}>
                                    <PersonOutlineOutlinedIcon />
                                    Log out
                                </Button> : <Button variant="outlined" onClick={() => { handleAuth() }} sx={{
                                    background: "#ffffff", borderRadius: "10px",
                                    color: "#1a363e",
                                    fontFamily: '"Fira Sans-Regular", Helvetica',
                                    border: "3px solid #54BE49",
                                    textTransform: 'none',
                                    "&.MuiButtonBase-root:hover": {
                                        bgcolor: "transparent",
                                        border: "3px solid #54BE49"
                                    }
                                }}>
                                    <PersonOutlineOutlinedIcon />
                                    Sign in
                                </Button>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



