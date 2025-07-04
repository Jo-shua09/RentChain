import { useEffect, useState } from "react";
import PropertyCard from "../../ui/PropertyCard";
import Filter from "../../ui/Filter";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    fetch("/mock-properties.json")
      .then((res) => res.json())
      .then((json) => {
        setProperties(json);
        setFilteredProperties(json); // Initialize filtered properties with all properties
      })
      .catch((err) => console.error("Failed to load properties:", err));
  }, []);

  const handleFilterChange = (filtered) => {
    setFilteredProperties(filtered);
  };

  return (
    <div className="w-full section-page !py-52 !pt-60">
      <h2 className="mb-10 text-5xl font-semibold text-primary">Properties</h2>

      <div className="flex flex-wrap-reverse items-start w-full gap-10 lg:flex-nowrap">
        <div className="lg:flex-[2] w-full">
          <Filter properties={properties} onFilterChange={handleFilterChange} />
        </div>

        <div className="lg:flex-[6] w-full">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
