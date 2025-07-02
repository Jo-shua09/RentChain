import { HiOfficeBuilding, HiOutlineUserCircle } from "react-icons/hi";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardType() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full min-h-screen section-page bg-gradient-to-br from-blue-50 to-green-50">
      <div
        onClick={() => navigate(-1)}
        className="absolute flex items-center cursor-pointer gap-x-6 top-10 left-10 hover:scale-95 hover:text-primary"
      >
        <IoArrowBackSharp className="text-4xl" />
        <span className="text-3xl font-medium">Back</span>
      </div>

      <div className="w-full px-6 py-12 mx-auto bg-white shadow-xl max-w-7xl rounded-2xl">
        <div className="space-y-4 text-center">
          <h3 className="text-5xl font-bold text-gray-800">Choose Your Path</h3>
          <p className="text-3xl normal-case text-secondary">Let us know who you are so we can tailor your experience.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          {/* Landlord Option */}
          <Link to="/landlord dashboard">
            <div className="p-6 bg-white border border-gray-200 cursor-pointer group rounded-xl hover:shadow-xl hover:scale-95">
              <div className="flex flex-col items-center space-y-8 text-center">
                <HiOfficeBuilding className="p-3 text-6xl text-white rounded-full bg-primary" />
                <h4 className="text-3xl font-semibold normal-case text-primary">I am a Landlord</h4>
                <p className="mb-8 text-2xl text-gray-600 normal-case">
                  List your properties, manage tenants, and receive payments securely via RentChain’s decentralized system. Enjoy escrow,
                  transparency, and full control.
                </p>
                <button className="px-6 py-4 text-[1.7rem] font-medium text-white rounded-xl bg-primary hover:opacity-90">
                  Continue as Landlord
                </button>
              </div>
            </div>
          </Link>

          {/* Tenant Option */}
          <Link to="/tenant dashboard">
            <div className="p-6 bg-white border border-gray-200 cursor-pointer group rounded-xl hover:shadow-xl hover:scale-95">
              <div className="flex flex-col items-center space-y-8 text-center">
                <HiOutlineUserCircle className="p-3 text-6xl text-white rounded-full bg-primary" />
                <h4 className="text-3xl font-semibold normal-case text-primary">I am a Tenant</h4>
                <p className="mb-8 text-2xl text-gray-600 normal-case">
                  Discover verified rental listings, communicate directly with landlords, and build your on-chain rental credit score using
                  RentChain’s secure platform.
                </p>
                <button className="px-6 py-4 text-[1.7rem] font-medium text-white rounded-xl bg-primary hover:opacity-90">Continue as Tenant</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
