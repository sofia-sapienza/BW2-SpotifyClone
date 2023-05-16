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

for (let i = 0; i < playlistNames.length; i++) {
  const elementoLi = document.createElement("li");
  elementoLi.innerText = playlistNames[i];
  listaDaPopulare.appendChild(elementoLi);
}


//nascondi annunci
const annunci = document.querySelector('.container-annunci');
const btnAnnunci = document.querySelector('.nascondi-annunci');
btnAnnunci.addEventListener('click', function () {
  annunci.classList.add('d-none');
})


//Al caricmaneto della pagina vengono generate le card
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles%22")
    .then(queen => queen.json())
    .then(queenMusic => {
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
      })
    })
}

//Gestione Cards della Homepage-"Altro che può piacere"
//mi aggancio all'icona "cerca", al form e al button "Cerca"
//mi aggancio al div che contiene le cards generate da js

const cardsHome = document.getElementById('homeAltroCheTiPiaceCards')
const cerca = document.querySelector('#search button');
//rendo invisibile il form per la ricerca e il button
cerca.style.display = 'none'
document.querySelector('#search input').style.display = 'none'


//definisco la funzione "faiComparireInputFunction" definita con onclick nell'html:
//questa funzione si avvia quando viene premuta l'icona della ricerca:
//mostra il campo input e il button "Cerca" e nasconde l'icona lente 
function faiComparireInputFunction() {
  cerca.style.display = 'block'
  document.querySelector('#search input').style.display = 'block'
  document.getElementById('sparire').style.display = 'none'
}

//quando clicco sul button "cerca" (ora visibile):
//1. evito il refresh della pagina (con e.preventDefaul())
//2. memorizza nella variabile query il valore dell'input introdotto dall'utente
//3. memorizza in url l'url specifico 
//4. fa la chimata all'API
//5. l'array che ritorna viene sputato nel DOM con un forEach e per ogni elemento definito da "query" ci crea una card che viene mostrata nel div homeAltroCheTiPiaceCards
cerca.addEventListener('click', (e) => {
  e.preventDefault()

  const query = document.querySelector('#search input').value

  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q={${query}}`;
  fetch(url)
    .then(response => response.json())
    .then(musica => {
      console.log(musica)
      console.log(musica.data[0])
      musica.data.forEach(element => {
        cardsHome.innerHTML += `<div class="col-3 rounded border border-0 cardsAltroCheTiPiace">
   <div class="card m-2" style="heigth:50px">
  <img class="card-img-top p-2 rounded" src=${element.album.cover} alt="Card image cap" width="30px">
  <div class="card-body">
  <a href="./assets/artst.html/id="><h5 class="card-title">${element.album.title}</h5></a>
  <a href="#"><h5 class="card-title">${element.artist.name}</h5></a>
  
  </div>
  </div>
  </div>`
      })


    })

  document.querySelector('#search input').value = ''

})

console.log(cerca)
console.log(search)