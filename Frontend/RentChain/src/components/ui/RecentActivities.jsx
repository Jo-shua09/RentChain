import { LuClock } from "react-icons/lu";
import { useLocation } from "react-router-dom";

export default function RecentActivities() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full p-12 bg-white border border-gray-200 shadow-sm rounded-xl space-y-7">
      <div className="space-y-5">
        <div className="flex items-center gap-x-5">
          <LuClock className="text-5xl" />
          <span className="text-5xl font-semibold">recent activities</span>
        </div>

        {pathname == "/dashboard/landlord-dashboard" ? (
          <div className="w-full !mt-16 space-y-8">
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">Rent payment received from John Doe - Property #007</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">2 hours ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-blue-500 rounded-full place-content-end">
                success
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">New maintenance request - Property #003</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">5 hours ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-red-500 rounded-full place-content-end">
                warning
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">New tenant inquiry for Property #012</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">1 day ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-gray-300 rounded-full place-content-end">
                info
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">Overdue payment reminder sent - Property #005</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">2 days ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-red-500 rounded-full place-content-end">
                warning
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full !mt-16 space-y-8">
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">Rent payment successful for June 2024</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">15 days ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-blue-500 rounded-full place-content-end">
                success
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">Maintenance request submitted - Kitchen sink</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">3 days ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-red-500 rounded-full place-content-end">
                warning
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">Rent due reminder - July 2024</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">2 days ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-gray-300 rounded-full place-content-end">
                info
              </div>
            </div>
            <div className="flex items-center justify-between w-full border border-gray-200 p-7 rounded-xl">
              <div className="flex items-center w-full gap-x-10">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="space-y-3">
                  <p className="text-3xl font-medium normal-case text-secondary">New message from landlord</p>
                  <h4 className="text-2xl font-normal normal-case text-secondary">1 day ago</h4>
                </div>
              </div>
              <div className="flex items-center px-5 py-2 text-2xl font-semibold text-center text-white bg-gray-300 rounded-full place-content-end">
                info
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
