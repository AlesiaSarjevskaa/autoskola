import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { updatePoliceStation, getPoliceStation } from "../../../models/PoliceStations"

export default function PoliceStationUpdate() {
  const { id } = useParams();
  const [policeStation, setPoliceStation] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate();

const load = async() => {
  const data = await getPoliceStation(id);
  if (data.status === 500) return setLoaded(null)
  if (data.status === 200) {
    setPoliceStation(data.payload);
    setLoaded(true);
  }
}

useEffect(() => {
  load();
}, []);

const update = async() => {
  const data = await updatePoliceStation(id, formData);
  if (data.status === 200) return navigate(`/policeStation/${id}`)
  return setInfo("PoliceStation was not updated")
}; 

const handleInput = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

if (isLoaded === null) {
  return (
    <>
    <p>PoliceStation not found</p>
    </>
  )
}

if (!isLoaded) {
  return (
    <>
    <p>PoliceStation is loading....</p>
    </>
  )
}

const handleButton = (e) => {
  e.preventDefault();
  update();
};

  return (
    <>
        <h1>PoliceStation Update</h1>
        <form>
        <div class="form-row">
            <p>Name</p>
            <input defaultValue={policeStation.name} type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Station Code</p>
            <input defaultValue={policeStation.stationCode} type="number" name="stationCode" placeholder="Enter stationCode" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Address</p>
            <input defaultValue={policeStation.address} type="text" name="address" placeholder="Enter address" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>City</p>
            <input defaultValue={policeStation.city} type="text" name="city" placeholder="Enter city" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Phone</p>
            <input defaultValue={policeStation.phone} type="number" name="phone" placeholder="Enter phone" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Operation House</p>
            <input defaultValue={policeStation.operationHouse} type="text" name="operationHouse" placeholder="Enter operationHouse" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Vehicle Capacity</p>
            <input defaultValue={policeStation.vehicleCapacity} type="number" name="vehicleCapacity" placeholder="Enter vehicleCapacity" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Holding Cells</p>
            <input defaultValue={policeStation.holdingCells} type="number" name="holdingCells" placeholder="Enter holdingCells" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Dispatch Centre</p>
            <input defaultValue={policeStation.hasDispatchCentre} type="text" name="hasDispatchCentre" placeholder="Enter hasDispatchCentre" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Officer Count</p>
            <input defaultValue={policeStation.officerCount} type="number" name="officerCount" placeholder="Enter officerCount" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Email</p>
            <input defaultValue={policeStation.email} type="text" name="email" placeholder="Enter email" onChange={e => handleInput(e)}/>
        </div>
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
