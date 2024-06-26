import { Link } from "react-router-dom";

interface User {
  name: string;
  id: number;
  email: string;
  number: number;
}

interface UserListProps {
  users: User[];
 
}

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <main>
        <div>
          <h1>Users List</h1>
        </div>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <p>{user.id}</p>
                        </td>
                        <td>
                            <p>{user.name}</p>
                        </td>
                        <td>
                            <p>{user.email}</p>
                        </td>
                        <td>
                            <p>{user.number}</p>
                        </td>
                        <td>
                            <Link to={`/users/${user.id}`}>
                            <button>
                                View full details
                            </button>
                            </Link>

                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default UserList;
