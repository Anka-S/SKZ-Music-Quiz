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
const timer = document.querySelector('#timer');

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

// Start the game and transition to the gamePlay section
startGame.onclick = () => {
    startPage.style.display = 'none';
    gamePlay.style.display = 'flex';
    chooseSongs();
    scores.innerHTML = `Score: ${score}`;
    playNextSong();
};

// Add random songs to the array
const chooseSongs = () => {
    while (gameSongs.length < 7) {
        let random = Math.ceil(Math.random() * 10);
        if (!gameSongs.includes(random)) {
            gameSongs.push(random);
        }
    }
    console.log(gameSongs);
};

// Play the next song
const playNextSong = () => {
    assignSong();
};

// Assign the current song based on the turn
const assignSong = () => {
    song = gameSongs[turn - 1];
    playSong();
};

// Play the current song and prepare answers
const playSong = () => {
    if (song >= 1 && song <= 10) {
        tracks[song - 1].play();
        prepareAnswers();
    }
};

// Prepare answers based on the current song
const prepareAnswers = () => {
    const answersData = [
        { options: ['Comflex', 'Any', 'Blurred Lines'], correct: 'Any' },
        { options: ['Thunderous', 'Circus', 'Back Door'], correct: 'Back Door' },
        { options: ['Chk Chk Boom', 'Megaverse', 'Chaos'], correct: 'Chk Chk Boom' },
        { options: ['Cristmas Song', 'Christmas Evel', 'Feliz Navidad'], correct: 'Christmas Evel' },
        { options: ['Leave', 'My Pace', 'Cover Me'], correct: 'Cover Me' },
        { options: ['Deep End', 'Soul', 'Deep Inside'], correct: 'Deep End' },
        { options: ['God`s Menu', 'Heaven', 'Social Path'], correct: 'Heaven' },
        { options: ['Maniac', 'Lalala', 'Feel the Rock'], correct: 'Lalala' },
        { options: ['Red Lights', 'Fake Eyes', 'Taste'], correct: 'Taste' },
        { options: ['Topline', 'Domino', 'Boom'], correct: 'Topline' }
    ];

    const { options, correct } = answersData[song - 1];
    answers.forEach((answer, index) => {
        answer.innerHTML = options[index];
    });
    rightAnswer = correct;
};

// Handle answer selection
answers.forEach(answer => {
    answer.onclick = () => {
        if (question === 'song' && !clicked && !rightGivenAnswer) {
            currentAnswer = answer.innerHTML;
            clicked = true;
            if (currentAnswer === rightAnswer) {
                score++;
                answer.style.backgroundColor = 'green';
                rightGivenAnswer = true;
            } else {
                answer.style.backgroundColor = 'red';
            }
            scores.innerHTML = `Score: ${score}`;
        }
    };
});

// Move to the next song or end the game
// const nextSong = () => {
//     if (turn < 10) {
//         turn++;
//         resetForNextSong();
//         playNextSong();
//         updateNextButton();
//     } else {
//         showWinner();
//     }
// };

//  Add event listener for the "Next" button
document.addEventListener('DOMContentLoaded', () => {
    next.addEventListener('click', nextSong);
});

const nextSong = () => {
    console.log("Next song function called"); 
    if (turn < 7) { // Allow up to 10 turns
        turn++;
        resetGameState();
        setTimeout(playNextSong, 2000); // Delay before playing the next song

        // Update the 'next' button text based on the current turn
        if (turn < 6) {
            next.innerHTML = 'Next Song';
        } else if (turn === 6) {
            next.innerHTML = 'Last Song';
        } else {
            next.innerHTML = 'End';
        }
    } else {
        winner(); // End the game and show the winner screen
    }
};

// Helper function to reset the game state for the next song
const resetGameState = () => {
    timer.innerHTML = 15; // Reset timer display
    answers.forEach(answer => {
        answer.innerHTML = '';
        answer.style.backgroundColor = 'unset';
    });
    clicked = false;
    rightGivenAnswer = false;
    givenAnswer = 0;
    question = 'song';
};

// Reset state for the next song
const resetForNextSong = () => {
    answers.forEach(answer => {
        answer.innerHTML = '';
        answer.style.backgroundColor = '';
    });
    clicked = false;
    rightGivenAnswer = false;
    question = 'song';
};

// Update the next button text
const updateNextButton = () => {
    if (turn < 6) {
        next.innerHTML = 'Next Song';
    } else if (turn === 6) {
        next.innerHTML = 'Last Song';
    } else {
        next.innerHTML = 'End';
    }
};

// Display the winner screen
const showWinner = () => {
    gamePlay.style.display = 'none';
    endGame.style.display = 'block';
    result.innerHTML = `Well done! <br> You totalized ${score} points`;
    // Save the score to local storage
    localStorage.setItem('score', score);
};



// Restart the game
restart.onclick = () => {
    gameSongs = [];
    turn = 7;
    score = 0;
    question = 'song';
    clicked = false;
    rightGivenAnswer = false;
    scores.innerHTML = `Score: ${score}`;
    endGame.style.display = 'none';
    gamePlay.style.display = 'none';
    startPage.style.display = 'flex';
};