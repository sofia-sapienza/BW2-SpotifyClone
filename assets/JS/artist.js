

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

    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/"+id)
    .then(res =>  res.json())
    .then(artista =>{
        
        console.log(artista)
        document.getElementById('artist_likes').innerText += artista.name
        document.getElementById('img_artist_like').style.background = `url('${artista.picture_small}')`
        document.getElementById('random_number').innerText = Math.round(Math.random()*20+5)

        document.querySelector('.container-artista').style.background = `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.9)), url('${artista.picture_big}')`
        document.querySelector('.container-artista').style.backgroundSize = "cover"
        document.querySelector('.container-artista').style.backgroundRepeat = "no-repeat"
        document.querySelector('.container-artista').style.backgroundPosition = "top"
    
        document.querySelector('h1 b').innerText = artista.name
        document.getElementById('views').innerText = artista.nb_fan
        console.log(artista.tracklist)
        fetch(artista.tracklist)
        .then(pop =>pop.json())
        .then(popolari =>{
            console.log(popolari.data)
            popolari.data.forEach((element,i) => {
              console.log(element.preview)
                document.getElementById('popolari').innerHTML += `<div class="col-8 d-flex">
                <div class="me-2 mt-2">${i+1}</div>
                <div class="me-2" style="background-image: url('${element.album.cover}'); width:50px; height: 40px; background-size: cover;" ></div>
                 <a  style="text-decoration: none; color: white; cursor:pointer; " onclick="avviaBrano('${element.title.replaceAll("'", "‛")}','${element.artist.name}','${element.album.cover}','${element.preview}')"><div class="w-100 ms-2 mb-5 mt-2" style="font-size:10px">${element.title_short}</div></a>
             </div>
            
             <div class="col-2 text-end mb-5 mt-2" style="font-size:10px; opacity:0.6">${element.rank}</div>
             <div class="col-2 text-end mb-5 mt-2" style="font-size:10px; opacity:0.6">${(element.duration / 60).toFixed(0)}:${((element.duration) % 60)<10? "0" + ((element.duration) % 60):((element.duration) % 60)}</div>`
            });
            
        })



        
    })

    
    function avviaBrano(title, name_artist, img, preview) {
        
       console.log(preview)
       console.log(title)
       
       document.querySelector('.container-imgPlayer img').src = img
       document.querySelector('.titlePlayer b').innerText = name_artist  
       document.querySelector('.artistPlayer').innerText = title

       document.getElementById('audio').innerHTML = `<audio controls autoplay>
       
       <source src='${preview}' type="audio/mpeg">
       
     </audio>`
     
       
    }

  

