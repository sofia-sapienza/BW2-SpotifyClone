


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
fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id)
    .then(response => response.json())
    .then(artist => {
        console.log(artist)
        cover.innerHTML = `<div class="row pt-5 ms-3 container">
                <div id="cover_Album" class="col-md-4 me-3" style="background-image: url('${artist.cover}');">

                </div>
                <div class="col-md-8 d-flex flex-column ">
                    <div class="card-body d-flex flex-column justify-content-end">
                        <p id="p_Album" class="m-0">ALBUM</p>
                        <h5 id="title_Album" class="card-title">${artist.title}</h5>
                        <div id="dettagli_Album" class="d-flex">
                            <div style="background-image: url('${artist.artist.picture_small}'); width: 20px;height: 20px; background-size: contain;" class="rounded-circle me-2"></div>
                            <p class="card-text me-2 mt-1"><b>${artist.artist.name}</b></p>
                            <p class="card-text me-2 mt-1">${artist.release_date.substr(0, 4)}</p>
                            <p class="card-text me-2 mt-1">${artist.nb_tracks} brani</p>
                            <p class="card-text me-2 mt-1">${(artist.duration / 60).toFixed(0)} min, ${(artist.duration % 60)} sec </p>
                        </div>
                    </div>
                </div>
            </div>`
    })
console.log(id)
fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + id)
    .then(response => response.json())
    .then(tracks => {



        console.log(tracks.tracks)

        tracks.tracks.data.forEach((element, i) => {
            console.log(element.preview)
            document.getElementById('caratteristiche_singola_track').innerHTML += `<div id="track" style="width: 100%; font-size: 0.8em; opacity: 0.75;" class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex col-4">
                    <div class="me-3 ">${i + 1}</div>
                    <div>
                       <a style="text-decoration: none; color: white;" href="#" onclick="avviaBrano('${element.title.replaceAll("'", "‛")}', '${element.artist.name}','${element.album.cover_small}','${element.preview}')"><div><b>${element.title}</b></div></a>
                       <a style="text-decoration: none; color: white;" href="./artisti.html?id=${element.artist.id}"><div>${element.artist.name}</div></a>
                    </div>
                    
                </div>

                <div class="col-4 text-center" >${element.rank}</div>
                <div class="col-4 text-end">${(element.duration / 60).toFixed(0)}:${((element.duration) % 60) < 10 ? "0" + ((element.duration) % 60) : ((element.duration) % 60)}</div>
                </div>`

        });

    })


console.log(id)

function avviaBrano(title, name_artist, img, preview) {

    document.querySelector('.container-imgPlayer img').src = img
    document.querySelector('.titlePlayer b').innerText = name_artist
    document.querySelector('#artistPlayer_album').innerText = title

    console.log(preview)

    let play = false
    let progress_bar_interval 
    document.getElementById('button_play_album').addEventListener('click', (mp3) => {

        play = !play
        console.log(play)
        if (play) {

            let n = 0
            console.log('ciao')
            progress_bar_interval = setInterval(function () {


                document.getElementById('progress_audio').style.width = `${n*(100/30)}%`
                document.getElementById('start_traccia').innerText = "0:"+(n<10? "0"+ n:n)
                n++
                if(n>30){
                    clearInterval(progress_bar_interval)
                    
                }
console.log(this)
            }, 1000)



            document.getElementById('container-scroll-text').classList.add('container-scroll-text')
            document.getElementById('text-animation_album').classList.add('text-animation')
            document.getElementById('artistPlayer_album').classList.add('artistPlayer')




            document.getElementById('container_play').innerHTML = `<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>`
            document.getElementById('audio').innerHTML = `<audio controls autoplay>
       
       
        <source src='${preview}' type="audio/mpeg">
       
      </audio>`
        } else {
            document.getElementById('audio').innerHTML = ''
            
            console.log(progress_bar_interval)
            clearInterval(progress_bar_interval)
            console.log(document.getElementById('container_play'))
            document.getElementById('container_play').innerHTML = `<path id="simbolo_play" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            `
        }



    })

}






