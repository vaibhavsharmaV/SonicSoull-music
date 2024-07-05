console.log("Lets write some javascript");
let currentSong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60); // Round down to the nearest second

  // Add leading zeros if needed
  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return formattedMinutes + ':' + formattedSeconds;
}

// // async function getsongs(){
  
// //     let a = await fetch("http://127.0.0.1:5500/songs/")
// //     let response = await a.text();
// //     console.log(response)
// //     let div = document.createElement("div");
// //     div.innerHTML = response;
// //     let as = div.getElementsByTagName("a")
// //      let songs = []
// //     for (let index = 0; index < as.length; index++) {
// //         const element = as[index];
// //         if(element.href.endsWith(".mp3")){
// //             songs.push(element.href.split("/songs/")[1])
// //         }
// //     }
// //     return songs
// // }


// // async function main(){
// // let songs = await getsongs()
// // console.log(songs)
// // }

// // main








async function getsongs(){
   // Array of songs
   let songs = [
      "/songs/Alone%20-%20Alan%20Walker.mp3" ,
      "/songs/Am%20I%20That%20Easy%20To%20Forget%20-%20Marty%20Robbins.mp3" ,
      "/songs/Darkside%20-%20Alan%20Walker.mp3" ,
      "/songs/Mr%20Lonely%20-%20Bobby%20Vinton.mp3" , 
      "/songs/Next%20To%20Me%20-%20Imagine%20Dragons.mp3"
   ];

return songs
}

const PlayMusic = (track)=>{
  currentSong.src = track
  currentSong.play()
  play.src = "pause.svg"
  const trackName = track.substring(track.lastIndexOf('/') + 1); // Extract track name from URL
  document.querySelector(".songinfo").innerHTML = trackName; // Set track name as inner HTML
  
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

 async function main() {
   // Get the list of songs
   songs = await getsongs();

   // show all the songs in the playlist
 let songUL = document.querySelector(".SongList").getElementsByTagName("ul")[0]
 for (const song of songs) {
   songUL.innerHTML = songUL.innerHTML + `<li> <img src="music.svg" alt="">
                        <div class="info">
                         <div> ${song.replaceAll("%20", " ")} </div>
                         <div>Vaibhav</div>
                       </div>
                          <div class="playnow">
                           <span>Play Now</span>
                      <img src="play.svg" alt="">
                   </div> </li>`;
 }

//  Attach an Event Listener to each songs.
Array.from(document.querySelector(".SongList").getElementsByTagName("li")).forEach(e=>{
  e.addEventListener("click", element=>{
    (e.querySelector(".info").firstElementChild.innerHTML)
    PlayMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    // trim() removes whitespace characters fro strings. eg- space, new line, tab
    // inner html is string here.
  })
  
})

// attach an Event listener on previous, play and next.
play.addEventListener("click", ()=>{
  if(currentSong.paused){
    currentSong.play()
    play.src = "pause.svg"
  }
  else{
    currentSong.pause()
    play.src = "play.svg"
  }
 
})

// listen for timeUpdate Event
currentSong.addEventListener("timeupdate", () => {
  console.log(currentSong.currentTime, currentSong.duration);
  document.querySelector(".songtime").innerHTML = 
  `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
  document.querySelector(".circle1").style.left = (currentSong.currentTime/ currentSong
  .duration)*100 + "%";
});
// important info:- Sure! Imagine currentSong as a music player. When you set its src (source) to a URL (the location of an audio file), it's like putting a song into the player. Then, when you call play() on currentSong, it's like pressing the play button on the player, and the song starts playing. So, currentSong is indeed the player that handles the currently playing song in the PlayMusic function.


// add an Eventlistener TO SEEKBAR to move from left to right
document.querySelector(".seekbar").addEventListener("click", e=>{
 let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
document.querySelector(".circle1").style.left = percent + "%";
currentSong.currentTime = ((currentSong.duration)*percent)/100;
})




// add an EventListener to previous
previous.addEventListener("click", () => {
  console.log("Previous clicked");

  // Get the filename of the current song
  let currentFileName = currentSong.src.split('/').pop();

  // Find the index of the current song in the songs array
  let index = songs.findIndex(song => song.includes(currentFileName));
  console.log("Index:", index);

  // Check if there is a previous song in the array
  if (index > 0) {
    // Play the previous song
    PlayMusic(songs[index - 1]);
    console.log("Playing previous song:", songs[index - 1]);
  }
});

// add an EventListener to next
next.addEventListener("click", () => {
  console.log("Next clicked");

  // Get the filename of the current song
  let currentFileName = currentSong.src.split('/').pop();

  // Find the index of the current song in the songs array
  let index = songs.findIndex(song => song.includes(currentFileName));
  console.log("Index:", index);

  // Check if there is a next song in the array
  if (index < songs.length - 1) {
    // Play the next song
    PlayMusic(songs[index + 1]);
    console.log("Playing next song:", songs[index + 1]);
  }
});

// add an event to volume
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",
(e=>{
     console.log("Setting volumr to", e.target.value, "/100")
     currentSong.volume = parseInt(e.target.value)/100
}))


}
main();










































