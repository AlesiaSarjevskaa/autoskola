import { Link, useNavigate } from "react-router-dom"
import { use, useState } from "react";
import { createPoliceStation } from "../../../models/PoliceStations";

export default function PoliceStationCreate() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const data = await createPoliceStation(formData);
        if (data.status === 201) return navigate("/")
        setInfo(data.msg);
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleButton = (e) => {
       e.preventDefault(); 
       postForm();
    }

  return (
    <>
        <h1>PoliceStation Create</h1>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
            <input type="number" name="stationCode" placeholder="Enter stationCode" onChange={e => handleInput(e)}/>
            <input type="text" name="address" placeholder="Enter address" onChange={e => handleInput(e)}/>
            <input type="text" name="city" placeholder="Enter city" onChange={e => handleInput(e)}/>
            <input type="number" name="phone" placeholder="Enter phone" onChange={e => handleInput(e)}/>
            <input type="text" name="operationHouse" placeholder="Enter operationHouse" onChange={e => handleInput(e)}/>
            <input type="number" name="vehicleCapacity" placeholder="Enter vehicleCapacity" onChange={e => handleInput(e)}/>
            <input type="number" name="holdingCells" placeholder="Enter holdingCells" onChange={e => handleInput(e)}/>
            <input type="text" name="hasDispatchCentre" placeholder="Enter hasDispatchCentre" onChange={e => handleInput(e)}/>
            <input type="number" name="officerCount" placeholder="Enter officerCount" onChange={e => handleInput(e)}/>
            <input type="text" name="email" placeholder="Enter email" onChange={e => handleInput(e)}/>
            <button onClick={handleButton}>
                Send
            </button>
        </form>
        <p>{info}</p>
        <Link to={"/"}>
            <button>Home</button>
        </Link>
     </>
  )
}
