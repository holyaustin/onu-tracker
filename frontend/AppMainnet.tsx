import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
//import { Header2 } from "@/components/Header2";
// Internal pages
import MainnetAssetBalances from "@/pages/mainnet/mainnet";
//import TestnetAssetBalances from "@/pages/testnet/testnet";
// @ts-ignore
import IndexPage from "@/pages/index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [

      {
        path: "/mainnet/",
        element: <MainnetAssetBalances />,
      },

      
    ],
  },

]);

function AppMainnet() {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppMainnet;
