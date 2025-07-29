import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    localStorage.setItem("prevLocation", location.pathname);
  }, [location.pathname]);
  return <Outlet />;
}

export default ScrollToTop;
