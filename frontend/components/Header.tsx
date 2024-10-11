// import { NETWORK } from "@/constants";
// import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <div className="flex items-center justify-between px-64 py-6 flex-wrap bg-green-900  mx-auto w-full ">
      <div className="flex flex-row gap-2">
      <img src="/images/onu3.png" loading="lazy" alt="logo" width="124"/>
        <h1 className="display text-[#03D179]"> Onu-Tracker Powered by NODIT</h1>
      </div>
      
          <a href="/" className="text-2xl font-bold text-white">Home</a>
          <a href="" className="text-xl font-bold bg-[#03D179] text-primary h-10 px-4 py-1 rounded-md uppercase">Mainnet</a>
          <a href="/pages/testnet/" className="text-2xl font-bold text-white">Testnet</a>

{/*
      <div className="flex gap-2 items-center flex-wrap">
        <div className="bg-[#03D179] text-primary h-10 px-4 py-2 rounded-md uppercase">{NETWORK}</div>
         <WalletSelector /> 
      </div>*/}
    </div>
  );
}
