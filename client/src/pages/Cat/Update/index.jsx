import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { updateCat, getCat } from "../../../models/Cats"

export default function CatUpdate() {
  const { id } = useParams();
  const [cat, setCat] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState()
  const [info, setInfo] = useState()
  const navigate = useNavigate();

const load = async() => {
  const data = await getCat(id);
  if (data.status === 500) return setLoaded(null)
  if (data.status === 200) {
    setCat(data.payload);
    setLoaded(true);
  }
}

useEffect(() => {
  load();
}, []);

const update = async() => {
  const data = await updateCat(id, formData);
  if (data.status === 200) return navigate(`/cat/${id}`)
  return setInfo("Cat was not updated")
}; 

const handleInput = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

if (isLoaded === null) {
  return (
    <>
    <p>Cat not found</p>
    </>
  )
}

if (!isLoaded) {
  return (
    <>
    <p>Cat is loading....</p>
    </>
  )
}

const handleButton = (e) => {
  e.preventDefault();
  update();
};

  return (
    <>
        <h1>Cat Update</h1>
        <form>
            <input defaultValue={cat.name} type="text" name="name" placeholder="Enter name" onChange={e => handleInput(e)}/>
            <input defaultValue={cat.color} type="text" name="color" placeholder="Enter color" onChange={e => handleInput(e)}/>
            <input defaultValue={cat.age} type="number" name="age" placeholder="Enter age" onChange={e => handleInput(e)}/>
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
