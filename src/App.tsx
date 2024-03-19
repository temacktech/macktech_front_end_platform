import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Router } from "./Routes";

import "./global.css";

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Router />;
}
