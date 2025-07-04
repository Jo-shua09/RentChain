import { useEffect, useState } from "react";
import PropertyCard from "../../ui/PropertyCard";
import Filter from "../../ui/Filter";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/mock-properties.json")
      .then((res) => res.json())
      .then((json) => setProperties(json))
      .catch((err) => console.error("Failed to load properties:", err));
  }, []);

  return (
    <div className="w-full section-page !py-52 !pt-60">
      <h2 className="mb-10 text-5xl font-semibold text-primary">Properties</h2>

      <div className="flex flex-wrap items-start w-full gap-16 md:flex-nowrap">
        <div className="md:flex-[2] w-full">
          <Filter />
        </div>

        <div className="md:flex-[4] w-full">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
