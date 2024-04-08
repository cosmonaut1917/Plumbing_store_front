import { Link } from 'react-router-dom';
import '../styles/style.css';
import deleteIcon from '../assets/images/trash.png'
import { DELETE_USER } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';

const UserList = ({ users, title, onDeleteUser, onToggleAdmin  }) => {
  console.log(users)
  
  if (!users.length) {
    return <h3>{users}</h3>;
  }

  return (
    <div>
      {/* <h3 className="text-primary">{title}</h3> */}
      <div className="">
        {users &&
          users.map((user) => (
            <div key={user._id} className="user-card">
              
              <div className="card">
                <h4 className="top">
                  {user.username} <br />
                </h4>
                <h4 className="center">
                  {user.email} <br />
                </h4>
                <h4 className="bot">
                  {user.phone} <br />
                </h4>
              </div>

              <aside className='side-icons'>
                <img src={deleteIcon} alt="toilet icon trash" onClick={(e)=>onDeleteUser(user._id)}/>
                <div className="form-check form-switch">
                  <label className="form-check-label" htmlFor={`flexSwitchCheck${user._id}`}>Admin</label>
                  <input 
                   className="form-check-input"
                   type="checkbox" 
                   id={`flexSwitchCheck${user._id}`} 
                   checked={user.admin} 
                   onChange={(e)=> onToggleAdmin(user._id, e.target.checked)}
                   />
                </div>

              </aside>

            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
