import { useEffect, useState } from 'react'
import { getDiscs } from '../services/DiscServices';

function Discs() {
  const [discs, setDiscs] = useState([]);
 
  useEffect(() => {
    getDiscs().then((response) => {
        setDiscs(response.data);
        console.log(response.data);
        console.log(discs)
    });
    
  }, []);
  
  return (
    <>
      {discs.map(element => {
        return(
        <div key={element._id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{element.category}</h6>
          <p className="card-text">Number songs:{element.numSong} with duration:{element.duration}</p>
        </div>
      </div>

        )
      })}
    </>
  )
}

export default Discs;