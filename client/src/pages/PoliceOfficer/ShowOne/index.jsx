import { Link, useNavigate, useParams } from "react-router-dom"
import { getPoliceOfficer, deletePoliceOfficer } from "../../../models/PoliceOfficers"
import { useEffect, useState } from "react"

export default function PoliceOfficerShowOne() {
  const {id} = useParams();
  const [policeOfficer, setPoliceOfficer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPoliceOfficer(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setPoliceOfficer(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleButton = async(e) => {
    e.preventDefault();
    if (formData === policeOfficer.name) {
      const data = await deletePoliceOfficer(id);
      if (data.status === 200) return navigate("/")
      return setInfo("PoliceOfficer was not deleted");
    }
    return setInfo("Wrong name!")
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>PoliceOfficer not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
      <p>PoliceOfficer is loading...</p>
      </>
    )
  }

  return (
    <>
    <div className="show-one-container">
        <h1>Show one PoliceOfficer</h1>
        <h2>{policeOfficer._id}</h2>
        <h2><b>Name:</b> {policeOfficer.name}</h2>
        <p><b>Badge:</b> {policeOfficer.badge}</p>
        <p><b>Department:</b> {policeOfficer.department}</p>
        <p><b>Unit:</b> {policeOfficer.unit}</p>
        <p><b>Gender:</b> {policeOfficer.gender}</p>
        <p><b>Nationality:</b> {policeOfficer.nationality}</p>
        <p><b>Address:</b> {policeOfficer.address}</p>
        <p><b>Phone:</b> {policeOfficer.phone}</p>
        <p><b>Email: </b> {policeOfficer.email}</p>
        <p><b>Education:</b> {policeOfficer.education}</p>
        <p><b>City:</b> {policeOfficer.city}</p>
        <form>
          <input onChange={handleChange} type="text" placeholder="Enter policeOfficers name"/>
          <button onClick={handleButton}>Delete policeOfficer</button>
          <p>{info}</p>
        </form>
        <Link to={`/policeOfficer-update/${id}`}>
            <button>Update policeOfficer</button>
        </Link>
        <Link to={"/"}>
            <button>Home</button>
        </Link>
        </div>
    </>
  )
}
