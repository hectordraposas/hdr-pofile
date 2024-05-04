import FooterLaoyout from "./layout/FooterLaoyout";
import NavBarLayout from "./layout/NavBarLayout";
import HomePage from "./pages/HomePage";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import Routers from "./components/AppRoutes/Routers";

import "/src/styles.css";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (scroll) {
      document.body.classList.add("scroll-off");
    } else {
      document.body.classList.remove("scroll-off");
    }

    console.log(scroll);
  }, [scroll]);

  const setScrollBehavior = (b) => {
    setScroll(b);
  };
  return (
    <>
      <HashRouter>
        <NavBarLayout setScrollBehavior={setScrollBehavior} scroll={scroll} />
        <Routers setScrollBehavior={setScrollBehavior} scroll={scroll} />
      </HashRouter>
      <FooterLaoyout />
    </>
  );
}

export default App;
