import { FaMoneyBill } from "react-icons/fa";
import { IoChatbubbleOutline, IoHomeOutline, IoWarningOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function DashboardNavigation() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div>
      <div className="w-full !py-20 section-page">
        {pathname == "/landlord%20dashboard" ? (
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoHomeOutline className="w-20 h-20 p-2 bg-gray-50 rounded-xl text-primary" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">my properties</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <FaMoneyBill className="w-20 h-20 p-2 text-green-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold "> payments</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoWarningOutline className="w-20 h-20 p-2 text-red-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold "> complaints</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoChatbubbleOutline className="w-20 h-20 p-2 text-purple-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">chats </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoHomeOutline className="w-20 h-20 p-2 bg-gray-50 rounded-xl text-primary" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">browse properties</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <FaMoneyBill className="w-20 h-20 p-2 text-green-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">pay rent</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoWarningOutline className="w-20 h-20 p-2 text-red-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">file complaint</h3>
              </div>
            </div>
            <div className="flex items-center w-full p-8 bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 gap-x-8 rounded-xl">
              <IoChatbubbleOutline className="w-20 h-20 p-2 text-purple-500 bg-gray-50 rounded-xl" />
              <div className="space-y-2">
                <h3 className="text-4xl font-semibold ">chat support </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
