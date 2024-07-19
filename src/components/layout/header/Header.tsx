import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className={style.container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
      >
        <p>Yeni Dərs əlavə et</p>
      </NavLink>
      <NavLink
        to="/addStudent"
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
      >
        <p>Yeni Şagird əlavə et</p>
      </NavLink>
      <NavLink
        to="/addExam"
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
      >
        <p>İmtahan məlumatı əlavə et</p>
      </NavLink>
    </header>
  );
}
