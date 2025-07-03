import { FaDollarSign, FaRegBuilding } from "react-icons/fa";
import { IoCalendarOutline, IoStarOutline, IoWarningOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { GoPeople } from "react-icons/go";

export default function DashboardShowCase() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full section-page">
      {pathname == "/landlord%20dashboard" ? (
        <div className="grid justify-between w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">total properties</h4>
              <FaRegBuilding className="text-3xl text-primary" />
            </div>
            <h3 className="text-6xl font-semibold">12</h3>
            <p className="text-2xl font-normal normal-case text-secondary">+2 this month</p>
          </div>

          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary"> yearly revenue</h4>
              <FaDollarSign className="text-3xl text-green-500" />
            </div>
            <h3 className="text-6xl font-semibold">$24,500</h3>
            <p className="text-2xl font-normal normal-case text-secondary">+12% from last year</p>
          </div>
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">active tenants</h4>
              <GoPeople className="text-3xl text-purple" />
            </div>
            <h3 className="text-6xl font-semibold">18</h3>
            <p className="text-2xl font-normal normal-case text-secondary">+3 new tenants </p>
          </div>
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">pending issues</h4>
              <IoWarningOutline className="text-3xl text-red-500" />
            </div>
            <h3 className="text-6xl font-semibold">3</h3>
            <p className="text-2xl font-normal normal-case text-secondary">-2 from last week</p>
          </div>
        </div>
      ) : (
        <div className="grid justify-between w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">current rent</h4>
              <FaDollarSign className="text-3xl text-green-500" />
            </div>
            <h3 className="text-6xl font-semibold">$1,200</h3>
            <p className="text-2xl font-normal normal-case text-secondary">Due July 15th</p>
          </div>

          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">credit score</h4>
              <IoStarOutline className="text-3xl text-purple-500" />
            </div>
            <h3 className="text-6xl font-semibold">850</h3>
            <p className="text-2xl font-normal normal-case text-secondary">Excellent rating</p>
          </div>
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">open requests</h4>
              <IoWarningOutline className="text-3xl text-red-500" />
            </div>
            <h3 className="text-6xl font-semibold">12</h3>
            <p className="text-2xl font-normal normal-case text-secondary">1 maintenance, 1 inquiry </p>
          </div>
          <div className="w-full p-8 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
            <div className="flex items-center justify-between">
              <h4 className="text-[1.7rem] font-medium text-secondary">day left</h4>
              <IoCalendarOutline className="text-3xl text-primary" />
            </div>
            <h3 className="text-6xl font-semibold">5</h3>
            <p className="text-2xl font-normal normal-case text-secondary">Until next payment</p>
          </div>
        </div>
      )}
    </div>
  );
}
