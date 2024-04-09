import React, { useState } from 'react'
import "./Buy.css"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const Buy = () => {
    let [count, setCount] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    return (
        <div className='container' style={{ display: "flex" }}>
            <div className='view-sec'>
                <div style={{ height: "117px", width: "100%", display: "flex", marginTop: "20px", boxShadow: "0px 4px 20px 10px #0000001a", borderRadius: "5px", padding: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                        <p className='filter-heading'>Budget</p>
                        <input placeholder='min budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px" }} type='number'></input>
                        <input placeholder='max budget' style={{ width: "123px", borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "10px" }} type='number'></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                        <p className='filter-heading'>Rooms</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#939393" }}>
                            <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={incrementCount}>+</button>
                            <div>{count}</div>
                            <button style={{ borderRadius: "5px", border: "1px solid #939393", color: "#939393", height: "29px", marginTop: "5px" }} onClick={decrementCount}>-</button>BHK
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                        <input placeholder='Enter Location' style={{ padding: "10px", borderRadius: "5px", border: "1px solid #22B362" }}></input>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                        <p className='filter-heading'>Construction Status</p>
                        <div style={{ textAlign: "left" }}>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <input style={{ border: "1px solid #939393" }} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle1"> Ready to move</label>
                            </div>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <input style={{ border: "1px solid #939393" }} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label style={{ fontSize: "20px", color: "#939393" }} for="vehicle2"> In progress</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "30px" }} className='row'>
                    {[0, 0, 0, 0].map(itm => {
                        return (
                            <div className='col-sm-6 col-md-6 col-lg-6'>
                                <div class="card mb-3" style={{ maxWidth: "540px", background: "#22B3621A" }}>
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="..." class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                                <div style={{ display: 'flex', gap: "5px" }}>
                                                    <Button sx={{ color: "#22B362", border: "1px solid #22B362",background:"#FFFF" }} variant="outlined">View</Button>
                                                    <Button sx={{ background: "#22B362" }} variant="contained">Contact</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{ height: "473px", width: "20%", backgroundColor: "red", display: "none" }}></div>
        </div>
    )
}

export default Buy