import React, { useState } from 'react'
import Styles from "./create.module.css"
import axios from 'axios'

const Create = () => {
  let [state, setState] = useState(
    { name: "", pw: "", email: "", mobile: "", })
  let { name, pw, email, mobile } = state;
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post("http://localhost:3000/users", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => { // Use parentheses here instead of curly braces
        console.log(err);
      });
  }
  let handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(e);
    setState({ ...state, [name]: value })

  }

  return (
    <div id={Styles.bdy}>
      <form action="" onSubmit={handleSubmit}>
        <h2>name</h2>
        <input type="text" value={name} name='name' onChange={handleChange} className={Styles.a} /><br />
        <input type="text" value={pw} name='pw' onChange={handleChange} className={Styles.a} /><br />
        <input type="text" value={email} name='email' onChange={handleChange} className={Styles.a} /><br />
        <input type="text" value={mobile} name='mobile' onChange={handleChange} className={Styles.a} /><br />
        <button className={Styles.c}>submit</button>
      </form>
    </div>
  )
}

export default Create