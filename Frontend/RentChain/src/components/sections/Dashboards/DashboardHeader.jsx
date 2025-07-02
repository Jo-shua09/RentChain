import { useLocation } from "react-router-dom";
import User from "../../ui/User";

export default function DashboardHeader() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="w-full section-page">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <h2 className="text-5xl font-semibold">Dashboard</h2>
          {pathName == "/landlord dashboard" ? (
            <p className="text-3xl font-medium normal-case text-secondary">List properties, handle rent, and stay in control</p>
          ) : (
            <p className="text-3xl font-medium normal-case text-secondary">Find rentals, pay securely, and build your credit</p>
          )}
        </div>
        <div className="">
          <User />
        </div>
      </div>
    </div>
  );
}
