import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "sonner";

import { Router } from "./Routes";

import "./global.css";

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Toaster position="top-right" richColors duration={2500} />
      <Router />
    </>
  );
}
