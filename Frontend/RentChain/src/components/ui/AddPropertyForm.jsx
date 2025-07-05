import { useState } from "react";
import { FiUpload, FiHome, FiWifi, FiLayers, FiDroplet, FiUser, FiShield, FiWind, FiActivity, FiArrowUp } from "react-icons/fi";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaParking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, ButtonTwo } from "../common/Button";

export default function AddPropertyForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    propertyType: "",
    monthlyRent: "",
    location: "",
    description: "",
    amenities: {
      wifi: false,
      furnished: false,
      pool: false,
      parking: false,
      petFriendly: false,
      security: false,
      airConditioning: false,
      gym: false,
      elevator: false,
      balcony: false,
    },
    photos: [],
  });

  const propertyTypes = ["Apartment", "House", "Condo", "Townhouse", "Villa", "Studio", "Duplex"];

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
      amenities: {
        ...prev.amenities,
        [name]: checked,
      },
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      photos: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property submitted:", formData);
    alert("Property listed successfully!");
  };

  return (
    <div className="w-full bg-gray-50 section-page !py-52">
      <div className=" lg:w-[70%] md:w-[85%] sm:w-[90%] w-full pt-20 mx-auto relative">
        <div
          onClick={() => navigate(-1)}
          className="flex absolute top-0 left-0 gap-x-6 items-center cursor-pointer hover:scale-95 hover:text-primary"
        >
          <IoArrowBackSharp className="text-4xl" />
          <span className="text-3xl font-medium">Back</span>
        </div>

        <div className="my-10 space-y-4">
          <h3 className="flex gap-x-5 text-6xl font-semibold">add new property</h3>
          <p className="text-3xl font-medium normal-case">List your property for rent</p>
        </div>

        <div className="p-7 mx-auto w-full bg-white rounded-xl shadow-sm">
          <h1 className="flex items-center mb-6 text-4xl font-bold">Property Details</h1>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="space-y-12">
              {/* Property Title */}
              <div>
                <label className="block mb-4 text-3xl font-medium">Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Modern 2BR House in Lagos"
                  className="block w-full h-[5rem] px-3 py-2 mt-1 text-3xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[1.7rem] normal-case"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Property Type */}
                <div>
                  <label className="block mb-4 text-3xl font-medium">Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="block w-full h-[5rem] py-2 pl-3 pr-10 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[1.7rem] normal-case"
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Monthly Rent */}
                <div>
                  <label className="block mb-4 text-3xl font-medium">Monthly Rent (USD)</label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <span className=" text-[1.7rem] normal-case">$</span>
                    </div>
                    <input
                      type="number"
                      name="monthlyRent"
                      value={formData.monthlyRent}
                      onChange={handleChange}
                      className="block w-full py-2 pr-12 border h-[5rem] border-gray-300 rounded-md pl-7 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[1.7rem] normal-case"
                      placeholder="1200"
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
                  placeholder="City, Address"
                  className="block w-full px-3 py-2 mt-1 border h-[5rem] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[1.7rem] normal-case"
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
                  placeholder="Describe your property..."
                  className="block w-full px-3 py-2 mt-1 border h-[15rem] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-[1.7rem] normal-case"
                  rows={4}
                  required
                />
              </div>

              {/* Amenities */}
              <div>
                <label className="block mb-2 text-3xl font-medium">Amenities</label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {/* Column 1 */}
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="wifi"
                        checked={formData.amenities.wifi}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiWifi className="mr-1" /> Wi-Fi
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="furnished"
                        checked={formData.amenities.furnished}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiLayers className="mr-1" /> Furnished
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="pool"
                        checked={formData.amenities.pool}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiDroplet className="mr-1" /> Pool
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="balcony"
                        checked={formData.amenities.balcony}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiHome className="mr-1" /> Balcony
                      </span>
                    </label>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="parking"
                        checked={formData.amenities.parking}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FaParking className="mr-1" /> Parking
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="petFriendly"
                        checked={formData.amenities.petFriendly}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiUser className="mr-1" /> Pet Friendly
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="security"
                        checked={formData.amenities.security}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiShield className="mr-1" /> Security
                      </span>
                    </label>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="airConditioning"
                        checked={formData.amenities.airConditioning}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiWind className="mr-1" /> Air Conditioning
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="gym"
                        checked={formData.amenities.gym}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiActivity className="mr-1" /> Gym
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="elevator"
                        checked={formData.amenities.elevator}
                        onChange={handleAmenityChange}
                        className="w-8 h-8 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="flex items-center ml-2 text-[1.7rem] ">
                        <FiArrowUp className="mr-1" /> Elevator
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Property Photos */}
              <div>
                <label className="block mb-4 text-3xl font-medium">Property Photos</label>
                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-xl h-[15rem] items-center">
                  <div className="space-y-1 text-center">
                    <div className="flex justify-center text-2xl">
                      <label
                        htmlFor="file-upload"
                        className="relative font-medium text-blue-600 bg-white rounded-xl cursor-pointer hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span className="flex items-center">
                          <FiUpload className="mr-1" /> Click to upload
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          accept="image/png, image/jpeg"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-2xl">PNG, JPG up to 5MB each</p>
                    {formData.photos.length > 0 && (
                      <p className="mt-2 text-2xl text-blue-500">
                        {formData.photos.length} file{formData.photos.length !== 1 ? "s" : ""} selected
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end mt-16 space-x-4">
                <button type="button">
                  <ButtonTwo
                    name="cancel"
                    className="px-4 py-2 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </button>

                <button type="submit">
                  <Button name="list property" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
