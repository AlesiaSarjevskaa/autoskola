import { Link, useNavigate, useParams } from "react-router-dom"
import { getPoliceStation, deletePoliceStation } from "../../../models/PoliceStations"
import { useEffect, useState } from "react"

export default function PoliceStationShowOne() {
  const {id} = useParams();
  const [policeStation, setPoliceStation] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPoliceStation(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setPoliceStation(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleButton = async(e) => {
    e.preventDefault();
    if (formData === policeStation.name) {
      const data = await deletePoliceStation(id);
      if (data.status === 200) return navigate("/")
      return setInfo("PoliceStation was not deleted");
    }
    return setInfo("Wrong name!")
  }

  useEffect(() => {
    load();
  }, []);

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
      <p>PoliceStation is loading...</p>
      </>
    )
  }

  return (
    <>
    <div className="show-one-container">
        <h1>Show one PoliceStation</h1>
        <h2>{policeStation._id}</h2>
        <h2><b>Name:</b> {policeStation.name}</h2>
        <p><b>Station Code:</b> {policeStation.stationCode}</p>
        <p><b>Address:</b> {policeStation.address}</p>
        <p><b>City:</b> {policeStation.city}</p>
        <p><b>Phone:</b> {policeStation.phone}</p>
        <p><b>Operation House:</b> {policeStation.operationHouse}</p>
        <p><b>Vehicle Capacity:</b> {policeStation.vehicleCapacity}</p>
        <p><b>Holding Cells:</b> {policeStation.holdingCells}</p>
        <p><b>Dispatch Centre:</b> {policeStation.hasDispatchCentre}</p>
        <p><b>Officer Count:</b> {policeStation.officerCount}</p>
        <p><b>Email:</b> {policeStation.email}</p>
        <form>
          <input onChange={handleChange} type="text" placeholder="Enter policeStations name"/>
          <button onClick={handleButton}>Delete policeStation</button>
          <p>{info}</p>
        </form>
        <Link to={`/policeStation-update/${id}`}>
            <button>Update policeStation</button>
        </Link>
        <Link to={"/"}>
            <button>Home</button>
        </Link>
        </div>
    </>
  )
}
