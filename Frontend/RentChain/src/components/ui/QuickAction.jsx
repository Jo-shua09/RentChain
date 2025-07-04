import { CiStar, CiWallet } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { GoPeople, GoTools } from "react-icons/go";
import { IoAdd, IoChatboxOutline, IoHomeOutline, IoWarningOutline } from "react-icons/io5";
import { LuNotebook } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

export default function QuickAction() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full p-12 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
        <span className="text-5xl font-semibold">quick actions</span>

        {pathname == "/dashboard/landlord-dashboard" ? (
          <div className="w-full !mt-16 space-y-8">
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <IoAdd className="text-4xl" />
              <span className="text-3xl font-medium"> add new property</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <IoHomeOutline className="text-4xl" />
              <span className="text-3xl font-medium"> view all properties</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <FaDollarSign className="text-4xl" />
              <span className="text-3xl font-medium">Payment history</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <GoPeople className="text-4xl" />
              <span className="text-3xl font-medium"> tenant management</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <IoWarningOutline className="text-4xl" />
              <span className="text-3xl font-medium">maintenance requests</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <LuNotebook className="text-4xl" />
              <span className="text-3xl font-medium">generate reports</span>
            </div>
          </div>
        ) : (
          <div className="w-full !mt-16 space-y-8">
            <Link to="/dashboard/tenant-dashboard/my-properties">
              <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
                <CiWallet className="text-4xl" />
                <span className="text-3xl font-medium"> owned properties</span>
              </div>
            </Link>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <GoTools className="text-4xl" />
              <span className="text-3xl font-medium"> submit maintenance request</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <IoHomeOutline className="text-4xl" />
              <span className="text-3xl font-medium">view lease agreement</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <IoChatboxOutline className="text-4xl" />
              <span className="text-3xl font-medium">contact landlord</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <FaDollarSign className="text-4xl" />
              <span className="text-3xl font-medium">payment history</span>
            </div>
            <div className="flex items-center w-full border border-gray-200 cursor-pointer hover:scale-95 gap-x-10 p-7 rounded-xl">
              <CiStar className="text-4xl" />
              <span className="text-3xl font-medium">check credit score</span>
            </div>
          </div>
        )}
      </div>
      {pathname !== "/dashboard/landlord-dashboard" && (
        <div className="w-full p-12 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
          <span className="text-5xl font-semibold">upcoming payments</span>
          <div className="w-full !mt-16 space-y-8">
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="space-y-4">
                <p className="text-[1.7rem] font-normal text-secondary normal-case">Monthly Rent - July 2024</p>
                <h4 className="text-4xl font-medium">$1,200</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-gray-300 rounded-full">upcoming</div>
                <p className="text-3xl font-normal normal-case text-secondary"> July 15, 2024</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="space-y-4">
                <p className="text-[1.7rem] font-normal text-secondary normal-case">Utilities - June 2024</p>
                <h4 className="text-4xl font-medium">$85</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-red-500 rounded-full">overdue</div>
                <p className="text-3xl font-normal normal-case text-secondary">July 10, 2024</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
