// en javascript hay dos formas de declarar funciones
// 1. Clasica
function searchSong () 
  {
    
  }

// 2. Moderna
const searchSong = () =>
  {
    //se guarda el valor digitado por el usuario en el html y se guarda en la variable SongName
    let songName = document.getElementById('search-field').value
    
    //Se envia la variable songName al api para consultar la informacion de la cancion o artista
    fetch(`https://api.lyrics.ovh/suggest/${songName}`.then(responce => responce.json())
    .then(data => displaySong(data.data))

          const displaySong = songs =>
            {
              const songContainer = document.
              getElementById('song-container') 
              songContainer.innerHTML = ''
            }
    
  }
