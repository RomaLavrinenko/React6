import { useEffect, useState } from 'react';
import Albom from './Albom';
import {GetAlbom} from '../service/ApiService'

const Albums = () =>{
    const [album , setAlbum] = useState();
    useEffect(() =>{
      GetAlbom.handleAlbom({setAlbum});
      },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {album?.map((album) => <Albom key={album.id} album={album}/>)}
        </div>    
    );
}

export default Albums;
