window.onload = () => {


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
      
//rendo invisibile il form per la ricerca e il button
const cerca = document.querySelector('#search button');
cerca.style.display = 'none'
document.querySelector('#search input').style.display = 'none'
    const cover = document.getElementById('cover');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id)
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id)
            .then(response => response.json())
            .then(artist => {
               
               console.log(artist)
                cover.innerHTML = `<div class="row g-0 pt-5 ms-3">
                <div id="cover_Album" class="col-md-4 me-3" style="background-image: url('${artist.cover}');">

                </div>
                <div class="col-md-8 d-flex flex-column">
                    <div class="card-body d-flex flex-column justify-content-end">
                        <p id="p_Album" class="m-0">ALBUM</p>
                        <h5 id="title_Album" class="card-title">${artist.title}</h5>
                        <div id="dettagli_Album" class="d-flex">
                            <div style="background-image: url('${artist.artist.picture_small}'); width: 20px;height: 20px; background-size: contain;" class="rounded-circle me-2"></div> 
                            <p class="card-text me-2 mt-1"><b>${artist.artist.name}</b></p>
                            <p class="card-text me-2 mt-1">${artist.release_date.substr(0,4)}</p>
                            <p class="card-text me-2 mt-1">${artist.nb_tracks} brani</p>
                            <p class="card-text me-2 mt-1">${(artist.duration/60).toFixed(0)} min, ${(artist.duration%60)} sec </p>
                        </div>
                    </div>
                </div>
            </div>`
            })
}