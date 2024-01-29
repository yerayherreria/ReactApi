import { useEffect, useState } from "react";
import { createUser, getUser, updateUser } from "../services/UserServices";
import { useParams } from "react-router-dom";

export default function RegisterEditUser(){
    const {id} = useParams();
    const [user, setUser] = useState({ email: "", login: "", name: "", role: "", password:""});
    
    if(id!=null){
        useEffect(() => {
            getUser(id).then((response) => {
                setUser(response.data);
            });
          }, []);
    }

    function addSave(){
        createUser(user).then(()=>{
            user={ email: "", login: "", name: "", role: "", password:""};
        })
    }

    function editSave(){
        updateUser(id,user).then(()=>{})
    }

    function handleData(e){
        setUser({...user,[e.target.name]:e.target.value});
    }

    function viewForm(){
        if(id!=null){
            return (
            <>          
                <h1>Edit</h1>
                <div>
                    <label htmlFor="email">
                    email:<br />
                        <input type="email" name="email" onChange={handleData} value={user.email}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="login">
                    login:<br />
                        <input type="text" name="login" onChange={handleData} value={user.login}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="name">
                        name:<br />
                        <input type="text" name="name" onChange={handleData} value={user.name}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="role">
                    role:<br />
                        <input type="text" name="role" onChange={handleData} value={user.role}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                    password:<br />
                        <input type="text" name="password" onChange={handleData} value={user.password}/>
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" onClick={editSave}>Edit</button>
                </div>
                           
            </>
            )
        } else {
            return (
                <>          
                    <h1>Register</h1>
                <div>
                    <label htmlFor="email">
                    email:<br />
                        <input type="email" name="email" onChange={handleData}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="login">
                    login:<br />
                        <input type="text" name="login" onChange={handleData}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="name">
                        name:<br />
                        <input type="text" name="name" onChange={handleData}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="role">
                    role:<br />
                        <input type="text" name="role" onChange={handleData}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                    password:<br />
                        <input type="text" name="password" onChange={handleData}/>
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" onClick={addSave}>Save</button>
                </div>        
                </>
            )
        }
    }
    
    return(
       viewForm()
    )
}