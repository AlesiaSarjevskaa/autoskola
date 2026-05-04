import { Link, useNavigate } from "react-router-dom"
import { use, useState } from "react";
import { createPoliceOfficer } from "../../../models/PoliceOfficers";

export default function PoliceOfficerCreate() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const data = await createPoliceOfficer(formData);
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
        <h1>PoliceOfficer Create</h1>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
            <input type="number" name="badge" placeholder="Enter badge" onChange={e => handleInput(e)}/>
            <input type="text" name="rank" placeholder="Enter rank" onChange={e => handleInput(e)}/>
            <input type="text" name="department" placeholder="Enter department" onChange={e => handleInput(e)}/>
            <input type="text" name="unit" placeholder="Enter unit" onChange={e => handleInput(e)}/>
            <input type="text" name="gender" placeholder="Enter gender" onChange={e => handleInput(e)}/>
            <input type="text" name="nationality" placeholder="Enter nationality" onChange={e => handleInput(e)}/>
            <input type="text" name="address" placeholder="Enter address" onChange={e => handleInput(e)}/>
            <input type="number" name="phone" placeholder="Enter phone" onChange={e => handleInput(e)}/>
            <input type="text" name="email" placeholder="Enter email" onChange={e => handleInput(e)}/>
            <input type="text" name="education" placeholder="Enter education" onChange={e => handleInput(e)}/>
            <input type="text" name="city" placeholder="Enter city" onChange={e => handleInput(e)}/>
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
