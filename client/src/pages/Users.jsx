import React from 'react';
import { useQuery } from '@apollo/client';

import UsersList from '../components/Userslist';
import { QUERY_USER } from '../utils/queries'; 

function Users() {
  const { loading, data } = useQuery( QUERY_USER );

  const users = data?.users || [];


  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
    
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UsersList
              users={users}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default Users;
