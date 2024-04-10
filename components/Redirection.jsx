"use client";
import React from "react";

function Redirection() {
  React.useEffect(() => {
    window.location.href = "https://www.google.com";
  }, []);
  return;
}

export default Redirection;
