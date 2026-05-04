import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { updatePoliceOfficer, getPoliceOfficer } from "../../../models/PoliceOfficers"

export default function PoliceOfficerUpdate() {
  const { id } = useParams();
  const [policeOfficer, setPoliceOfficer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate();

const load = async() => {
  const data = await getPoliceOfficer(id);
  if (data.status === 500) return setLoaded(null)
  if (data.status === 200) {
    setPoliceOfficer(data.payload);
    setLoaded(true);
  }
}

useEffect(() => {
  load();
}, []);

const update = async() => {
  const data = await updatePoliceOfficer(id, formData);
  if (data.status === 200) return navigate(`/policeOfficer/${id}`)
  return setInfo("PoliceOfficer was not updated")
}; 

const handleInput = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

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
    <p>PoliceOfficer is loading....</p>
    </>
  )
}

const handleButton = (e) => {
  e.preventDefault();
  update();
};

  return (
    <>
        <h1>PoliceOfficer Update</h1>
        <form>
        <div class="form-row">
            <p>Name</p>
            <input defaultValue={policeOfficer.name} type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Badge</p>
            <input defaultValue={policeOfficer.badge} type="number" name="badge" placeholder="Enter badge" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Rank</p>
            <input defaultValue={policeOfficer.rank} type="text" name="rank" placeholder="Enter rank" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Department</p>
            <input defaultValue={policeOfficer.department} type="text" name="department" placeholder="Enter department" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Unit</p>
            <input defaultValue={policeOfficer.unit} type="text" name="unit" placeholder="Enter unit" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Gender</p>
            <input defaultValue={policeOfficer.gender} type="text" name="gender" placeholder="Enter gender" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Nationality</p>
            <input defaultValue={policeOfficer.nationality} type="text" name="nationality" placeholder="Enter nationality" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Address</p>
            <input defaultValue={policeOfficer.address} type="text" name="address" placeholder="Enter address" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Phone</p>
            <input defaultValue={policeOfficer.phone} type="number" name="phone" placeholder="Enter phone" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Email</p>
            <input defaultValue={policeOfficer.email} type="text" name="email" placeholder="Enter email" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>Education</p>
            <input defaultValue={policeOfficer.education} type="text" name="education" placeholder="Enter education" onChange={e => handleInput(e)}/>
        </div>
        <div class="form-row">
            <p>City</p>
            <input defaultValue={policeOfficer.city} type="text" name="city" placeholder="Enter city" onChange={e => handleInput(e)}/>
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
