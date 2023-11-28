const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume'); 
const singer_name = document.getElementsByClassName("top_singer")
const song_name = document.getElementsByClassName("top_name")

const play_thumbnail = document.getElementById("play_thumbnail")
const play_singer = document.getElementById("play_singer")
const play_song = document.getElementById("play_name")


const img_src = [
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Musafir.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Some%20of%20us.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Love%20Yourz.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Aaj%20kal%20zindagi.jpeg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/One%20love.jpeg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Iraaday.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Rank%201.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Check%20it%20out.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/Mathi%20Mathi.jpg",
    "https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/She%20dont%20know.jpg"
]


const songs = [ 
    'https://pagalnew.com/download128/3539',//Musafir
    'https://www.pagalvvorld.com/wp-content/uploads/2023/08/Some-Of-Us.mp3',
    'https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2023/07/J_Cole_-_Love_Yourz.mp3?_=2',
    'https://pwdown.info/113206/03.%20Aaj%20Kal%20Zindagi.mp3',
    'https://cdnsongs.com/music/data/Single_Track/202308/One_Love/128/One_Love_1.mp3',
    'https://paglasongs.com/files/download/id/14041',//iraaday
    'https://cdnsongs.com/music/data/Punjabi/202305/Never_Before_EP/128/Rank_1_1.mp3',
    'https://cdnsongs.com/music/data/Single_Track/202306/Check_It_Out/128/Check_It_Out_1.mp3', 
    'https://cdnsongs.com/music/data/Single_Track/202302/Mathi_Mathi/128/Mathi_Mathi_1.mp3',
    'https://cdnsongs.com/music/data/Single_Track/201901/She_Dont_Know_Blessed/128/She_Dont_Know_Blessed_1.mp3',
]

let currentSongIndex = 0;
let isPlaying = false;

function disappear_result(){
    document.getElementById("results").style.display = "none";
}

function playSong() {
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    isPlaying = true;
}

function playMe(index) {
    play_thumbnail.style.backgroundImage =  `url(${img_src[index]})`
    play_song.textContent = song_name[index].textContent
    play_singer.textContent = singer_name[index].textContent
    audioPlayer.src = songs[index];
    audioPlayer.play();
    playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    isPlaying = true;
}

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/play.png" width="40px" alt="">';
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '<img src="https://raw.githubusercontent.com/HiAmanAgrawal/music_player_kalvium/main/Assets/pause.png" width="38.5px" alt="">';
    }
    isPlaying = !isPlaying;
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong();
});

const song = document.getElementsByClassName("song")
console.log(song[1])
// song[0].onclick = () =>{
//     currentSongIndex = 0
//     playSong();
// }
// song[1].onclick = () =>{
//     currentSongIndex = 1
//     playSong();
// }
// song[2].onclick = () =>{
//     currentSongIndex = 2
//     playSong();
// }
// song[4].onclick = () =>{
//     currentSongIndex = 4
//     playSong();
// }
// song[5].onclick = () =>{
//     currentSongIndex = 5
//     playSong();
// }
// song[6].onclick = () =>{
//     currentSongIndex = 6
//     playSong();
// }
// song[7].onclick = () =>{
//     currentSongIndex = 7
//     playSong();
// }
// song[8].onclick = () =>{
//     currentSongIndex = 8
//     playSong();
// }
// song[9].onclick = () =>{
//     currentSongIndex = 9
//     playSong();
// }
// song[10].onclick = () =>{
//     currentSongIndex = 
//     playSong();
// }
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

playSong();

nextButton.onclick = () =>{
    audioPlayer.src.textContent = songs[6];
}
function performSearch() {
    
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    
    const items = [ "Musafir - Tushar Joshi",
                "Some of us.$ - KR$NA & AR Paisley",
                "love yourz - J. Cole",
                "rolling in the deep - Adele",
                "Aaj kal zindagi - Shankar Mahadevan",
                "One love - Shubh",
                "Irraday - Abdul Hannan & Rovalio",
                "Rank 1 - Jordan Sandhu",
                "Check it out. - Parmish Verma Ft. Paradox",
                "Mathi Mathi - Karan Randhawa",
                "She don't know. - Millind Gaba"];

    
    const results = [];

    
    for (let i = 0; i < items.length; i++) {
        if (items[i].toLowerCase().includes(searchTerm)) {
            results.push(items[i]);
        }
    }

   
    const resultContainer = document.getElementById("results");
    if (results.length > 0) {
        console.log(resultContainer)
        resultContainer.innerHTML = results.join(", ");
        resultContainer.style.display = "block"; // Hide the results
    } else {
        resultContainer.innerHTML = "No results found";
    }
    // resultContainer.innerHTML = results.length > 0 ?  results.join(", ") : "No results found.";
    // console.log(resultContainer)
} 



// if (results.length > 0) {
//     console.log(resultContainer)
//     resultContainer.innerHTML = results.join(", ");
//     resultContainer.style.display = "block"; // Hide the results
// } else {
//     resultContainer.innerHTML = "No results found";
// }
