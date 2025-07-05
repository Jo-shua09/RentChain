import { useEffect, useState } from "react";
import { Button } from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { CiCreditCard1, CiWallet } from "react-icons/ci";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const navigate = useNavigate();
  const { state } = useLocation();
  const propertyTitle = state?.title || "Unknown Property";
  const propertyPrice = state?.price || "Contact me for price";
  const location = useLocation();
  const pathname = location.pathname;
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Fetch properties when component mounts
  useEffect(() => {
    fetch("/mock-properties.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        // If there's a property in state, set it as selected
        if (state?.title) {
          const property = data.find((p) => p.title === state.title);
          setSelectedProperty(property || data[0]);
        } else {
          setSelectedProperty(data[0]);
        }
      })
      .catch((err) => console.error("Failed to load properties:", err));
  }, [state]);

  const handlePropertyChange = (e) => {
    const property = properties.find((p) => p.title === e.target.value);
    setSelectedProperty(property);
  };

  // Use selected property values or fallbacks
  const selectedTitle = selectedProperty?.title || "Unknown Property";
  const selectedPrice = selectedProperty?.price || 0;

  return pathname === "/dashboard/tenant-dashboard/properties/payment" ? (
    <div className="w-full section-page !py-52">
      <div className="relative w-full pt-20">
        <div
          onClick={() => navigate(-1)}
          className="absolute top-0 left-0 flex items-center cursor-pointer gap-x-6 hover:scale-95 hover:text-primary"
        >
          <IoArrowBackSharp className="text-4xl" />
          <span className="text-3xl font-medium">Back</span>
        </div>

        <h1 className="mb-6 text-5xl font-bold">Pay Rent</h1>
        <p className="mb-6 text-3xl normal-case text-secondary">Secure payment for {propertyTitle}</p>
        <div className="flex flex-wrap items-start justify-center gap-10 sm:flex-nowrap">
          <div className="w-full border border-gray-100 shadow-sm rounded-xl p-7">
            <h2 className="mb-4 text-4xl font-semibold">Payment Details</h2>
            <div className="mt-10 space-y-5">
              <label className="block mb-2 text-2xl font-medium text-secondary">Amount (USD)</label>
              <div className="text-6xl font-bold text-primary">${propertyPrice}</div>
              <div className="h-px !my-10 w-full bg-gray-200"></div>
            </div>
            <div className="space-y-5 ">
              <h3 className="mb-3 text-4xl font-medium">Payment Method</h3>
              <div className="space-y-5">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="w-8 h-8 text-blue-600 form-radio"
                    checked={paymentMethod === "crypto"}
                    onChange={() => setPaymentMethod("crypto")}
                  />
                  <span className="flex items-center text-3xl font-medium normal-case gap-x-4 text-secondary">
                    <CiWallet className="text-4xl" />
                    Crypto (USDC)
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="w-8 h-8 text-blue-600 form-radio"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  <span className="flex items-center text-3xl font-medium normal-case gap-x-4 text-secondary">
                    <CiCreditCard1 className="text-4xl" />
                    Flat (Credit Card)
                  </span>
                </label>
              </div>
              <div className="!mt-10">
                <Button className="w-full h-[5rem] justify-center flex" name={`$${propertyPrice}`} />
              </div>
            </div>
          </div>

          <div className="w-full border border-gray-100 shadow-sm rounded-xl p-7">
            <h2 className="mb-4 text-4xl font-semibold">Property Summary</h2>
            <h3 className="mb-3 text-3xl font-medium text-secondary">{propertyTitle}</h3>

            <div className="mt-10 mb-4 space-y-2 text-[1.7rem] font-normal text-secondary">
              <p>
                Monthly Rent: <span className="font-semibold">{`$${propertyPrice}`}</span>
              </p>
              <p>
                Landlord: <span className="font-semibold normal-case">&apos;wallet address&apos;</span>
              </p>
            </div>

            <div className="w-full h-px my-10 bg-gray-200"></div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-medium">Total Amount:</span>
              <span className="text-4xl font-bold text-primary">{`$${propertyPrice}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full section-page !py-52">
      <div className="relative w-full pt-20 bg-white">
        <h1 className="mb-6 text-5xl font-bold">Pay Rent</h1>
        <p className="mb-6 text-3xl normal-case text-secondary">Secure payment for {selectedTitle}</p>

        {/* Property Selection Dropdown */}
        <div className="max-w-5xl mb-16">
          <label className="block mb-3 text-3xl font-medium">Select Property</label>
          <select
            value={selectedProperty?.title || ""}
            onChange={handlePropertyChange}
            className="w-full h-[5.5rem] cursor-pointer p-2 border rounded-xl text-3xl font-medium normal-case text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {properties.map((property) => (
              <option key={property.id} value={property.title}>
                {property.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-10 sm:flex-nowrap">
          <div className="w-full border border-gray-300 shadow-sm rounded-xl p-7">
            <h2 className="mb-4 text-4xl font-semibold">Payment Details</h2>
            <div className="mt-10 space-y-5">
              <label className="block mb-2 text-2xl font-medium text-secondary">Amount (USD)</label>
              <div className="text-6xl font-bold text-primary">${selectedPrice}</div>
              <div className="h-px !my-10 w-full bg-gray-200"></div>
            </div>
            <div className="space-y-5 ">
              <h3 className="mb-3 text-4xl font-medium">Payment Method</h3>
              <div className="space-y-5">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="w-8 h-8 text-blue-600 form-radio"
                    checked={paymentMethod === "crypto"}
                    onChange={() => setPaymentMethod("crypto")}
                  />
                  <span className="flex items-center text-3xl font-medium normal-case gap-x-4 text-secondary">
                    <CiWallet className="text-4xl" />
                    Crypto (USDC)
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="w-8 h-8 text-blue-600 form-radio"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  <span className="flex items-center text-3xl font-medium normal-case gap-x-4 text-secondary">
                    <CiCreditCard1 className="text-4xl" />
                    Flat (Credit Card)
                  </span>
                </label>
              </div>
              <div className="!mt-10">
                <Button className="w-full h-[5rem] justify-center flex" name={`$${selectedPrice}`} />
              </div>
            </div>
          </div>

          <div className="w-full border border-gray-300 shadow-sm rounded-xl p-7">
            <h2 className="mb-4 text-4xl font-semibold">Property Summary</h2>
            <h3 className="mb-3 text-3xl font-medium text-secondary">{selectedTitle}</h3>

            <div className="mt-10 mb-4 space-y-2 text-[1.7rem] font-normal text-secondary">
              <p>
                Monthly Rent: <span className="font-semibold">{`$${selectedPrice}`}</span>
              </p>
              <p>
                Landlord: <span className="font-semibold normal-case">&apos;wallet address&apos;</span>
              </p>
            </div>

            <div className="w-full h-px my-10 bg-gray-200"></div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-medium">Total Amount:</span>
              <span className="text-4xl font-bold text-primary">{`$${selectedPrice}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
