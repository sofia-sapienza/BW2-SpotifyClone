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

            fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id)
            .then(response => response.json())
            .then(tracks => {
               
               console.log(tracks)

               tracks.forEach((element,i) => {
                document.getElementById('caratteristiche_singola_track').innerHTML = `<div id="track" style="width: 100%; font-size: 0.8em; opacity: 0.75;" class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex">
                    <div class="me-3">${i+1}</div>
                    <div>
                        <div><b>Titolo_Brano</b></div>
                        <div>Nome_Artisti</div>
                    </div>
                    
                </div>

                <div>Numero_riproduzioni</div>
                <div>Durata_brano</div>
            </div>`
               });
                
            })




// fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistid)
// .then(response => response.json())
// .then(artist => {
//     for(let i=0; i<artist.length; i++){
//         artista.innerHTML = `<div class="col-sm-6 col-3 ps-3">
//         <div class="d-flex justify-content-start align-items-center p-3">
//           1
//           <img src='${artist.artist.picture_small}' style="width: 30px; margin-left: 10px;">
//         </div>
//       </div>
//       <div class="col-sm-3 col-3 justify-content-end align-self-center">
//         ${(artist.rank)}
//       </div>
//       <div class="col-sm-3 col-3 justify-content-end align-self-center">
//         ${(artist.duration/60).toFixed(0)} min, ${(artist.duration%60)} sec 
//       </div>
//     </div>`
//     }
// })