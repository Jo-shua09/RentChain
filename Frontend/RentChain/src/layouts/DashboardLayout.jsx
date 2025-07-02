import DashboardHeader from "../components/sections/Dashboards/DashboardHeader";
import DashboardNavigation from "../components/sections/Dashboards/DashboardNavigation";

export default function DashboardLayout() {
  return (
    <div className="w-full h-full bg-gray-100 py-52">
      <DashboardHeader />
      <DashboardNavigation />
    </div>
  );
}
