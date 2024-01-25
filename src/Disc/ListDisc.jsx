import { useEffect, useState } from 'react'
import { deleteDisc, getDisc, getDiscs } from '../services/DiscServices';
import { Link } from 'react-router-dom';

function Discs() {
  const [discs, setDiscs] = useState([]);
  useEffect(() => {
    getDiscs().then((response) => {
        setDiscs(response.data);
      //  console.log(response.data);
      //  console.log(discs)
    });
    
  }, []);
  
  const delete3Disc = (e) => {
    let id=e.target.id;
    deleteDisc(id).then(() => {
      setDiscs(discs.filter((disc)=> disc._id !== id))
    });
  }

  return (
    <>
      {discs.map(element => {
        return(
        <div key={element._id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{element.category}</h6>
          <p className="card-text">Number songs:{element.numSong} with duration:{element.duration}</p>
          <button type="button" className="btn btn-primary" id={element._id} onClick={delete3Disc}>Delete</button>
          <Link to={`/addDisc/${element._id}`}>Edit</Link>
        </div>
      </div>

        )
      })}
    </>
  )
}

export default Discs;