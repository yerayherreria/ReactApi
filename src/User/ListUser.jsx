import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../services/UserServices";
import { Link } from "react-router-dom";

export default function ListUsers(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data);
        });
        
      }, []);

    function deleteUserr(e){
        let id=e.target.id;
        deleteUser(id).then(() => {
            setUsers(users.filter((user)=> user._id !== id))
        });
    }
    return (
        <>
          {users.map(element => {
            return(
            <div key={element._id} className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">{element.login}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{element.email}</h6>
              <p className="card-text">{element.password}</p>
              <button type="button" className="btn btn-primary" id={element._id} onClick={deleteUserr}>Delete</button>
              <Link to={`/editUser/${element._id}`}>Edit</Link>
            </div>
          </div>
    
            )
          })}
        </>
    )
}