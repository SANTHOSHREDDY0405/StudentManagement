import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';  // Import useParams for accessing URL parameters
import Styles from './create.module.css';

const Update = () => {
  let navigate = useState();
  const [data, setData] = useState({
    name: '',
    pw: '',
    email: '',
    mobile: '',
  });

  const { id } = useParams();
  useEffect(() => {

    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    // Update the state based on user input
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3000/users/${id}`, data)
      .then((res) => {
        console.log(res.data);
       

      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" value={data.name} name="name" onChange={handleChange} className={Styles.a} /><br />
        <h2>Password</h2>
        <input type="text" value={data.pw} name="pw" onChange={handleChange} className={Styles.a} /><br />
        <h2>Email</h2>
        <input type="text" value={data.email} name="email" onChange={handleChange} className={Styles.a} /><br />
        <h2>Mobile</h2>
        <input type="text" value={data.mobile} name="mobile" onChange={handleChange} className={Styles.a} /><br />
        
      </form>
    </div>
  );
};

export default Update;
