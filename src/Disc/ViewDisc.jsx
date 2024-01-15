import { useEffect, useState } from 'react'
import { getDisc } from '../services/DiscServices';

function Disc() {
  const [disc, setDisc] = useState({});
  const [id, setId] = useState("");
  function handleData(e){
    setId(e.target.value);
}
  useEffect(() => {
    getDisc(id).then((response) => {
        setDisc(response.data);
    });
  }, [id]);
  
  return (
    <>
    <div>
        <h3>{id}</h3>
        <input type="text" name="name" onChange={handleData} />
    </div>
    <div key={disc._id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{disc.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{disc.category}</h6>
          <p className="card-text">Number songs:{disc.numSong} with duration:{disc.duration}</p>

        </div>
      </div>
    </>
  )
}

export default Disc;