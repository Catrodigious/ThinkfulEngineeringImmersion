import React, {useEffect} from "react";

function AlbumList({ user = {}, albums, setAlbums, users }) {
// Load albums from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  
  if (Object.keys(user).length === 0){
    return <p>Please click on a user name to the left</p>;
  }else{
    
  }
}

export default AlbumList;
