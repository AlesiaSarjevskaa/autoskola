import { Link, useNavigate, useParams } from "react-router-dom"
import { getCat, deleteCat } from "../../../models/Cats"
import { useEffect, useState } from "react"

export default function CatShowOne() {
  const {id} = useParams();
  const [cat, setCat] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCat(id);
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCat(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  const handleButton = async(e) => {
    e.preventDefault();
    if (formData === cat.name) {
      const data = await deleteCat(id);
      if (data.status === 200) return navigate("/")
      return setInfo("Cat was not deleted");
    }
    return setInfo("Wrong name!")
  }

  useEffect(() => {
    load();
  }, []);

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
      <p>Cat is loading...</p>
      </>
    )
  }

  return (
    <>
        <h1>Show one Cat</h1>
        <h2>{cat._id}</h2>
        <h2>{cat.name}</h2>
        <p>{cat.color}</p>
        <p>{cat.age}</p>
        <form>
          <input onChange={handleChange} type="text" placeholder="Enter cats name"/>
          <button onClick={handleButton}>Delete cat</button>
          <p>{info}</p>
        </form>
        <Link to={`/cat-update/${id}`}>
            <button>Update cat</button>
        </Link>
        <Link to={"/"}>
            <button>Home</button>
        </Link>
    </>
  )
}
