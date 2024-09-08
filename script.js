console.log("Let's write some JavaScript");

// let currentSong = new Audio();
// let songs;

// function secondsToMinutesSeconds(seconds) {
//   var minutes = Math.floor(seconds / 60);
//   var remainingSeconds = Math.floor(seconds % 60);

//   var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//   var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

//   return formattedMinutes + ':' + formattedSeconds;
// }

// async function getSongs() {
//   let songs = [
//     "Alone - Alan Walker - Copy.mp3",
//     "Am I That Easy To Forget - Marty Robbins.mp3",
//     "Darkside - Alan Walker.mp3",
//     "Mr Lonely - Bobby Vinton.mp3",
//     "Next To Me - Imagine Dragons.mp3"
//   ];

//   // Format songs with correct relative paths for GitHub Pages
//   return songs.map(song => `./Songs/${encodeURIComponent(song)}`);
// }

// const PlayMusic = (track) => {
//   console.log(`Attempting to play: ${track}`);
//   currentSong.src = track;
//   currentSong.play().then(() => {
//     play.src = "pause.svg";
//     const trackName = decodeURIComponent(track.substring(track.lastIndexOf('/') + 1));
//     document.querySelector(".songinfo").innerHTML = trackName;
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
//     console.log(`Now playing: ${track}`);
//   }).catch(error => {
//     console.error(`Error playing track: ${track}`, error);
//   });
// }

// async function main() {
//   songs = await getSongs();

//   let songUL = document.querySelector(".SongList").getElementsByTagName("ul")[0];
//   for (const song of songs) {
//     let decodedSongName = decodeURIComponent(song.replace('./Songs/', '').replaceAll('%20', ' '));
//     songUL.innerHTML += `<li>
//                           <img src="music.svg" alt="">
//                           <div class="info">
//                             <div>${decodedSongName}</div>
//                             <div>Vaibhav</div>
//                           </div>
//                           <div class="playnow">
//                             <span>Play Now</span>
//                             <img src="play.svg" alt="">
//                           </div>
//                         </li>`;
//   }

//   Array.from(document.querySelector(".SongList").getElementsByTagName("li")).forEach(e => {
//     e.addEventListener("click", element => {
//       let songPath = e.querySelector(".info").firstElementChild.textContent.trim();
//       PlayMusic(`./Songs/${encodeURIComponent(songPath)}`);
//     });
//   });

//   const play = document.querySelector("#play");
//   play.addEventListener("click", () => {
//     if (currentSong.paused) {
//       currentSong.play();
//       play.src = "pause.svg";
//     } else {
//       currentSong.pause();
//       play.src = "play.svg";
//     }
//   });

//   currentSong.addEventListener("timeupdate", () => {
//     document.querySelector(".songtime").innerHTML = 
//       `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//     document.querySelector(".circle1").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//   });

//   document.querySelector(".seekbar").addEventListener("click", e => {
//     let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//     document.querySelector(".circle1").style.left = percent + "%";
//     currentSong.currentTime = (currentSong.duration * percent) / 100;
//   });

//   const previous = document.querySelector("#previous");
//   previous.addEventListener("click", () => {
//     let currentFileName = currentSong.src.split('/').pop();
//     let index = songs.findIndex(song => song.includes(currentFileName));
//     if (index > 0) {
//       PlayMusic(songs[index - 1]);
//     }
//   });

//   const next = document.querySelector("#next");
//   next.addEventListener("click", () => {
//     let currentFileName = currentSong.src.split('/').pop();
//     let index = songs.findIndex(song => song.includes(currentFileName));
//     if (index < songs.length - 1) {
//       PlayMusic(songs[index + 1]);
//     }
//   });

//   document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
//     currentSong.volume = parseInt(e.target.value) / 100;
//   });
// }

// main();




// console.log("Lets write some javascript");
// let currentSong = new Audio();
// let songs;

// function secondsToMinutesSeconds(seconds) {
//   var minutes = Math.floor(seconds / 60);
//   var remainingSeconds = Math.floor(seconds % 60); // Round down to the nearest second

//   // Add leading zeros if needed
//   var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//   var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

//   return formattedMinutes + ':' + formattedSeconds;
// }

// // // async function getsongs(){
  
// // //     let a = await fetch("http://127.0.0.1:5500/songs/")
// // //     let response = await a.text();
// // //     console.log(response)
// // //     let div = document.createElement("div");
// // //     div.innerHTML = response;
// // //     let as = div.getElementsByTagName("a")
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

let currentSong = new Audio();
let songs;


// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select the card element
  const card1 = document.getElementById('card1');
  const card2 = document.getElementById('card2');

  // Add a click event listener
  card1.addEventListener('click', function () {
    main('card1')
    // alert('Card1 clicked!');

    // You can add any other logic here
  });
  // Add a click event listener
  card2.addEventListener('click', function () {
    main('card2')
    // alert('Card2 clicked!');
    // You can add any other logic here
  });


});


function secondsToMinutesSeconds(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return formattedMinutes + ':' + formattedSeconds;
}

async function getSongs(id) {
  var songs = ''
  if (id == 'card2') {
    console.log("card 2")
    songs=[
      "128 Badi Sooni Sooni Hai Zindagi Mili 128 Kbps.mp3",
      "Cartoon, Jéja - On & On.mp3",
      "Janji - Heroes Tonight.mp3",
      "Rival x Asketa - Superhero.mp3",
      "Skybreak & Keepsake - Comet.mp3",
      "Zeus X Crona - invisible.mp3"
    ]
    return songs.map(song => `./NCS/${encodeURIComponent(song)}`);
  } else {
    console.log("card 1")
    songs = [
      "Alone - Alan Walker - Copy.mp3",
      "Am I That Easy To Forget - Marty Robbins.mp3",
      "Darkside - Alan Walker.mp3",
      "Mr Lonely - Bobby Vinton.mp3",
      "Next To Me - Imagine Dragons.mp3"
    ];
    // Format songs with correct relative paths for GitHub Pages
    return songs.map(song => `./Songs/${encodeURIComponent(song)}`);
  } 
}

const PlayMusic = (track) => {
  console.log(`Attempting to play: ${track}`);
  currentSong.src = track;
  currentSong.play().then(() => {
    play.src = "pause.svg";
    const trackName = decodeURIComponent(track.substring(track.lastIndexOf('/') + 1));
    document.querySelector(".songinfo").innerHTML = trackName;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
    console.log(`Now playing: ${track}`);
  }).catch(error => {
    console.error(`Error playing track: ${track}`, error);
  });
}

async function main(id) {
  songs = await getSongs(id);


  let songUL = document.querySelector(".SongList").getElementsByTagName("ul")[0];
  songUL.innerHTML = ''
  for (const song of songs) {
    var songPath = decodeURIComponent(song)
    if (id = 'card2') {      
      var decodedSongName = decodeURIComponent(song.replace('./NCS/', '').replaceAll('%20', ' '));
    } else {
      decodedSongName = decodeURIComponent(song.replace('./Songs/', '').replaceAll('%20', ' '));
    }
    
    songUL.innerHTML += `<li >
                          <img src="music.svg" alt="">
                          <div class="info" songPath="${songPath}">
                            <div>${decodedSongName}</div>
                            <div>Vaibhav</div>
                          </div>
                          <div class="playnow">
                            <span>Play Now</span>
                            <img src="play.svg" alt="">
                          </div>
                        </li>`;
  }

  Array.from(document.querySelector(".SongList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
      // let songPath = e.querySelector(".info").firstElementChild.textContent.trim();
      let songPath = e.querySelector(".info").getAttribute("songPath")
      // PlayMusic(`./NCS/${encodeURIComponent(songPath)}`);
      console.log(songPath)
      PlayMusic(songPath);
    });
  });


}

const play = document.getElementById("play");
play.addEventListener("click", () => {
  console.log("is song pause:-",currentSong.paused)
  if (currentSong.paused) {
    currentSong.play();
    play.src = "pause.svg";
  } else {
    currentSong.pause();
    play.src = "play.svg";
  }
});

currentSong.addEventListener("timeupdate", () => {
  document.querySelector(".songtime").innerHTML =
    `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
  document.querySelector(".circle1").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
});

document.querySelector(".seekbar").addEventListener("click", e => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle1").style.left = percent + "%";
  currentSong.currentTime = (currentSong.duration * percent) / 100;
});

const previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  let currentFileName = currentSong.src.split('/').pop();
  let index = songs.findIndex(song => song.includes(currentFileName));
  if (index > 0) {
    PlayMusic(songs[index - 1]);
  }
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
  let currentFileName = currentSong.src.split('/').pop();
  let index = songs.findIndex(song => song.includes(currentFileName));
  if (index < songs.length - 1) {
    PlayMusic(songs[index + 1]);
  }
});

// add an eventlistner on hamburger
document.querySelector(".hamburger").addEventListener("click", ()=>{
  document.querySelector(".left").style.left = "0"
})

//  eventlistner for close button
document.querySelector(".close").addEventListener("click", ()=>{
  document.querySelector(".left").style.left = "-100%"
})



document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
  currentSong.volume = parseInt(e.target.value) / 100;
});

console.log(getSongs("card1"));
main("card1");


































// async function getsongs(){
//    // Array of songs
//    let songs = [
//       "/songs/Alone%20-%20Alan%20Walker.mp3" ,
//       "/songs/Am%20I%20That%20Easy%20To%20Forget%20-%20Marty%20Robbins.mp3" ,
//       "/songs/Darkside%20-%20Alan%20Walker.mp3" ,
//       "/songs/Mr%20Lonely%20-%20Bobby%20Vinton.mp3" , 
//       "/songs/Next%20To%20Me%20-%20Imagine%20Dragons.mp3"
//    ];

// return songs
// }

// const PlayMusic = (track)=>{
//   currentSong.src = track
//   currentSong.play()
//   play.src = "pause.svg"
//   const trackName = track.substring(track.lastIndexOf('/') + 1); // Extract track name from URL
//   document.querySelector(".songinfo").innerHTML = trackName; // Set track name as inner HTML
  
//   document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
// }

//  async function main() {
//    // Get the list of songs
//    songs = await getsongs();

//    // show all the songs in the playlist
//  let songUL = document.querySelector(".SongList").getElementsByTagName("ul")[0]
//  for (const song of songs) {
//    songUL.innerHTML = songUL.innerHTML + `<li> <img src="music.svg" alt="">
//                         <div class="info">
//                          <div> ${song.replaceAll("%20", " ")} </div>
//                          <div>Vaibhav</div>
//                        </div>
//                           <div class="playnow">
//                            <span>Play Now</span>
//                       <img src="play.svg" alt="">
//                    </div> </li>`;
//  }

// //  Attach an Event Listener to each songs.
// Array.from(document.querySelector(".SongList").getElementsByTagName("li")).forEach(e=>{
//   e.addEventListener("click", element=>{
//     (e.querySelector(".info").firstElementChild.innerHTML)
//     PlayMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//     // trim() removes whitespace characters fro strings. eg- space, new line, tab
//     // inner html is string here.
//   })
  
// })

// // attach an Event listener on previous, play and next.
// play.addEventListener("click", ()=>{
//   if(currentSong.paused){
//     currentSong.play()
//     play.src = "pause.svg"
//   }
//   else{
//     currentSong.pause()
//     play.src = "play.svg"
//   }
 
// })

// // listen for timeUpdate Event
// currentSong.addEventListener("timeupdate", () => {
//   console.log(currentSong.currentTime, currentSong.duration);
//   document.querySelector(".songtime").innerHTML = 
//   `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
//   document.querySelector(".circle1").style.left = (currentSong.currentTime/ currentSong
//   .duration)*100 + "%";
// });
// // important info:- Sure! Imagine currentSong as a music player. When you set its src (source) to a URL (the location of an audio file), it's like putting a song into the player. Then, when you call play() on currentSong, it's like pressing the play button on the player, and the song starts playing. So, currentSong is indeed the player that handles the currently playing song in the PlayMusic function.


// // add an Eventlistener TO SEEKBAR to move from left to right
// document.querySelector(".seekbar").addEventListener("click", e=>{
//  let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
// document.querySelector(".circle1").style.left = percent + "%";
// currentSong.currentTime = ((currentSong.duration)*percent)/100;
// })




// // add an EventListener to previous
// previous.addEventListener("click", () => {
//   console.log("Previous clicked");

//   // Get the filename of the current song
//   let currentFileName = currentSong.src.split('/').pop();

//   // Find the index of the current song in the songs array
//   let index = songs.findIndex(song => song.includes(currentFileName));
//   console.log("Index:", index);

//   // Check if there is a previous song in the array
//   if (index > 0) {
//     // Play the previous song
//     PlayMusic(songs[index - 1]);
//     console.log("Playing previous song:", songs[index - 1]);
//   }
// });

// // add an EventListener to next
// next.addEventListener("click", () => {
//   console.log("Next clicked");

  // // Get the filename of the current song
  // let currentFileName = currentSong.src.split('/').pop();

  // // Find the index of the current song in the songs array
//   let index = songs.findIndex(song => song.includes(currentFileName));
//   console.log("Index:", index);

//   // Check if there is a next song in the array
//   if (index < songs.length - 1) {
//     // Play the next song
//     PlayMusic(songs[index + 1]);
//     console.log("Playing next song:", songs[index + 1]);
//   }
// });

// // add an event to volume
// document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",
// (e=>{
//      console.log("Setting volumr to", e.target.value, "/100")
//      currentSong.volume = parseInt(e.target.value)/100
// }))


// }
// main();


