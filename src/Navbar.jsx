import React from 'react'
import { FaRegUser } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import Styles from "./nav.module.css"

const Navbar = () => {
  return (
    <section className={Styles.main}>
      <article className={Styles.left}>
        <FaRegUser />
      </article>
      <article className={Styles.right}>
        <NavLink className={Styles.navlink} to="/create">create</NavLink>
        <NavLink className={Styles.navlink} to="/data">Data</NavLink>
        <NavLink className={Styles.navlink} to="/view">View</NavLink>
        <NavLink className={Styles.navlink} to="/update">Edit</NavLink>
      </article>
    </section>
  )
}

export default Navbar