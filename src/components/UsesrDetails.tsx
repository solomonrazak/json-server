import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";


const UsesrDetails = () => {

    const {id} = useParams();
    const {data: user, error, isLoading} = UseFetch('http://localhost:8000/users/' +id)
  return (
    <>
    {isLoading && <p>...loadinf</p>}
    {error&& <p>{error}</p>}
    {user && 
    <div>
        <p>User {user.id} details</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.number}</p>
    </div>
    }
    </>
    
  )
}

export default UsesrDetails;