import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CatCreate from "./Cat/Create"
import CatShowAll from "./Cat/ShowAll"
import CatShowOne from "./Cat/ShowOne"
import CatUpdate from "./Cat/Update"
import PoliceOfficerCreate from "./PoliceOfficer/Create"
import PoliceOfficerShowAll from "./PoliceOfficer/ShowAll"
import PoliceOfficerShowOne from "./PoliceOfficer/ShowOne"
import PoliceOfficerUpdate from "./PoliceOfficer/Update"
import PoliceStationCreate from "./PoliceStation/Create"
import PoliceStationShowAll from "./PoliceStation/ShowAll"
import PoliceStationShowOne from "./PoliceStation/ShowOne"
import PoliceStationUpdate from "./PoliceStation/Update"




export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cat-create" element={<CatCreate/>}/>
                <Route path="/cat-update/:id" element={<CatUpdate/>}/>
                <Route path="/cat/:id" element={<CatShowOne/>}/>
                <Route path="/cats" element={<CatShowAll/>}/>
                <Route path="/policeOfficer-create" element={<PoliceOfficerCreate/>}/>
                <Route path="/policeOfficer-update/:id" element={<PoliceOfficerUpdate/>}/>
                <Route path="/policeOfficer/:id" element={<PoliceOfficerShowOne/>}/>
                <Route path="/policeOfficers" element={<PoliceOfficerShowAll/>}/>
                <Route path="/policeStation-create" element={<PoliceStationCreate/>}/>
                <Route path="/policeStation-update/:id" element={<PoliceStationUpdate/>}/>
                <Route path="/policeStation/:id" element={<PoliceStationShowOne/>}/>
                <Route path="/policeStations" element={<PoliceStationShowAll/>}/>
                
        </Routes>
    </BrowserRouter>
  )
}
