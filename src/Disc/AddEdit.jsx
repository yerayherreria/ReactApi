import { useEffect, useState } from 'react'
import { createDisc, getDisc, updateDisc } from '../services/DiscServices';
import { useParams } from 'react-router-dom';

function Add() {
    const { id } = useParams();

    const [disc, setDisc] = useState({ name: "", numSong: 0, category: "", duration: 0 });

    function handleData(e){
        setDisc({...disc,[e.target.name]:e.target.value});
    }   

    function addSave(){
        createDisc(disc).then(() => {
          });
    }
    function editSave(){
        console.log(disc);
        updateDisc(id,disc).then(() => {
        });
    }
    if(id!=null){

    function viewData(idData){
        useEffect(() => {
            getDisc(idData).then((response) => {
                setDisc(response.data);
                console.log(disc);
            });
          }, []);
    }
        viewData(id);
    }
    function form(){
        if(id!=null){
            return (
                <>          <h1>Edit</h1>
                            <div>
                                <label htmlFor="name">
                                    name:<br />
                                    <input type="text" name="name" onChange={handleData} value={disc.name}/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="numSong">
                                numSong:<br />
                                    <input type="number" name="numSong" onChange={handleData} value={disc.numSong} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="category">
                                category:<br />
                                    <input type="text" name="category" onChange={handleData} value={disc.category} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="duration">
                                duration:<br />
                                    <input type="number" name="duration" onChange={handleData} value={disc.duration} />
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
    }
  return (
    form()
  )
}

export default Add;