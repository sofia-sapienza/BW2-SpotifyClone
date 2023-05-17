const API_URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q={${query}}`;
let addressBarContent = new URLSearchParams(window.location.search)
const urlParams = new URLSearchParams(addressBarContent);
const artistId = urlParams.get('id');
const artista = document.getElementById('container-canzoni');


fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistid)
.then(response => response.json())
.then(artist => {
    for(let i=0; i<artist.length; i++){
        artista.innerHTML = `<div class="col-sm-6 col-3 ps-3">
        <div class="d-flex justify-content-start align-items-center p-3">
          1
          <img src='${artist.artist.picture_small}' style="width: 30px; margin-left: 10px;">
        </div>
      </div>
      <div class="col-sm-3 col-3 justify-content-end align-self-center">
        ${(artist.rank)}
      </div>
      <div class="col-sm-3 col-3 justify-content-end align-self-center">
        ${(artist.duration/60).toFixed(0)} min, ${(artist.duration%60)} sec 
      </div>
    </div>`
    }
})