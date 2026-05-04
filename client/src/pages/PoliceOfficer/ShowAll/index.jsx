import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllPoliceOfficers } from "../../../models/PoliceOfficers"
import PoliceOfficerLink from "./PoliceOfficerLink";

export default function PoliceOfficerShowAll() {
   const [policeOfficers, setPoliceOfficers] = useState();
   const [isLoaded, setLoaded] = useState(false);

   const load = async () => {
      const data = await getAllPoliceOfficers()
      if (data.status === 500) return setLoaded(null)
      if (data.status === 200) {
         setPoliceOfficers(data.payload);
         setLoaded(true);
      }
   }   

   useEffect(() => {
      load();
   }, []);

   if (isLoaded === null) {
      return (
         <>
         <p>PoliceOfficers not found</p>
         </>
      )
   }

   if(!isLoaded) {
      return (
         <>
         <p>PoliceOfficers are loading....</p>
         </>
      )
   }

  return (
     <>
        <h1>Show all PoliceOfficers</h1>
        {
         policeOfficers.map((val, i) => {
            return (
               <PoliceOfficerLink key={i} {...val}/>
            )
         })
        }
        <Link to={"/"}>
            <button>Home</button>
        </Link>
     </>
    
  )
}
