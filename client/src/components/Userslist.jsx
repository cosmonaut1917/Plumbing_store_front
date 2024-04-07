import { Link } from 'react-router-dom';
import '../styles/style.css'

const UserList = ({ users, title }) => {
  console.log(users)
  
  if (!users.length) {
    return <h3>{users}</h3>;
  }

  return (
    <div>
      {/* <h3 className="text-primary">{title}</h3> */}
      <div className="flex-row justify-space-between ">
        {users &&
          users.map((user) => (
            <div key={user._id} className="user-card">
              <div className="card mb-3">
                <h4 className="card-header">
                  {user.username} <br />
                </h4>
                <h4 className="card-header">
                  {user.email} <br />
                </h4>
                <h4 className="card-header">
                  {user.phone} <br />
                </h4>
                

                {/* <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/users/${user._id}`}
                >
                  View and endorse their skills.
                </Link> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
