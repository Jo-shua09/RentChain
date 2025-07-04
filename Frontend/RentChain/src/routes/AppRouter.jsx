import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

// Layouts
import AppLayout from "../layouts/AppLayout";

// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ConnectWallet from "../pages/ConnectWallet";
import DashboardType from "../components/ui/DashboardType";
import TenantDashboard from "../pages/TenantDashboard";
import LandLordDashboard from "../pages/LandLordDashboard";

// Nested under dashboards
import MyProperties from "../components/sections/Listings/MyProperties";
import Properties from "../components/sections/Listings/Properties";
import PropertyDetails from "../components/sections/Listings/PropertyDetails";
import Chat from "../components/ui/Chat";
import Payment from "../components/ui/Payment";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public entry point */}
        <Route path="/" element={<ConnectWallet />} />
        <Route path="/dashboard" element={<DashboardType />} />

        {/* Dashboard layout with nested routes */}
        <Route element={<AppLayout />}>
          {/* Dashboard nested */}
          <Route path="/dashboard/landlord-dashboard" element={<LandLordDashboard />} />
          <Route path="/dashboard/landlord-dashboard/chat" element={<Chat />} />
          <Route path="/dashboard/landlord-dashboard/my-properties" element={<MyProperties />} />
          <Route path="/dashboard/landlord-dashboard/properties/:title" element={<PropertyDetails />} />

          <Route path="/dashboard/tenant-dashboard" element={<TenantDashboard />} />
          <Route path="/dashboard/tenant-dashboard/chat" element={<Chat />} />
          <Route path="/dashboard/tenant-dashboard/payment" element={<Payment />} />
          <Route path="/dashboard/tenant-dashboard/properties" element={<Properties />} />
          <Route path="/dashboard/tenant-dashboard/properties/:title" element={<PropertyDetails />} />

          {/* Global pages */}
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
