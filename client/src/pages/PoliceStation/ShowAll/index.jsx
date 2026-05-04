import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllPoliceStations } from "../../../models/PoliceStations"
import PoliceStationLink from "./PoliceStationLink";

export default function PoliceStationShowAll() {
   const [policeStations, setPoliceStations] = useState();
   const [isLoaded, setLoaded] = useState(false);

   const load = async () => {
      const data = await getAllPoliceStations()
      if (data.status === 500) return setLoaded(null)
      if (data.status === 200) {
         setPoliceStations(data.payload);
         setLoaded(true);
      }
   }   

   useEffect(() => {
      load();
   }, []);

   if (isLoaded === null) {
      return (
         <>
         <p>PoliceStations not found</p>
         </>
      )
   }

   if(!isLoaded) {
      return (
         <>
         <p>PoliceStations are loading....</p>
         </>
      )
   }

  return (
     <>
        <h1>Show all PoliceStations</h1>
        {
         policeStations.map((val, i) => {
            return (
               <PoliceStationLink key={i} {...val}/>
            )
         })
        }
        <Link to={"/"}>
            <button>Home</button>
        </Link>
     </>
    
  )
}
