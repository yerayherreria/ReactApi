import { useEffect, useState } from "react"
import { getArtists,deleteArtist } from "../services/ArtistServices";
import { Link } from "react-router-dom";

export default function ListArtist(){
    const [artists,setArtists] = useState([]);
    
    useEffect(()=>{
        getArtists().then((response)=>{
            setArtists(response.data);
        });
    },[])

    const deleteArtists = (e) => {
        let id=e.target.id;
        deleteArtist(id).then(() => {
            setArtists(artists.filter((artist)=> artist._id !== id))
        });
      }
    return(
        <>
        {artists.map(element => {
            return(
                <div key={element._id} className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{element.category}</h6>
                        <p className="card-text">Name Disc:{element.nameDisc}</p>
                        <button type="button" className="btn btn-primary" id={element._id} onClick={deleteArtists}>Delete</button>
                        <Link to={`/editArtist/${element._id}`}>Edit</Link>
                    </div>
                </div>
            )
        })}
        </>
    )
}