import { useParams } from "react-router-dom"
import { createArtist, getArtist, updateArtist } from "../services/ArtistServices";
import { useEffect, useState } from "react";

export default function AddEditArtist(){
    const {id} = useParams();
    const [artist, setArtist] = useState({ name: "", category: "", nameDisc: ""});

    if(id!=null){
        useEffect(() => {
            getArtist(id).then((response) => {
                setArtist(response.data);
            });
          }, []);
    }

    function editSave(){
        updateArtist(id,artist).then(()=>{})
    }

    function addSave(){
        createArtist(artist).then(()=>{
            artist={ name: "", category: "", nameDisc: ""};
        })
    }

    function handleData(e){
        setArtist({...artist,[e.target.name]:e.target.value});
    }

    function viewForm(){
        if(id!=null){
            return (
                <>          <h1>Edit</h1>
                            <div>
                                <label htmlFor="name">
                                    name:<br />
                                    <input type="text" name="name" onChange={handleData} value={artist.name}/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="category">
                                category:<br />
                                    <input type="text" name="category" onChange={handleData} value={artist.category} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="duration">
                                duration:<br />
                                    <input type="text" name="nameDisc" onChange={handleData} value={artist.nameDisc} />
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
                <>          <h1>Add</h1>
                            <div>
                                <label htmlFor="name">
                                    name:<br />
                                    <input type="text" name="name" onChange={handleData} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="category">
                                category:<br />
                                    <input type="text" name="category" onChange={handleData} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="duration">
                                duration:<br />
                                    <input type="text" name="nameDisc" onChange={handleData} />
                                </label>
                            </div>
                            <br />
                            <div>
                                <button type="submit" onClick={addSave}>Add</button>
                            </div>
                           
                </>
            )
        }
    }

    return(
        viewForm()
    )
}