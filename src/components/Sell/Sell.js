
import React, { useEffect, useState } from "react";
import "./Sell.css";
import { useNavigate } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import { isMuiElement } from "@mui/material";
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import CloseIcon from '@mui/icons-material/Close';

const Sell = () => {

    const [images, setImages] = useState([]);
    const [agents, setAgents] = useState([])
    const[selectedAgent,setSelectedAgent]=useState("")
    const getAgent = async () => {
        const response = await fetch(`http://localhost:5000/api/agents`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json()
        setAgents(json)
    }
    useEffect(()=>{
        getAgent()
    },[])
    const handleFileUpload = (event) => {
        const acceptedFiles = event.target.files[0]
        if (acceptedFiles) {
            const storageRef = firebase.storage().ref()
            const fileRef = storageRef.child(acceptedFiles.name)

            fileRef.put(acceptedFiles)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                        .then((downloadURL) => {
                            setImages(images.concat(downloadURL));
                        })
                })
        }
    };

    const [pdfFile, setPdfFile] = useState(null)
    const handleFileChange = (event) => {
        const acceptedFiles = event.target.files[0]
        if (acceptedFiles) {
            const storageRef = firebase.storage().ref()
            const fileRef = storageRef.child(acceptedFiles.name)

            fileRef.put(acceptedFiles)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL()
                        .then((downloadURL) => {
                            setPdfFile(downloadURL);
                        })
                })
        }
    };

    const [name, setName] = useState("");
    const [cat, setCat] = useState("")
    const [config, setConfig] = useState(0)
    const [possesionDate, setPossesionDate] = useState(new Date())
    const [estdDate, setEstdDate] = useState(new Date())
    const [projects, setProjects] = useState(0)
    const [description, setDescription] = useState("");
    const [minArea, setMinArea] = useState(0);
    const [maxArea, setMaxArea] = useState(0);
    const [constName, setConstName] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [avgPrice, setAvgPrice] = useState(0);
    const [emiPrice, setEmiPrice] = useState(0);
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pin, setPin] = useState("");
    const [amenties, setAmenties] = useState([])
    const States = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry",
    ];
    const onSubmit = async () => {
        const payload = {
            title: name,
            description: description,
            configuration: config,
            minPrice: minPrice,
            maxPrice: maxPrice,
            average_price: avgPrice,
            emi: emiPrice,
            contact_number: phone,
            contact_email: email,
            minArea: minArea,
            maxArea: maxArea,
            city: city,
            address: address,
            amenties: amenties,
            images: images,
            owner: constName,
            possesion_date: possesionDate,
            cat: cat,
            estdDate: estdDate,
            projects: projects,
            state: state,
            pin: pin,
            broucher: pdfFile,
            agent:selectedAgent
        }
        const response = await fetch(`http://localhost:5000/api/properties/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(payload),
        });
        console.log("Adding a new property")
        console.log(response.json())
    }
    const navigate = useNavigate();

    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onAmentiesChange = (event) => {
        if (!amenties.includes(event.target.value)) {
            setAmenties(amenties.concat(event.target.value))
            console.log(amenties)
        }
    }
    const onRemoveAmenties = (event) => {
        setAmenties(amenties.filter(function (amentie) {
            return amentie !== event;
        }))
    }
    const onConfigChange = (event) => {
        setConfig(event.target.value);
    };
    const onCatChange = (event) => {
        setCat(event.target.value);
    };
    const onPossesionDateChange = (event) => {
        setPossesionDate(event.target.value)
    }
    const onEstdDateChange = (event) => {
        setEstdDate(event.target.value)
    }
    const onProjectsChange = (event) => {
        setProjects(event.target.value)
    }
    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const onMinAreaChange = (event) => {
        setMinArea(event.target.value)
    }

    const onMaxAreaChange = (event) => {
        setMaxArea(event.target.value)
    }
    const onStateChange = (event) => {
        setState(event.target.value);
    };
    const onCityChange = (event) => {
        setCity(event.target.value);
    };
    const onPinChange = (event) => {
        setPin(event.target.value);
    };

    const validateName = () => {
        return name.length >= 3;
    };

    const validateConfig = () => {
        return config > 0;
    };

    const validateProjects = () => {
        return projects.length > 0;
    };

    const validateDescription = () => {
        return description.length >= 10;
    };

    const validateCity = () => {
        return city.trim() !== "";
    };

    const validateState = () => {
        const validStates = States;
        return validStates.includes(state.trim());
    };

    const validatePin = () => {
        return /^\d{6}$/.test(pin);
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function inputHandel(e) {
        e.preventDefault();
    }

    return (
        <div className="container" style={{ marginBottom: "20px" }}>
            <h1 className="list_heading">List A New Property</h1>
            <div class="form-row list_main row">
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Property name</label>
                    <input
                        type="text"
                        className={
                            validateName()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder="Name of the property"
                        required
                        onChange={onNameChange}
                    />
                    {!validateName() ? (
                        <div className="invalid-feedback">
                            Name must be at least 3 characters long.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Configuration</label>
                    <input
                        type="number"
                        className={
                            validateConfig()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder="BHK"
                        required
                        onChange={onConfigChange}
                    />
                    {!validateName() ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Possession Date</label>
                    <input
                        type="date"
                        className={"form-control is-valid"
                        }
                        id="validationServer01"
                        placeholder={new Date()}
                        required
                        onChange={onPossesionDateChange}
                    />
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Owner/ Company Estd.</label>
                    <input
                        type="date"
                        className={"form-control is-valid"
                        }
                        id="validationServer01"
                        placeholder={new Date()}
                        required
                        onChange={onEstdDateChange}
                    />
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Projects by owner</label>
                    <input
                        type="number"
                        className={
                            validateProjects()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder=""
                        required
                        onChange={onProjectsChange}
                    />
                    {!validateProjects() ? (
                        <div className="invalid-feedback">
                            Must be 0 or greater.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Owner description</label>
                    <input
                        type="text"
                        className={
                            validateDescription()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder=""
                        required
                        onChange={onDescriptionChange}
                    />
                    {!validateName() ? (
                        <div className="invalid-feedback">
                            Description must be at least 10 characters long.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Min Area</label>
                    <input
                        type="number"
                        className={
                            minArea > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder="sq.ft"
                        required
                        onChange={onMinAreaChange}
                    />
                    {!minArea > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Max Area</label>
                    <input
                        type="number"
                        className={
                            maxArea > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder="sq.ft"
                        required
                        onChange={onMaxAreaChange}
                    />
                    {!maxArea > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer01">Constructor name</label>
                    <input
                        type="text"
                        className={
                            constName.length >= 3
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer01"
                        placeholder="Name of the constructor"
                        required
                        onChange={(e) => setConstName(e.target.value)}
                    />
                    {!constName.length >= 3 ? (
                        <div className="invalid-feedback">
                            Name must be at least 3 characters long.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>


                <div class="col-sm-12 col-md-6 list_option">
                    <label for="validationServer01">Category</label>
                    <select
                        className="form-select is-valid"
                        id="inputGroupSelect03"
                        aria-label="Example select with button addon"
                        onChange={onCatChange}
                        required
                    >
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-sm-12 col-md-6 list_option">
                    <label for="validationServer01">Add Agent</label>
                    <select
                        className="form-select is-valid"
                        id="inputGroupSelect03"
                        aria-label="Example select with button addon"
                        onChange={(e)=>{setSelectedAgent(e.target.value)
                        console.log(e.target.value)}}
                        required
                    >
                        {agents.map(itm=>{
                            return(
                                <option value={itm._id}>{itm.name}</option>
                            )
                        })}
                    </select>
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">Min Price</label>
                    <input
                        type="number"
                        className={
                            minPrice > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder="K/ L/ Cr"
                        onChange={(e) => setMinPrice(e.target.value)}
                        required
                    />
                    {!minPrice > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">Max Price</label>
                    <input
                        type="number"
                        className={
                            maxPrice > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder="K/ L/ Cr"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        required
                    />
                    {!maxPrice > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">Average Price</label>
                    <input
                        type="text"
                        className={
                            avgPrice > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder="/sq. ft"
                        onChange={(e) => setAvgPrice(e.target.value)}
                        required
                    />
                    {!avgPrice > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">EMI Rate/Month</label>
                    <input
                        type="text"
                        className={
                            emiPrice > 0
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder="K/ L/ Cr"
                        onChange={(e) => setEmiPrice(e.target.value)}
                        required
                    />
                    {!emiPrice > 0 ? (
                        <div className="invalid-feedback">
                            Must be greater than 0.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">Owner Phone</label>
                    <input
                        type="text"
                        className={
                            phone.length === 10
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder=""
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                    {!phone.length === 10 ? (
                        <div className="invalid-feedback">
                            Must be of 10 digit.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer02">Owner Email</label>
                    <input
                        type="text"
                        className={
                            validateEmail(email)
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer02"
                        placeholder=""
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    {!validateEmail(email) ? (
                        <div className="invalid-feedback">
                            Must be a valid email.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
            </div>
            <div class="col-sm-12 col-md-12 ">
                <label for="validationServer01">Property Address</label>
                <input
                    type="text"
                    className={
                        validateDescription()
                            ? "form-control is-valid"
                            : "form-control is-invalid"
                    }
                    id="validationServer01"
                    placeholder="Address"
                    required
                    onChange={e => setAddress(e.target.value)}
                />
                {!validateDescription() ? (
                    <div className="invalid-feedback">
                        Address must be at least 10 characters long.
                    </div>
                ) : (
                    <div class="valid-feedback">Looks good!</div>
                )}
            </div>
            <div class="form-row row">
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer03">City</label>
                    <input
                        type="text"
                        className={
                            validateCity()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer03"
                        placeholder="City"
                        required
                        onChange={onCityChange}
                    />
                    {!validateCity() ? (
                        <div className="invalid-feedback">
                            Please provide a valid city in India.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer04">State</label>
                    <input
                        type="text"
                        className={
                            validateState()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer04"
                        placeholder="State"
                        required
                        onChange={onStateChange}
                    />
                    {!validateState() ? (
                        <div className="invalid-feedback">
                            Please provide a valid state of India.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer05">Pin Code</label>
                    <input
                        type="text"
                        className={
                            validatePin()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer05"
                        placeholder="Pin Code"
                        required
                        onChange={onPinChange}
                    />
                    {!validatePin() ? (
                        <div className="invalid-feedback">
                            Please provide a valid 6-digit PIN code.
                        </div>
                    ) : (
                        <div class="valid-feedback">Looks good!</div>
                    )}
                </div>
                <div class="col-sm-12 col-md-6 ">
                    <label for="validationServer05">Broucher</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        className={
                            validatePin()
                                ? "form-control is-valid"
                                : "form-control is-invalid"
                        }
                        id="validationServer05"
                        placeholder="PDF only"
                        required
                        onChange={handleFileChange}
                    />
                </div>
                <div>
                    {/*<div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <button class="btn btn-primary list_btn">
                            Upload Images
                        </button>
                    </div>*/}
                    <div class="col-sm-12 col-md-6 ">
                        <label for="validationServer05">Property Images</label>
                        <input
                            type="file"
                            className={
                                validatePin()
                                    ? "form-control is-valid"
                                    : "form-control is-invalid"
                            }
                            id="validationServer05"
                            placeholder="PDF only"
                            required
                            onChange={handleFileUpload}

                        />
                        <div style={{ marginTop: "10px", display: "flex", justifyContent: 'flex-start', alignItems: "center", gap: "5px" }} className="container">
                            {images.map((file, index) => (
                                <img style={{ width: "50px", height: "50px" }} key={index} src={file ? file : "default.png"} alt={`Uploaded ${index}`} />
                            ))}
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 list_option">
                        <label for="validationServer01">Select Amenties</label>
                        <select
                            className="form-select is-valid"
                            id="inputGroupSelect03"
                            aria-label="Example select with button addon"
                            onChange={onAmentiesChange}
                            required
                        >
                            <option value="Rain Water Harvesting">Rain Water Harvesting</option>
                            <option value="Fire Fighting System">Fire Fighting System</option>
                            <option value="Sewage Treatment">Sewage Treatment</option>
                            <option value="Play Area">Play Area</option>
                            <option value="24X7 Water Supply">24X7 Water Supply</option>
                            <option value="Landscaping & Tree Planting">Landscaping & Tree Planting</option>
                            <option value="Power Backup">Power Backup</option>
                            <option value="Gated Community">Gated Community</option>
                            <option value="24x7 Security">24x7 Security</option>
                            <option value="Car Parking">Car Parking</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "10px", display: "flex", justifyContent: 'flex-start', alignItems: "center", gap: "5px", flexWrap: "wrap", width: "100%" }} className="container">
                        {amenties.map(ind => {
                            return (<div style={{ border: "2px solid black", padding: "5px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}><p style={{ margin: 0 }}>{ind}</p><CloseIcon onClick={() => onRemoveAmenties(ind)} style={{ cursor: "pointer" }}></CloseIcon></div>)
                        })}
                    </div>
                </div>
            </div>
            <div class="form-group">
                {/* <div class="form-check">
            <input
              class="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              required
            />
            <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div> */}
            </div>
            <button style={{background:"#22B362",color:'white'}} class="btn list_btn" onClick={() => { onSubmit() }}>
                List Product
            </button>
        </div>
    );
};

export default Sell;
