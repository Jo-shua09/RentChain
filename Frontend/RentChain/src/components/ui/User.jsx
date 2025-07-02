import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function User() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block w-full text-left">
      <button onClick={() => setOpen((prev) => !prev)} className="focus:outline-none">
        <FaUserCircle className="w-20 h-20 text-gray-600 hover:text-primary" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[30rem] origin-top-right bg-white border border-gray-200 shadow-xl rounded-xl">
          <div className="flex flex-col items-center p-4 border-b border-gray-100">
            <FaUserCircle className="w-24 h-24 mb-2 text-gray-400" />
            <button className="text-2xl text-blue-600 hover:underline">Change Avatar</button>
          </div>
          <ul className="py-2 pb-4 pl-4 space-y-4 text-2xl text-gray-700">
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">Change Name</li>
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">Change Email</li>
            <li className="px-4 py-4 cursor-pointer hover:bg-gray-100">Change Password</li>
            <li className="px-4 py-4 text-red-600 cursor-pointer hover:bg-red-100">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}
