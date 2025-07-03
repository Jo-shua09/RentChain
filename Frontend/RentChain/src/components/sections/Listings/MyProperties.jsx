export default function MyProperties() {
  return (
    <div className="w-full section-page !py-52">
      <h2 className="text-5xl font-semibold">my properties</h2>
      <div className="grid w-full grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full">
          <PropertyCard />
        </div>
      </div>
    </div>
  );
}
