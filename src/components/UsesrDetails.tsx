import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Loading } from "./Loading";


const UsesrDetails = () => {

    const {id} = useParams();
    const {data: user, error, isLoading} = UseFetch('http://localhost:8000/users/' +id)
  return (
    <center>
    {isLoading && <p><Loading /></p>}
    {error&& <p>{error}</p>}
    {user && 
    <div>
        <h3>User {user.id} details</h3>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.number}</p>
    </div>
    }
    </center>
    
  )
}

export default UsesrDetails;