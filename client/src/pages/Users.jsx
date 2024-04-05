// import React from "react";
// import "../styles/style.css";


// function Users({ suppliers }) {
//   console.log(suppliers)
//   return (
//     <section className="Users">
//         <p>Users</p>
//     </section>
//   );
// }

// export default Users;


import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries'; // Adjust the import path as necessary

function Users() {
  const { loading, error, data } = useQuery(QUERY_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error} :(</p>;

  return (
    <section className="Users">
      <p>Users</p>
      <ul>
        {data.users.map(({ _id, name, email, phone }) => (
          <li key={_id}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
