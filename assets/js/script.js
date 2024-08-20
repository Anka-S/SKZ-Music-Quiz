const startGame = document.querySelector("#start-page button");
const answersButton = document.querySelectorAll("#answers button");
const scores = document.querySelector("#scores");
const restart = document.querySelector(".restart");
const timer = document.querySelector("#timer");
const audio = document.querySelectorAll("#songs audio");
const gamePlay = document.querySelector("#gamePlay");
const startPage = document.querySelector("#start-page")
const endGame = document.querySelector("#endGame");
const result = document.querySelector("#endGame h2");

let score = 0;
let gameSongs = [];
let song;
let currentAnswer;
let rightAnswer;
let question = 'song';
let clicked = false;
let givenAnswer = 0;
let rightGivenAnswer = false;
let turn = 1;

/**Run the game and transfer us to gamePlay section by clicking button "Start Game" */

startGame.onclick = () => {
        startPage.style.display = 'none';
        gamePlay.style.display = 'flex';
        chooseSong();
        setTimeout(playNextSong, 2000);  
        scores.innerHTML = `Score: ${score}`;
      
    };

    /** Adding random songs to the array*/
 
    const chooseSong = () => {
    for (let i=0; 7 >gameSongs.length; i++) {
       let random = Math.ceil(Math.random() * 10);

        if(gameSongs.includes(random)) {
        } else {
            gameSongs.push(random)
        } console.log(gameSongs);
    }
 }   

 const playNextSong = () => {
    assignSongs()
    startTimer()
};

// const assignSongs = () => {
//     if (turn >= 1 && turn <= 7) {
//         song = gameSongs[turn - 1];
//         playSongs();
//     } else {
//         console.error("Invalid turn value. Turn should be between 1 and 10.");
//     }
// };

// const tracks = [
//     // new Audio('../songs/any.mp3'),
//     // new Audio ('../songs/back-door.mp3')
// ];
// const answers = [];
// const songsData = [
//     {title: 'Any', answers: ['1', '2']},
//     {title: 'Back Door', answers: ['1', '2']},
//     {title: 'Chk Chk Boom', answers: ['1', '2']},
//     {title: 'Christmas Evel', answers: ['1', '2']},
//     {title: 'Cover Me', answers: ['1', '2']},
//     {title: 'Deep End', answers: ['1', '2']},
//     {title: 'Heaven', answers: ['1', '2']},
//     {title: 'Lalala', answers: ['1', '2']},
//     {title: 'Taste', answers: ['1', '2']},
//     {title: 'Topline', answers: ['1', '2']},
// ];
// // Function to play the song

// const playSongs = () => {
//     console.log(`song: ${song}, tracks length: ${tracks.length}`);
// if (song >=1 && song <=7){
//     tracks[song - 1].play();
//     prepareAnswers(song)
// } else {
//     console.error(`Track at index ${song - 1} is undefined.`);}
// };
// // Function to prepare answers

// const prepareAnswers = (songIndex) => {
//     const songData = songsData[songIndex - 1];
//     songData.answers.forEach((answer, index) => {
//         answers[index].innerHTML = answer; // Set the answer text
//     });
//     rightAnswer = songData.title; // Set the correct answer
// };
//     answersButton.onclick =() => {
//         currentAnswer = answersButton.innerHTML;
//         if (question === 'song' && clicked === false && rightGivenAnswer === false){
//             givenAnswer++;
//             if (currentAnswer === rightAnswer){
//                 score+=1;
//                 answersButton.style.backgroundColor = 'green';
//                 rightGivenAnswer = true;
//             } else {
//                 answersButton.style.backgroundColor = 'red';
//                 score +=0;
//             } 
//             clicked = true;
//             scores.innerHTML = `Score: ${score}`;
//         }
//     };

const runTimer = () => {
    if (timer.innerHTML !== '0') {
        timer.innerHTML--
    } else {
        clearInterval(myvar);
        question = '';
        restart.style.display = 'block';
    }
}

restart.onclick = () => {
        timer.innerHTML = 15
        gameSongs = [];
        turn = 1;
        score = 0;
        question = 'song'    
        clicked = false;
        rightGivenAnswer = false;
        givenAnswer = 0;
        scores.innerHTML = `Score: ${score}`;
        endGame.style.display = 'none';
        gamePlay.style.display = 'none';
        startPage.style.display = 'flex';
    }
    