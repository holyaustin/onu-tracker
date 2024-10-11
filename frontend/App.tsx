import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Header2 } from "./components/Header2";
// Internal pages
import FungibleAssetBalances from "./pages/mainnet/mainnet";
import TestnetAssetBalances from "./pages/testnet/testnet";
// @ts-ignore
import IndexPage from "./pages/index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function Layout2() {
  return (
    <>
      <Header2 />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },


  {
    element: <Layout />,
    children: [

      {
        path: "/pages/mainnet/",
        element: <FungibleAssetBalances />,
      },

      
    ],
  },

  {
    element: <Layout2 />,
    children: [

      {
        path: "/pages/testnet/",
        element: <TestnetAssetBalances />,
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
