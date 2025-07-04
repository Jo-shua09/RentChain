import React, { useState } from "react";
import { Button, ButtonTwo } from "../common/Button";
import { IoArrowBackSharp, IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function FileComplaints() {
  const [formData, setFormData] = useState({
    property: "",
    urgency: "",
    issueType: "",
    description: "",
    photos: [],
  });

  const properties = ["you have no property yet"];

  const issueTypes = ["Plumbing", "Electrical", "Heating/Cooling", "Appliances", "Structural", "Pest Control", "Security", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photos: [...e.target.files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to blockchain/landlord)
    console.log(formData);
    alert("Complaint submitted successfully!");
  };

  const navigate = useNavigate();

  return (
    <div className="w-full section-page !py-52 bg-gray-50">
      <div className=" lg:w-[70%] md:w-[85%] sm:w-[90%] w-full pt-20 mx-auto relative">
        <div
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 flex items-center cursor-pointer gap-x-6 hover:scale-95 hover:text-primary"
        >
          <IoArrowBackSharp className="text-4xl" />
          <span className="text-3xl font-medium">Back</span>
        </div>

        <div className="my-10 space-y-4">
          <h3 className="flex text-6xl font-semibold gap-x-5">
            <IoWarningOutline className="text-6xl text-red-500" />
            File Maintenance Complaint
          </h3>
          <p className="text-3xl font-medium normal-case text-secondary">Report issues with your rental property</p>
        </div>

        <div className="p-12 mx-auto bg-white shadow-sm rounded-xl">
          <h1 className="mb-12 text-5xl font-bold">Complaint Details</h1>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="mb-6">
              <label className="block mb-2 text-3xl font-medium">Property</label>
              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
                className="w-full p-2 h-[5rem] normal-case border text-[1.7rem] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your property</option>
                {properties.map((property, index) => (
                  <option key={index} value={property}>
                    {property}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-3xl font-medium">Issue Type</label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                className="w-full h-[5rem] normal-case p-2 border text-[1.7rem] border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select issue type</option>
                {issueTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-3xl font-medium">Urgency Level</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-secondary text-[1.7rem]">
                  <input
                    type="radio"
                    name="urgency"
                    value="Low"
                    checked={formData.urgency === "Low"}
                    onChange={handleChange}
                    className="text-blue-500"
                    required
                  />
                  <span>Low - Can wait a few days</span>
                </label>
                <label className="flex items-center space-x-2 text-secondary text-[1.7rem]">
                  <input
                    type="radio"
                    name="urgency"
                    value="Medium"
                    checked={formData.urgency === "Medium"}
                    onChange={handleChange}
                    className="text-blue-500"
                  />
                  <span>Medium - Needs attention within 24 hours</span>
                </label>
                <label className="flex items-center space-x-2 text-secondary text-[1.7rem]">
                  <input
                    type="radio"
                    name="urgency"
                    value="High"
                    checked={formData.urgency === "High"}
                    onChange={handleChange}
                    className="text-blue-500"
                  />
                  <span>High - Urgent, needs immediate attention</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-3xl font-medium">Detailed Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please describe the issue in detail..."
                className="w-full h-[20rem] text-[1.7rem] normal-case p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-3xl font-medium">Photos/Evidence (optional)</label>
              <div className="p-4 text-center h-[15rem] flex flex-col justify-center place-content-center text-[1.7rem] border-2 border-gray-300 border-dashed rounded-xl">
                <input type="file" multiple accept="image/png, image/jpeg" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-8 h-8 mb-2 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <p className="text-gray-600">Click to upload photos (PNG, JPG up to 5MB each)</p>
                  </div>
                </label>
                {formData.photos.length > 0 && <div className="mt-2 text-2xl text-secondary">{formData.photos.length} file(s) selected</div>}
              </div>
            </div>

            <div className="p-4 mb-6 mt-10 border-l-4 h-[5rem] flex items-center border-yellow-400 bg-yellow-50">
              <div className="flex items-center gap-x-2">
                <IoWarningOutline className="text-4xl text-yellow-500" />
                <div className="ml-3">
                  <p className="text-[1.7rem] normal-case text-yellow-700">
                    <span className="font-bold">Important:</span> This complaint will be recorded on the blockchain and sent to your landlord. Make
                    sure all information is accurate.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-16 space-x-4">
              <button type="button">
                <ButtonTwo
                  name="cancel"
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </button>

              <button type="submit">
                <Button name="submit complaints" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
