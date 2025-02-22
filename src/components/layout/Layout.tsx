import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
