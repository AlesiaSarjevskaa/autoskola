import { Link } from "react-router-dom"

export default function PoliceStationLink(props) {
  return (
    <>
    <Link to={`/policeStation/${props._id}`}>
    <p>{props.name}</p>
    </Link>
    </>
  )
}
