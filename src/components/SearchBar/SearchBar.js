import React from 'react'
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
    const {location  } = context
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
                <Button endIcon={<ArrowDropDownIcon />} sx={{
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
                    {localStorage.getItem("location")?localStorage.getItem("location"):"India"}
                </Button>
                <input
                    style={{ width: "70%", height: "100%", padding: "20px", color: "#bdbcbc",border:"none" }}
                    className="search-bar"
                    placeholder="Enter City"
                />
                <IconButton type="submit" sx={{ p: "10px", color: "#1A363E", marginRight: "25px" }}>
                    <Search />
                </IconButton>
            </Paper>
        </Stack>
    )
}

export default SearchBar