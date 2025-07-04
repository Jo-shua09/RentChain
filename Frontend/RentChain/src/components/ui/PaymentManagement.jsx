import { IoCheckmarkDone } from "react-icons/io5";

export default function PaymentManagement() {
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment in Downtown",
      price: 3500,
      dueDate: "2024-07-15",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Modern Studio Near Metro",
      price: 1800,
      dueDate: "2024-07-10",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Beachside Villa with Pool",
      price: 5000,
      dueDate: "2024-07-20",
      status: "upcoming",
    },
  ];

  // Format currency without cents
  const formatCurrency = (amount) => {
    return `$${amount}`;
  };

  return (
    <div className="w-full section-page !py-52 bg-gray-50">
      <div className="w-full mx-auto max-w-7xl">
        <div className="my-10 space-y-4">
          <h3 className="flex text-6xl font-semibold gap-x-5">Payment management</h3>
          <p className="text-3xl font-medium normal-case">Manage your property payments</p>
        </div>

        <div className="p-10 bg-white">
          {/* Property Listings */}
          <div className="space-y-12">
            {properties.map((property) => (
              <div key={property.id} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-medium normal-case">
                      #{property.id} {property.title}
                    </h2>

                    <div className="flex items-center gap-x-5">
                      <p className="text-[1.7rem] normal-case text-secondary">Due: {property.dueDate}</p>
                      <p className="font-medium text-[1.7rem]">{formatCurrency(property.price)}</p>
                    </div>
                  </div>
                  <div className="flex items-center px-5 py-2 text-2xl text-white normal-case rounded-full gap-x-5 bg-primary">
                    <IoCheckmarkDone className="text-4xl" /> Paid
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Sections */}
          {/* <div className="mt-8 space-y-4">
            <div className="pb-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-700">Pending</h3>
              <div className="flex justify-between mt-2">
                <span className="text-blue-600">Pay Now →</span>
                <span className="text-green-500">☉ Paid</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-700">Overdue</h3>
              <p className="mt-1 text-sm text-gray-500">No overdue payments</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
