import { CiHome } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoChatbubbleOutline, IoHomeOutline, IoWarningOutline } from "react-icons/io5";

export default function DashboardNavigation() {
  return (
    <div>
      <div className="w-full !py-20 section-page">
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex items-center w-full bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 p-14 gap-x-8 rounded-xl">
            <IoHomeOutline className="w-20 h-20 p-2 bg-gray-50 rounded-xl text-primary" />
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold ">browse properties</h3>
              <p className="text-3xl font-medium normal-case">Find your next rental</p>
            </div>
          </div>
          <div className="flex items-center w-full bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 p-14 gap-x-8 rounded-xl">
            <FaMoneyBill className="w-20 h-20 p-2 text-green-500 bg-gray-50 rounded-xl" />
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold ">pay rent</h3>
              <p className="text-3xl font-medium normal-case"> Make a payment</p>
            </div>
          </div>
          <div className="flex items-center w-full bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 p-14 gap-x-8 rounded-xl">
            <IoWarningOutline className="w-20 h-20 p-2 text-red-500 bg-gray-50 rounded-xl" />
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold ">file complaint</h3>
              <p className="text-3xl font-medium normal-case"> Report maintenance issues </p>
            </div>
          </div>
          <div className="flex items-center w-full bg-white shadow-lg cursor-pointer md:flex-1 hover:scale-95 p-14 gap-x-8 rounded-xl">
            <IoChatbubbleOutline className="w-20 h-20 p-2 text-purple-500 bg-gray-50 rounded-xl" />
            <div className="space-y-2">
              <h3 className="text-4xl font-semibold ">chat support </h3>
              <p className="text-3xl font-medium normal-case"> Get help and support </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
