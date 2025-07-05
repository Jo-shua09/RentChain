import { IoChatboxOutline, IoLocationOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, ButtonThree, ButtonTwo } from "../../common/Button";
import { CiWallet } from "react-icons/ci";
import { useEffect } from "react";

export default function PropertyDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Destructure all needed properties from state
  const { title, location, country, price, duration, bedrooms, bathrooms, description, type, image, listed_date, amenities, map } = state || {};

  useEffect(() => {
    if (!state) {
      navigate("/dashboard/tenant-dashboard/properties");
    }
  }, [state, navigate]);

  if (!state) {
    return (
      <div className="w-full section-page !py-52">
        <div className="p-7 text-3xl text-center text-red-500 normal-case">Property details not found.</div>
      </div>
    );
  }

  const handleContactLandlord = () => {
    navigate(`/dashboard/tenant-dashboard/chat`, {
      state: {
        title,
        propertyId: id,
        propertyImage: image,
      },
    });
  };

  const handlePayRent = () => {
    navigate(`/dashboard/tenant-dashboard/properties/payment`, {
      state: {
        title,
        price,
        propertyId: id,
        propertyImage: image,
      },
    });
  };

  return (
    <div className="w-full section-page bg-gray-50 flex items-start md:flex-nowrap flex-wrap gap-10 justify-between gap-x-10 !py-52">
      <div className="md:flex-[4]">
        <div className="w-full rounded-xl">
          <img src={image} alt={title} className="object-cover w-full h-[40rem] rounded-xl mb-10" />
        </div>

        <div className="p-7 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="space-y-5 w-full">
              <h1 className="text-6xl font-bold">{title}</h1>
              <p className="flex gap-x-5 mb-2 text-4xl font-medium text-secondary">
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

          <hr className="my-10 w-full h-px bg-secondary" />

          <div className="space-y-5">
            <h3 className="text-4xl font-semibold">description</h3>
            <p className="mb-6 text-[1.7rem] text-secondary normal-case font-medium">{description}</p>
          </div>

          <hr className="my-10 w-full h-px bg-secondary" />

          <div className="space-y-5">
            <h3 className="mb-10 text-4xl font-semibold">Amenities</h3>
            <ul className="flex flex-wrap gap-6 mb-6">
              {amenities?.map((item, idx) => (
                <li key={idx} className="px-4 py-1 text-3xl font-medium bg-gray-300 rounded-xl text-secondary">
                  {item}
                </li>
              ))}
            </ul>
            <p className="!float-right mt-6 text-xl py-10 text-gray-400">Listed on: {new Date(listed_date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 items-center mt-14 w-full sm:flex-nowrap">
          <button onClick={handleContactLandlord} className="w-full">
            <Button name="contact landlord" className="flex justify-center w-full" icon={<IoChatboxOutline className="text-4xl" />} />
          </button>
          <button onClick={handlePayRent} className="w-full">
            <ButtonTwo name="pay rent" className="flex justify-center w-full border border-gray-300" icon={<CiWallet className="text-4xl" />} />
          </button>
        </div>
      </div>

      <div className="md:flex-[2] space-y-8">
        <div className="p-12 space-y-7 w-full bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex gap-x-5 items-center">
            <IoLocationOutline className="text-4xl" />
            <span className="text-5xl font-semibold">location</span>
          </div>

          <div className="space-y-10">
            <div className="mt-16 w-full bg-gray-100 rounded-xl">
              <ButtonThree
                onClick={() => map && window.open(map, "_blank")}
                className="flex justify-center w-full hover:!bg-primary transition-colors duration-200 hover:!text-white !border-none !text-primary"
                name="get directions"
              />
            </div>
          </div>
        </div>

        <div className="p-12 space-y-7 w-full bg-white rounded-xl border border-gray-200 shadow-sm">
          <span className="text-5xl font-semibold">landlord information</span>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-medium text-secondary">address</h3>
            <span className="text-2xl italic font-normal normal-case">address</span>
          </div>
        </div>
      </div>
    </div>
  );
}
