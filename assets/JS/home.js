
window.onload=()=>{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles")
    .then(queen => queen.json())
    .then(queenMusic =>{
      queenMusic.data.forEach(element => {
        cardsHome.innerHTML += `<div class="col-3 rounded border border-0 cardsAltroCheTiPiace">
         <div class="card m-2" style="heigth:50px">
        <img class="card-img-top p-2 rounded" src=${element.album.cover} alt="Card image cap" width="30px">
        <div class="card-body">
        <a href="./assets/artst.html/id="><h5 class="card-title">${element.album.title}</h5></a>
        <a href="#"><h5 class="card-title">${element.artist.name}</h5></a>
        
        </div>
        </div>
        </div>`
    })})
}
  //Questo sarà l'array che cicleremo per populare la spazio dedicato alle playlist
  
  const playlistNames = [
  "Amour toujours❤️",
  "Cuori solitari",
  "Blue Lips",
  "Love songs",
  "One Step Closer",
  "Kissy",
  "Enemies to lovers",
  "Holde me closed",
  "First Date",
  "Oh honey",
  "My Valentine🌹",
  "Nostalgic Memories",
  "False alarm",
  "Mood boost",
  "Fellin'Good",
  "Dance to the Beat",
  "Zero Stress",
  "Kitcken Music",
  "Quiet Sounds🍃",
  "Enjoy your coffee",
  "Wine Please",
  "Beer Drinkin",
  "8 Hour Deep Sleep🌙",
  "Rock Indie",
  "Hip Hop Control",
  "Jazzy Mood",
  "Lips of an Angel",
  "Versatile Emotions😊",
  "Closer to Fine",
  "No song without you",
];
console.log(playlistNames);

//ho creato un riferimento alla lista <ul> con id list-playlist
const listaDaPopulare = document.getElementById("list-playlist");




for (let i = 0;  i < playlistNames.length; i++) {
  const elementoLi = document.createElement("li");
  elementoLi.innerText = playlistNames[i];
  listaDaPopulare.appendChild(elementoLi);
}


//nascondi annunci
const annunci = document.querySelector('.container-annunci');
const btnAnnunci = document.querySelector('.nascondi-annunci');
btnAnnunci.addEventListener('click', function() {
    annunci.classList.add('d-none');
})
