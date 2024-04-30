import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./SearchBar.css"
import { useContext } from 'react'
import locationContext from '../../context/location/locationContext';

const SearchBar = () => {
    const context = useContext(locationContext)
    const { setCurrentLocation } = context
    const [city, setCity] = useState("")
    const [selectedCity, setSelectedCity] = useState(null);
    const handleSelect = (city) => {
        setSelectedCity(city);
        //onSelect(city);
    };
    const indianCities = [
        'Mumbai',
        'Delhi',
        'Bangalore',
        'Hyderabad',
        'Chennai',
        'Lucknow'
        // Add more cities as needed
    ];
    return (
        <Stack direction={"row"} alignItems={"center"} sx={{ background: "#ffffff", justifyContent: "center", borderRadius: "10px", height: "100px", boxShadow: "0px 4px 20px 10px #0000000d", marginTop: "-50px", width: { xs: "100%", sm: "100%", md: "82%" } }}>

            <Paper
                component={"form"}
                sx={{
                    height: "100%",
                    border: "1px solid #e3e3e3",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "10px",
                    border: "none",
                    width: "100%",
                    justifyContent: "center"
                }}>
                <Button sx={{
                    display: 'flex', alignItems: "center", background: "#45666B", height: "100%", borderRadius: "10px",
                    color: "#ffffff",
                    fontFamily: '"Fira Sans-Regular", Helvetica',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    width: "30%",
                    textTransform: 'none',
                    '&:hover': {
                        background: '#45666B'
                    },
                }}>
                    {localStorage.getItem("location") ? localStorage.getItem("location") : "India"}
                </Button>
                <select style={{ borderRadius: "10px", outline: 0, border: 0, width: "70%", height: "100%", padding: "20px", color: "#bdbcbc", border: "none" }} onChange={(e) => setCurrentLocation(e.target.value)}>
                    <option value="">Select</option>
                    {indianCities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </Paper>
        </Stack>
    )
}

export default SearchBar