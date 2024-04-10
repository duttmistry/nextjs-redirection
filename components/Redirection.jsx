"use client";
import React from "react";

function Redirection() {
  React.useEffect(() => {
    window.location.href =
      "https://www.yelp.com/biz/caliber-contracting-san-diego-2";
  }, []);
  return;
}

export default Redirection;
