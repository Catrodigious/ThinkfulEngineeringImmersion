import React, {useState, useEffect} from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);

  
  useEffect(()=>{
    const abortController = new AbortController();
    if (user.id){
    async function getAlbums(){
      try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`, {signal: abortController.signal});
      const albumsData = await response.json();
      setAlbums(albumsData);
      }catch(err){
        if (err.name === "AbortError"){
          console.log("Aborted: ", albums);
        }else{
          console.log(err);
        }
      }
    }
    getAlbums();
    return ()=> abortController.abort();
    }
  }, [user])

  if (Object.keys(user).length === 0){
    return <p>Please click on a user name to the left</p>;
  }else if (Object.keys(user).length > 0){
    return (
      <div>
        <h1>{user.name} Albums</h1>
        <ul>
          {albums.map((album)=><li key={album.id}>{album.id} - {album.title}</li>)}
        </ul>
      </div>
    )
  }else{
    return (<p>Loading...</p>)
  }
  
}

export default AlbumList;
