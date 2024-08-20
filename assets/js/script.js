const startGame = document.querySelector("#start-page button");
const answers = document.querySelectorAll("#answers button");
const scores = document.querySelector("#scores");
const restart = document.querySelector(".restart");
const tracks = document.getElementsByTagName("audio");
const gamePlay = document.querySelector("#gamePlay");
const startPage = document.querySelector("#start-page")
const endGame = document.querySelector("#endGame");
const next = document.querySelector("#nextSong");
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
        // setTimeout(playNextSong, 2000);  
        scores.innerHTML = `Score: ${score}`;
        playNextSong();
      
    };

    
    /** Adding random songs to the array*/
 
    const chooseSong = () => {
    for (let i=0; gameSongs.length < 7; i++) {
       let random = Math.ceil(Math.random() * 10);

        if(gameSongs.includes(random)) {
        } else {
            gameSongs.push(random)
        } console.log(gameSongs);
    }
 }   

  const playNextSong = () => {
    assignSongs()
};

const assignSongs = () => {
    switch (turn) {
        case 1: song = gameSongs[0];
        break;
        case 2: song = gameSongs[1];
        break;
        case 3: song = gameSongs[2];
        break;
        case 4: song = gameSongs[3];
        break;
        case 5: song = gameSongs[4];
        break;
        case 6: song = gameSongs[5];
        break;
        case 7: song = gameSongs[6];
        break;
    }
    playSongs()
};

// const tracks = [
//         {title:"Any", file: "assets/songs/any.mp3"},
//         {title:"Back Door", file: "assets/songs/back-door.mp3"},
//         {title:"Chk Chk Boom", file: "assets/songs/chk-chk-boom.mp3"},
//         {title:"Christmas Evel", file: "assets/songs/christmas-evel.mp3"},
//         {title:"Cover Me", file: "assets/songs/cover-me.mp3"},
//         {title:"Deep End", file: "assets/songs/deep-end.mp3"},
//         {title:"Heaven", file: "assets/songs/heaven.mp3"},
//         {title:"Lalala", file: "assets/songs/lalala.mp3"},
//         {title:"Taste", file: "assets/songs/taste.mp3"},
//         {title:"Topline", file: "assets/songs/topline.mp3"},
//     ];

const playSongs = () => {
    if (song === 1) {
        tracks[0].play()
        prepareAnswers()
    } else if (song === 2) {
        tracks[1].play()
        prepareAnswers()
    } else if (song === 3) {
        tracks[2].play()
        prepareAnswers()
    } else if (song === 4) {
        tracks[3].play()
        prepareAnswers()
    } else if (song === 5) {
        tracks[4].play()
        prepareAnswers()
    } else if (song === 6) {
        tracks[5].play()
        prepareAnswers()
    } else if (song === 7) {
        tracks[6].play()
        prepareAnswers()
    } else if (song === 8) {
        tracks[7].play()
        prepareAnswers()
    } else if (song === 9) {
        tracks[8].play()
        prepareAnswers()
    } else if (song === 10) {
        tracks[9].play()
        prepareAnswers()
    }
};

const prepareAnswers = () => {
    if (song === 1) {
        answers[0].innerHTML = 'Comflex'
        answers[1].innerHTML = 'Any'
        answers[2].innerHTML = 'Blurred Lines'
        rightAnswer = 'Any'
    } else if (song === 2) {
        answers[0].innerHTML = 'Thnderous'
        answers[1].innerHTML = 'Circus'
        answers[2].innerHTML = 'Back Door'
        rightAnswer = 'Back Door'
    } else if (song === 3) {
        answers[0].innerHTML = 'Chk Chk Boom';
        answers[1].innerHTML = 'Megaverse';
        answers[2].innerHTML = 'Chaos';
        rightAnswer = 'Chk Chk Boom';
    } else if (song === 4) {
        answers[0].innerHTML = 'Cristmas Song'
        answers[1].innerHTML = 'Christmas Evel'
        answers[2].innerHTML = 'Feliz Navidad'
        rightAnswer = 'Christmas Evel';
    } else if (song === 5) {
        answers[0].innerHTML = 'Leave'
        answers[1].innerHTML = 'My Pace'
        answers[2].innerHTML = 'Cover Me'
        rightAnswer = 'Cover Me'
    } else if (song === 6) {
        answers[0].innerHTML = 'Deep End'
        answers[1].innerHTML = 'Soul'
        answers[2].innerHTML = 'Deep Inside'
        rightAnswer = 'Deep End'
    } else if (song === 7) {
        answers[0].innerHTML = 'God`s Menu'
        answers[1].innerHTML = 'Heaven'
        answers[2].innerHTML = 'Social Path'
        rightAnswer = 'Heaven'
    }  else if (song === 8) {
        answers[0].innerHTML = 'Maniac'
        answers[1].innerHTML = 'Lalala'
        answers[2].innerHTML = 'Feel the Rock'
        rightAnswer = 'Lalala'
    }  else if (song === 9) {
        answers[0].innerHTML = 'Red Lights'
        answers[1].innerHTML = 'Fake Eyes'
        answers[2].innerHTML = 'Taste'
        rightAnswer = 'Taste'
    }  else if (song === 10) {
        answers[0].innerHTML = 'Topline'
        answers[1].innerHTML = 'Domino'
        answers[2].innerHTML = 'Boom'
        rightAnswer = 'Topline'
    }
};

answers.forEach(answer => {
    answer.onclick = () => {
        currentAnswer = answer.innerHTML
        if (question === 'song' && clicked === false && rightGivenAnswer === false){
            givenAnswer++
            if (currentAnswer === rightAnswer) {
                score += 1
                answer.style.backgroundColor = 'green'
                rightGivenAnswer = true
            } else {
                answer.style.backgroundColor = 'red'
                score +=0
            } clicked = true
        } scores.innerHTML = `Score: ${score}`
    }
}) ; 

nextSong = () => {
    if (turn < 7) {
        turn++
        // timer.innerHTML = 10
        answers.forEach(answer => {answer.innerHTML = ''})
        // answers.forEach(answer => {answer.style.backgroundColor = 'unset'})
        clicked = false;
        rightGivenAnswer = false;
        givenAnswer = 0;
        question = 'song'
        // setTimeout(playNextSong, 1000)
        if (turn < 6) {
            next.innerHTML = 'Next Song'
        } else if (turn < 10){
            next.innerHTML = 'Last Song'
        } else {
            next.innerHTML = 'End'
        }
    } else {
        winner()
    }
};


const winner = () => {
        gamePlay.style.display = 'none'
        endGame.style.display = 'block'
        result.innerHTML = `Well done! <br> You totalised ${score} points`
    };

restart.onclick = () => {
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
    };
    

    // answers[3].addEventListener('click', () => {
//     answers[3].style.display = 'none'
//     restart.style.display = 'none'
//     nextSong()
// });

// const tracks = [
//     {title:"Any", file: "assets/songs/any.mp3"},
//     {title:"Back Door", file: "assets/songs/back-door.mp3"},
//     {title:"Chk Chk Boom", file: "assets/songs/chk-chk-boom.mp3"},
//     {title:"Christmas Evel", file: "assets/songs/christmas-evel.mp3"},
//     {title:"Cover Me", file: "assets/songs/cover-me.mp3"},
//     {title:"Deep End", file: "assets/songs/deep-end.mp3"},
//     {title:"Heaven", file: "assets/songs/heaven.mp3"},
//     {title:"Lalala", file: "assets/songs/lalala.mp3"},
//     {title:"Taste", file: "assets/songs/taste.mp3"},
//     {title:"Topline", file: "assets/songs/topline.mp3"},
// ];


// const runTimer = () => {
//     if (timer.innerHTML !== '0') {
//         timer.innerHTML--
//     } else {
//         clearInterval(myvar);
//         question = '';
//         restart.style.display = 'block';
//     }
// }