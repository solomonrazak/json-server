import UseFetch from "./UseFetch";
import UserList from "./UserList";
const Home = () => {

    const {data: users, isLoading, error} = UseFetch('http://localhost:8000/users');
  return (
    <section>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading users...</p>}
            {users && <UserList users={users} />}
        </section>
  )
}

export default Home;