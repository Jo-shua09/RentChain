import { IoChatboxOutline } from "react-icons/io5";
import { Button } from "../components/common/Button";
import { FaTelegramPlane } from "react-icons/fa";
import { GoGlobe, GoQuestion, GoShield } from "react-icons/go";

export default function Contact() {
  return (
    <div className="w-full section-page !py-52 bg-gray-50">
      <div className="w-full space-y-20">
        <div className="mx-auto mt-10 space-y-5 text-center">
          <h3 className="text-6xl font-bold">get support</h3>
          <p className="text-4xl font-medium normal-case text-secondary">
            Need help with RentChain? Our decentralized support system is here to assist you.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-between w-full gap-10 md:flex-nowrap">
          <div className="flex flex-col w-full gap-10">
            <div className="p-10 bg-white border border-gray-300 rounded-xl space-y-7">
              <div className="flex items-center gap-x-5">
                <IoChatboxOutline className="text-4xl" />
                <h3 className="text-4xl font-semibold">Live Support Chat</h3>
              </div>
              <p className="text-3xl font-medium normal-case text-secondary">Get instant help through our AI-powered support chat system.</p>
              <Button name="start chat" className="flex justify-center w-full" />
            </div>

            <div className="p-10 bg-white border border-gray-300 rounded-xl space-y-7">
              <div className="flex items-center gap-x-5">
                <GoQuestion className="text-4xl" />
                <h3 className="text-4xl font-semibold">common issues</h3>
              </div>
              <div className="space-y-7">
                <div className="space-y-4">
                  <h4 className="text-3xl font-medium">Wallet Connection Issues</h4>
                  <p className="text-[1.7rem] font-normal normal-case text-secondary">
                    Make sure your wallet is unlocked and connected to the correct network.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-medium">transaction failures</h4>
                  <p className="text-[1.7rem] font-normal normal-case text-secondary">
                    Ensure you have sufficient balance for gas fees and transaction amounts.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-medium">property listings</h4>
                  <p className="text-[1.7rem] font-normal normal-case text-secondary">
                    All property data is stored on IPFS and verified on-chain for transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white border border-gray-300 rounded-xl space-y-7">
              <div className="flex items-center gap-x-5">
                <GoShield className="text-4xl" />
                <h3 className="text-4xl font-semibold">security & privacy</h3>
              </div>
              <h4 className="mb-1 text-3xl font-medium normal-case">Your privacy is protected through:</h4>
              <ul className="flex flex-col ml-10 gap-y-5">
                <li className="list-disc text-[1.7rem] font-normal text-secondary normal-case"> Wallet-based authentication</li>
                <li className="list-disc text-[1.7rem] font-normal text-secondary normal-case">Encrypted on-chain communications</li>
                <li className="list-disc text-[1.7rem] font-normal text-secondary normal-case">Decentralized data storage</li>
                <li className="list-disc text-[1.7rem] font-normal text-secondary normal-case">No personal data collection</li>
              </ul>
            </div>
          </div>

          <div className="w-full p-10 bg-white border border-gray-300 rounded-xl">
            <div className="flex items-center gap-x-5">
              <FaTelegramPlane className="text-4xl" />
              <h3 className="text-4xl font-semibold"> submit support request</h3>
            </div>
            <form className="w-full mt-10 space-y-12">
              <div className="space-y-2">
                <label className="text-3xl font-medium">Wallet Address (Optional)</label>
                <input
                  type="text"
                  name="type"
                  // value={formData.type}
                  // onChange={handleChange}
                  placeholder="0x..."
                  className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-3xl font-medium">subject</label>
                <input
                  type="text"
                  name="type"
                  // value={formData.type}
                  // onChange={handleChange}
                  placeholder="What do you need help with?"
                  className="block w-full h-[5rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-3xl font-medium">message</label>
                <textarea
                  type="text"
                  name="type"
                  // value={formData.type}
                  // onChange={handleChange}
                  placeholder="Describe your issue or questtion..."
                  className="block w-full h-[15rem] text-[1.7rem] normal-case px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-secondary"
                  required
                />
              </div>
              <Button className="flex justify-center w-full mt-10" name="send support request" icon={<FaTelegramPlane className="text-4xl" />} />
            </form>
            <hr className="w-full h-px my-10 bg-gray-200" />
            <div className="flex items-center gap-x-5">
              <GoGlobe className="text-4xl" />
              <h3 className="text-3xl font-semibold normal-case">Decentralized support powered by blockchain technology</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
