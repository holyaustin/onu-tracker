import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import App from "@/App.tsx";
import IndexPage from "@/pages/index.jsx";
import MainnetAssetBalances from "@/pages/mainnet/mainnet";
import TestnetAssetBalances from "@/pages/testnet/testnet";

// Internal components
import { Toaster } from "@/components/ui/toaster.tsx";
import { WalletProvider } from "@/components/WalletProvider.tsx";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

        <WalletProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
        <TooltipProvider delayDuration={100}>

             
              <BrowserRouter>
               <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/mainnet" element={<MainnetAssetBalances />} />
                <Route path="/testnet" element={<TestnetAssetBalances />} />
                </Routes>
                 </BrowserRouter>
               
              
             
              {/**<IndexPage />   <App /> */}
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </WalletProvider>

  </React.StrictMode>,
);
