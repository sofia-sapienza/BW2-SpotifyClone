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
