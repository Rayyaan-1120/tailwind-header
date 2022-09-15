import React from "react";
import Navbar from "../navbar/navbar";

export default function Index({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
