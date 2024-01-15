import { useEffect, useState } from 'react'
import { getDisc } from '../services/DiscServices';

function Disc() {
  const [disc, setDisc] = useState(null);
  const [id, setId] = useState(1);
  useEffect((id) => {
    getDisc(id).then((response) => {
        setDisc(response.data);
        console.log(disc);
    });
  }, [id]);
  
  function handleData(e){
    setId(e.target.value);
}
  return (
    <>
    <div>
        <h3>{id}</h3>
        <input type="text" name="name" onChange={handleData} />
    </div>
    </>
  )
}

export default Disc;