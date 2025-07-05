import { IoLocationOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, ButtonTwo } from "../common/Button";
import { FaRegEdit } from "react-icons/fa";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    const basePath = pathName.includes("tenant-dashboard")
      ? "/dashboard/tenant-dashboard/properties/property-details"
      : "/dashboard/landlord-dashboard/my-properties";

    navigate(`${basePath}/${property.title}`, {
      state: {
        title: property.title,
        location: property.location,
        country: property.country,
        price: property.price,
        duration: property.duration,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        type: property.type,
        image: property.image,
        listed_date: property.listed_date,
        amenities: property.amenities,
        map: property.map,
        description: property.description,
      },
    });
  };

  const handleEditProperty = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    const basePath = pathName.includes("landlord-dashboard")
      ? "/dashboard/landlord-dashboard/my-properties"
      : "/dashboard/tenant-dashboard/properties";

    navigate(`${basePath}/edit/${property.id}`, {
      state: {
        title: property.title,
        location: property.location,
        country: property.country,
        price: property.price,
        duration: property.duration,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        type: property.type,
        image: property.image,
        listed_date: property.listed_date,
        amenities: property.amenities,
        map: property.map,
        description: property.description,
      },
    });
  };

  return (
    <div className={`bg-white border p-7 border-gray-200 shadow-sm group rounded-xl hover:shadow-md`}>
      <div className="relative w-full">
        <span className="absolute px-4 py-2 text-2xl font-medium text-white rounded-full top-5 left-5 bg-primary/80">{property.type}</span>
        <img src={property.image} alt={property.title} className="object-cover w-full h-[30rem] mb-4 rounded-md" />
      </div>

      <div className="flex flex-col justify-between w-full gap-10">
        <div className="w-full">
          <h3 className="mb-2 text-3xl font-semibold">{property.title}</h3>
          <p className="mt-4 text-[1.7rem] text-gray-500 flex items-center gap-x-2">
            <IoLocationOutline className="text-4xl" />
            {property.location}, {property.country}
          </p>
          <p className="py-6 text-5xl font-bold text-primary">
            ${property.price.toLocaleString()}
            <span className="text-2xl normal-case text-secondary">/{property.duration}</span>
          </p>
          <p className="mt-2 text-2xl text-secondary">
            {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
          </p>
        </div>

        {pathName === "/dashboard/tenant-dashboard/properties" ? (
          property.available ? (
            <Button name="View Details" className="flex justify-center w-full mt-10" onClick={() => handleClick(property)} />
          ) : (
            <p className="mt-16 text-3xl font-semibold text-center normal-case text-secondary">Property not available</p>
          )
        ) : (
          <ButtonTwo
            name="edit property"
            onClick={handleEditProperty}
            icon={<FaRegEdit className="text-4xl" />}
            className="flex justify-center w-full mt-10 border border-gray-300"
          />
        )}
      </div>
    </div>
  );
}
