import { FaUser } from "react-icons/fa";
import { Button, ButtonTwo } from "../common/Button";

export default function Complaints() {
  const complaints = [
    {
      id: 1,
      title: "Heating System Issue",
      property: "Luxury Apartment in Downtown",
      description: "The heating system is not working properly in the living room.",
      date: "2024-07-01",
      code: "0x742d_481c",
      status: "open",
    },
    {
      id: 2,
      title: "Water Leak",
      property: "Modern Studio Near Metro",
      description: "There is a water leak in the bathroom ceiling.",
      date: "2024-06-28",
      code: "0x892e_7F2d",
      status: "open",
    },
  ];

  return (
    <div className="w-full section-page !py-52 bg-gray-50">
      <div className=" lg:w-[70%] md:w-[85%] sm:w-[90%] w-full pt-20 mx-auto">
        <div className="mb-10 space-y-4">
          <h3 className="flex text-6xl font-semibold gap-x-5">Complaints Management</h3>
          <p className="text-3xl font-medium normal-case">Manage complaints on property from tenant</p>
        </div>

        <div className="p-10 mx-auto bg-white shadow-sm rounded-xl">
          {/* Complaints List */}
          <div className="space-y-12">
            {complaints.map((complaint) => (
              <div className="flex flex-wrap justify-between h-full gap-10 border-b border-gray-200 md:flex-nowrap order last:pb-0w-full last:border-0 ">
                <div key={complaint.id} className="w-full space-y-5">
                  <h2 className="mb-1 text-3xl font-semibold">{complaint.title}</h2>
                  <p className="mb-1 font-medium text-[1.7rem] text-gray-700">{complaint.property}</p>
                  <p className="mb-3 text-2xl normal-case text-secondary">{complaint.description}</p>

                  <div className="flex gap-8 text-2xl normal-case">
                    <div>
                      <span className="text-gray-500">Filed: </span>
                      <span className="text-secondary">{complaint.date}</span>
                    </div>
                    <div>
                      <div className="flex space-x-4">
                        <FaUser className="text-2xl" /> <span className="font-mono text-2xl text-secondary">{complaint.code}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full gap-x-8 md:!pb-0 !pb-5 place-contents-end my-auto py-10 md:py-0">
                  <ButtonTwo
                    name="take action"
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button name="view details" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
