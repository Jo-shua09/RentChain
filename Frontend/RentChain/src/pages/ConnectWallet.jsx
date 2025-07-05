import { IoWalletOutline } from "react-icons/io5";
import { Button, ButtonTwo } from "../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function ConnectWallet() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-screen max-h-screen overflow-hidden section-page bg-gray-50">
      <div className="flex flex-col items-center w-full">
        <div className="mb-5 cursor-pointer w-fit">
          <img src="/logo.png" alt="logo image" loading="lazy" className="w-[20rem] h-fit cursor-pointer" />
        </div>
        <h3 className="text-5xl font-semibold text-center normal-case pb-7 text-secondary">Decentralized Rental Management Platform</h3>
        <p className="text-[1.7rem] font-medium normal-case text-center text-secondary">
          Connect your wallet to access the blockchain-powered rental ecosystem
        </p>
        <div className="flex flex-col items-center justify-center w-full max-w-5xl px-10 py-10 mt-8 bg-white border border-gray-300 shadow-sm rounded-xl">
          <div className="flex items-center mb-5 gap-x-5">
            <IoWalletOutline className="text-6xl text-primary" />
            <h2 className="text-4xl font-semibold">Connect Wallet</h2>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <Button onClick={() => navigate("/about")} className="flex justify-center w-full text-center" name="connect MetaMask" />
            <ButtonTwo className="flex justify-center w-full text-center border border-gray-200" name="WalletConnect" />
          </div>
        </div>
      </div>
    </div>
  );
}
