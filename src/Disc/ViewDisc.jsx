import { useEffect, useState } from 'react'
import { getDisc } from '../services/DiscServices';
import { useParams } from 'react-router-dom';

function Disc() {
  const { id } = useParams();
  const [disc, setDisc] = useState({});
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