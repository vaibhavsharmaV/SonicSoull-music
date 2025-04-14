console.log("Let's write some JavaScript");

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
    songs = [
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
  console.log("is song pause:-", currentSong.paused)
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
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0"
})

//  eventlistner for close button
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-100%"
})



document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
  currentSong.volume = parseInt(e.target.value) / 100;
});

console.log(getSongs("card1"));
main("card1");
































