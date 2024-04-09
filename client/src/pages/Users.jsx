import React from 'react'
import { useQuery, useMutation } from '@apollo/client'

import UsersList from '../components/Userslist'
import { QUERY_USER } from '../utils/queries'
import { DELETE_USER, UPDATE_USER_ADMIN } from '../utils/mutations' 

function Users() {
  const { loading, data, refectch } = useQuery( QUERY_USER )
  const [deleteUser, {error}] = useMutation(
    DELETE_USER,{
      refetchQueries: [
        QUERY_USER,
        'users'
      ]
  })
  const [updateUserAdminStatus] = useMutation(
    UPDATE_USER_ADMIN,{
      refetchQueries: [
        QUERY_USER,
        'users'
      ]
    })

  const handleDeleteUser = async (userId) =>{
    try{
      console.log("Attempting to delete user with ID:", userId);
      await deleteUser ({variables: {id: userId}})
      
    }catch (error){
      console.error('Error attempting to delete user',error)
    }
    
  }

  const handleToggleAdmin = async (userId, isAdmin) => {
    try {
      await updateUserAdminStatus({variables: {id:userId, admin: isAdmin}})
    } catch (error) {
      console.error('Error attempting to promote user to admin',error)
    }

  }


  const users = data?.users || []


  return (
    <main>
      <div className="flex-row justify-center">
        <hr />

        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UsersList
              users={users}
              onDeleteUser ={handleDeleteUser}
              onToggleAdmin ={handleToggleAdmin}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Users
