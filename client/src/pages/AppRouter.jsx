import { BrowserRouter, Route, Routes } from "react-router-dom"
import SiteLayout from "../components/SiteLayout"
import AboutPage from "./About"
import ApplicationPage from "./Application"
import ContactPage from "./Contact"
import GalleryPage from "./Gallery"
import NewsPage from "./News"
import PricingPage from "./Pricing"
import ServiceDetailPage from "./ServiceDetail"
import ServicesPage from "./Services"
import UvodPage from "./Uvod"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<UvodPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/sluzby/:slug" element={<ServiceDetailPage />} />
          <Route path="/fotografie" element={<GalleryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/cenik" element={<PricingPage />} />
          <Route path="/prihlaska" element={<ApplicationPage />} />
          <Route path="/novinky" element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
