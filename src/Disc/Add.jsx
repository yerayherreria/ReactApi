import { useEffect, useState } from 'react'
import { createDisc, getDisc } from '../services/DiscServices';

function Add() {
  
  const [disc, setDisc] = useState({ name: null, numSong: null, category: null, duration: null });

  function handleData(e){
    setDisc({...disc,[e.target.name]:e.target.value});
}

    function addSave(){
        createDisc(disc).then(() => {
          });
    }
  return (
    <>          
                <div>
                    <label htmlFor="name">
                        name:<br />
                        <input type="text" name="name" onChange={handleData} />
                    </label>
                </div>
                <div>
                    <label htmlFor="numSong">
                    numSong:<br />
                        <input type="number" name="numSong" onChange={handleData} />
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
                        <input type="number" name="duration" onChange={handleData} />
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" onClick={addSave}>Save</button>
                </div>
               
    </>
  )
}

export default Add;