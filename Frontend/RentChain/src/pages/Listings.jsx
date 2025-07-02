import Filter from "../components/sections/Listings/Filter";
import PropertyCard from "../components/sections/Listings/PropertyCard";

export default function Listings() {
  return (
    <div className="w-full h-full">
      <div className="!py-20 section-page">
        <div className="space-y-3 mt-44">
          <h3 className="text-5xl font-semibold">Property Listings</h3>
          <p className="text-3xl font-medium normal-case text-secondary">Discover secure and transparent rental properties on the blockchain</p>
        </div>

        <div className="flex items-start justify-between gap-10 mt-28">
          <div className="w-full md:flex-[1] border">
            <Filter />
          </div>

          <div className="w-full md:flex-[3] border">
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
}
