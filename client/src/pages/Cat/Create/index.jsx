import { Link, useNavigate } from "react-router-dom"
import { use, useState } from "react";
import { createCat } from "../../../models/Cats";

export default function CatCreate() {
    const [formData, setFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const data = await createCat(formData);
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
        <h1>Cat Create</h1>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
            <input type="text" name="color" placeholder="Enter color" onChange={e => handleInput(e)}/>
            <input type="number" name="age" placeholder="Enter age" onChange={e => handleInput(e)}/>
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
