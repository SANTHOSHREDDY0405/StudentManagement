import React, { useState, useEffect } from 'react';
import { useLocation ,Link} from 'react-router-dom';

const ViewDetails = () => {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(location.state);
  }, [location.state]);

  return (
    <div>
      <Link to="/data"><button>back</button></Link>
      {data != null ? (
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.userid}</td>
              <td>{data.username}</td>
              <td>{data.useremail}</td>
              <td>{data.usermobile}</td>
              <td>{data.pw}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Data is not visible</p>
      )}
    </div>
  );
};

export default ViewDetails;
