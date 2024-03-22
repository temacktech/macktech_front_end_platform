import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "sonner";

import { AuthProvider } from "./contexts/auth.tsx";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider>
          <App />
          <Toaster position="top-right" richColors toastOptions={{ style: { height: '6rem', padding: '1.4rem' } }} />
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
