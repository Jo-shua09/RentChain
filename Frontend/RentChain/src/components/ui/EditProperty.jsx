import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FiHome, FiWifi, FiLayers, FiDroplet, FiUser, FiShield, FiWind, FiActivity, FiArrowUp } from "react-icons/fi";
import { FaParking } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Button, ButtonTwo } from "../common/Button";

const EditProperty = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize form with property data
  useEffect(() => {
    if (location.state) {
      // Transform the navigation state into our form data structure
      setFormData({
        title: location.state.title,
        location: location.state.location,
        country: location.state.country,
        price: location.state.price,
        duration: location.state.duration,
        bedrooms: location.state.bedrooms,
        bathrooms: location.state.bathrooms,
        type: location.state.type,
        image: location.state.image,
        listed_date: location.state.listed_date,
        amenities: location.state.amenities || [],
        map: location.state.map,
        description: location.state.description,
      });
    }
    setIsLoading(false);
  }, [id, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, name] : prev.amenities.filter((item) => item !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated property:", formData);
    // Here you would typically make an API call to update the property
    alert("Property updated successfully!");
    navigate("/dashboard/landlord-dashboard/my-properties");
  };

  if (isLoading) {
    return <div className="w-full section-page !py-52 text-center">Loading...</div>;
  }

  if (!formData) {
    return (
      <div className="w-full section-page !py-52 text-center">
        <p>No property data available</p>
        <button onClick={() => navigate("/dashboard/landlord-dashboard/my-properties")} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          Back to Properties
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 section-page !py-52">
      <div className=" lg:w-[70%] md:w-[85%] sm:w-[90%] w-full pt-20 mx-auto relative">
        <div
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 flex items-center cursor-pointer gap-x-6 hover:scale-95 hover:text-primary"
        >
          <IoArrowBackSharp className="text-4xl" />
          <span className="text-3xl font-medium">Back</span>
        </div>

        <div className="mb-10 space-y-4">
          <p className="text-3xl font-medium normal-case">
            Edit Property: <span className="text-secondary">{formData.title}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-7 bg-white rounded-xl">
          <div className="space-y-12">
            {/* Property Title */}
            <div>
              <label className="block mb-4 text-3xl font-medium">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Property Type */}
              <div>
                <label className="block mb-4 text-3xl font-medium">Property Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                  required
                />
              </div>

              {/* Monthly Rent */}
              <div>
                <label className="block mb-4 text-3xl font-medium">Monthly Rent (USD)</label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 text-[1.7rem]">$</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="block w-full h-[5rem] text-[1.7rem] pl-8 normal-case py-2 pr-12 border border-gray-300 rounded-md pl-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-4 text-3xl font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-4 text-3xl font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-4 text-3xl font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block w-full h-[15rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                rows={6}
                required
              />
            </div>

            {/* Amenities */}
            <div>
              <label className="block mb-4 text-3xl font-medium">Amenities</label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {/* Wi-Fi */}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Wi-Fi"
                    checked={formData.amenities.includes("Wi-Fi")}
                    onChange={handleAmenityChange}
                    className="w-8 h-8 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="flex items-center ml-2 text-2xl">
                    <FiWifi className="mr-1" /> Wi-Fi
                  </span>
                </label>

                {/* Parking */}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Parking"
                    checked={formData.amenities.includes("Parking")}
                    onChange={handleAmenityChange}
                    className="w-8 h-8 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="flex items-center ml-2 text-2xl">
                    <FaParking className="mr-1" /> Parking
                  </span>
                </label>

                {/* Security */}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Security"
                    checked={formData.amenities.includes("Security")}
                    onChange={handleAmenityChange}
                    className="w-8 h-8 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="flex items-center ml-2 text-2xl">
                    <FiShield className="mr-1" /> Security
                  </span>
                </label>

                {/* Add more amenities as needed */}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end mt-16 space-x-4">
              <button type="button">
                <ButtonTwo
                  name="cancel"
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </button>

              <button type="submit">
                <Button onClick={() => navigate("/dashboard/landlord-dashboard/my-properties")} name=" save changes" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;
