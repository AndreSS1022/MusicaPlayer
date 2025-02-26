/* en javascript hay dos formas
 de declarar funciones

 1 //
function searchSong()
{

}*/

//2. moderna
const searchSong =() =>
    
{
     // se guardar el valor digitado por
     // el usuario en el html y se guardar
     // en la variable songName

    let songName = document.getElementById
    ('search-field').value


    //se envia la variable songName al api
    // para consultar la informacion de la 
    // cancion o artista

    
    fetch(`https://api.lyrics.ovh/suggest/
        ${songName}`)

        .then(res => res.json())
        .then(data => displaySong(data.data))

}


const displaySong = songs => {
    const songContainer = document.getElementById("song-container")


}
