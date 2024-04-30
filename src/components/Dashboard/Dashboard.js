import React, { useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Posted from '../Posted/Posted';
import Saved from '../Saved/Saved';
const Dashboard = () => {

    const [alignment, setAlignment] = React.useState('posted');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        saved_properties: []
    })
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onEdit = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name: user.name, email: user.email, phone: user.phone }),
        });
        const json = await response.json()
        console.log(json)
    }
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("http://localhost:5000/api/auth/getUser", {
                method: "post",
                headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },

            })
            const json = await response.json()
            setUser({ name: json.name, email: json.email, phone: json.phone, saved_properties: json.saved_properties })
            console.log(json)
        }
        getUser()
    }, [])
    return (
        <div style={{ marginBottom: "20px" }} className='container'>
            <div>
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input value={user.name} id="name" name='name' onChange={onChange} type="text" class="form-control" aria-describedby="nameHelp" />
                    <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input value={user.email} id="email" name='email' onChange={onChange} type="text" class="form-control" aria-describedby="nameHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPhone1" class="form-label">Phone</label>
                    <input value={user.phone} id="phone" name='phone' onChange={onChange} type="text" class="form-control" aria-describedby="nameHelp" />
                </div>
                <button onClick={onEdit} type="submit" class="btn " style={{ background: "#22B362", color: 'white' }}>Save</button>
            </div>
            <div style={{ marginTop: "20px", width: '100%', justifyContent: "center !important", alignItems: "center !important" }}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="posted">Posted</ToggleButton>
                    <ToggleButton value="saved">Saved</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {alignment === "posted" ? <Posted /> : <Saved tags={user.saved_properties} />}
        </div>
    )
}

export default Dashboard