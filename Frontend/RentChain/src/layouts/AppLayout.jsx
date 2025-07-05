import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AppLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen m-auto max-w-[185rem]">
      {isLoading && <Loader />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
