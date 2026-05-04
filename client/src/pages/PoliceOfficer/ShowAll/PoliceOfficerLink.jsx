import { Link } from "react-router-dom"

export default function PoliceOfficerLink(props) {
  return (
    <>
    <Link to={`/policeOfficer/${props._id}`}>
    <p>{props.name}</p>
    </Link>
    </>
  )
}
