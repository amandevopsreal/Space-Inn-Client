import { useState } from "react";
import LocationContext from "./locationContext";

const LocationState = (props) => {
    const [location, setLocation] = useState([])
    const setCurrentLocation = (loc) => {
        localStorage.setItem("location",loc)
        setLocation(loc)
    }
    return (
        <LocationContext.Provider value={{ location, setCurrentLocation }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export default LocationState