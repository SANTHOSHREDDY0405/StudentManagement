import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// ... (imports)

const Data = () => {
  let [user, setUser] = useState(null);
  let navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/users');
        setUser(data); // Assuming data is an array
      } catch (error) {
        console.error(error);
        // Handle the error, e.g., set an error state or show a message to the user
      }
    };

    fetchData();
  }, []);

  const deletedata = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(response => {
        // Handle success
        console.log(response);
        // Assuming you want to update the user list after deletion
        const updatedUserList = user.filter(item => item.id !== id);
        setUser(updatedUserList);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  const viewdata = (id, name, email, phone, pwd) => {
    navigate("/view", {
      state: {
        userid: id,
        username: name,
        useremail: email,
        usermobile: phone,
        pw: pwd
      }
    });
  };

  return (
    <table border={2}>
      {user == null ? "something went wrong....!" : (
        user.map((x) => (
          <tr key={x.id}>
            <td>{x.name}</td>
            <td>{x.email}</td>
            <td>{x.mobile}</td>
            <td>{x.pw}</td>
            <td>
              <button onClick={() => viewdata(x.id, x.name, x.email, x.mobile, x.pw)}>view</button>
              <Link to={{ pathname: `/update/${x.id}`, state: { user } }}>edit</Link>
              <button onClick={() => deletedata(x.id)}>delete</button>
            </td>
          </tr>
        ))
      )}
    </table>
  );
};

export default Data;
