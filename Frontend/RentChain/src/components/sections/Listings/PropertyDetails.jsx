import { IoChatboxOutline, IoLocationOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, ButtonThree, ButtonTwo } from "../../common/Button";
import { CiWallet } from "react-icons/ci";

export default function PropertyDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title, location, country, price, bedrooms, duration, bathrooms, description, type, image, listed_date, amenities, map } = state || {};

  if (!state) {
    return <div className="p-10 text-3xl text-center text-red-500 normal-case">Property details not found.</div>;
  }

  const handleContactLandlord = () => {
    navigate("/dashboard/tenant-dashboard/chat", { state: { title } });
  };

  return (
    <div className="w-full section-page bg-gray-50 flex items-start md:flex-nowrap flex-wrap gap-10 justify-between gap-x-10 !py-52">
      <div className="md:flex-[4]">
        <div className="w-full rounded-xl">
          <img src={image} alt={title} className="object-cover w-full h-[40rem] rounded-xl mb-10" />
        </div>

        <div className="p-10 bg-white shadow-sm rounded-xl">
          <div className="flex items-start justify-between">
            <div className="w-full space-y-5">
              <h1 className="text-6xl font-bold">{title}</h1>
              <p className="flex mb-2 text-4xl font-medium text-secondary gap-x-5">
                <IoLocationOutline className="text-4xl" /> {location} {country}
              </p>
              <p className="text-3xl text-secondary">
                {bedrooms} bedrooms · {bathrooms} bedrooms
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-5xl font-bold text-primary">
                ${price.toLocaleString()}
                <span className="text-2xl normal-case text-secondary">/{duration}</span>
              </p>
              <h4 className="flex items-center justify-center px-5 py-2 text-2xl font-semibold text-center text-white rounded-full w-fit bg-primary/80 !float-right">
                {type}
              </h4>
            </div>
          </div>

          <hr className="w-full h-px my-10 bg-secondary" />

          <div className="space-y-5">
            <h3 className="text-4xl font-semibold">description</h3>
            <p className="mb-6 text-[1.7rem] text-secondary normal-case font-medium">{description}</p>
          </div>

          <hr className="w-full h-px my-10 bg-secondary" />

          <div className="space-y-5">
            <h3 className="mb-10 text-4xl font-semibold">Amenities</h3>
            <ul className="flex flex-wrap gap-6 mb-6 ">
              {amenities?.map((item, idx) => (
                <li key={idx} className="px-4 py-1 text-3xl font-medium bg-gray-300 text-secondary rounded-xl">
                  {item}
                </li>
              ))}
            </ul>
            <p className="!float-right mt-6 text-xl py-10 text-gray-400">Listed on: {new Date(listed_date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center w-full gap-10 mt-14 sm:flex-nowrap">
          <Link to="/dashboard/tenant-dashboard/chat" className="w-full">
            <Button
              onClick={handleContactLandlord}
              name="contact landlord"
              className="flex justify-center w-full"
              icon={<IoChatboxOutline className="text-4xl" />}
            />
          </Link>
          <Link to="/dashboard/tenant-dashboard/payment" className="w-full">
            <ButtonTwo name="pay rent" className="flex justify-center w-full border border-gray-300" icon={<CiWallet className="text-4xl" />} />
          </Link>
        </div>
      </div>

      <div className="md:flex-[2] space-y-8">
        <div className="w-full p-12 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
          <div className="flex items-center gap-x-5">
            <IoLocationOutline className="text-4xl" />
            <span className="text-5xl font-semibold">location</span>
          </div>

          <div className="space-y-10">
            <div className="w-full mt-16 bg-gray-100 rounded-xl">
              <ButtonThree
                onClick={() => map && window.open(map, "_blank")}
                className="flex justify-center w-full hover:!bg-primary transition-colors duration-200 hover:!text-white !border-none !text-primary"
                name="get directions"
              />
            </div>
          </div>
        </div>

        <div className="w-full p-12 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
          <span className="text-5xl font-semibold">landlord information</span>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-medium text-secondary">address</h3>
            <span className="text-2xl italic font-normal normal-case">address</span>
          </div>
        </div>
      </div>
    </div>
  );
}
