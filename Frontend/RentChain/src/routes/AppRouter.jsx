import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";
import Listings from "../pages/Listings";
import Authentication from "../Auth/Authentication";
import ScrollToTop from "../components/ScrollToTop";
import DashboardType from "../components/ui/DashboardType";
import TenantDashboard from "../pages/TenantDashboard";
import LandLordDashboard from "../pages/LandLordDashboard";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<DashboardType />} />
        <Route element={<AppLayout />}>
          <Route path="/about" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/tenant dashboard" element={<TenantDashboard />} />
          <Route path="/landlord dashboard" element={<LandLordDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
