//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  console.log(songList);
  var songs = '';
  var songsContainerElem = document.getElementById('song-list');

  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    songs += '<li class="list-group-item">'+
          currentSong.artist + "  " +
          currentSong.title + "     $" + 
          currentSong.price + "<br>" +
          '<img src=' + currentSong.albumArt+ '/>'  + 
          currentSong.collection
          '</li>';
  }
  
  
  songsContainerElem.innerHTML = songs;
}