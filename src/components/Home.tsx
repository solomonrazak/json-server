import { Loading } from "./Loading";
import UseFetch from "./UseFetch";
import UserList from "./UserList";
const Home = () => {

    const {data: users, isLoading, error} = UseFetch('http://localhost:8000/users');
  return (
    <center>
            {error && <p>{error}</p>}
            {isLoading && <p><Loading /></p>}
            {users && <UserList users={users} />}
        </center>
  )
}

export default Home;