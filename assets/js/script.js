const startGame = document.querySelectorAll("#start-button");
const answers = document.querySelectorAll("#answers button");
const scores = document.querySelector("#scores");
const restart = document.querySelectorAll(".restart");
const tracks = document.getElementsByTagName("audio");
const gamePlay = document.querySelector("#gamePlay");
const startPage = document.querySelector("#start-page");
const endGame = document.querySelector("#endGame");
const next = document.querySelector("#nextSong");
const result = document.querySelector("#endGame h2");
const songsLeftElement = document.getElementById("songsLeft");
const totalSongs = 10;
const countDownElement = document.getElementById("countdown");
const initialTime = 15;

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
let currentSong;
let countDownInterval;
let timeLeft = initialTime;

// Start the game and transition to the gamePlay section
startGame.forEach(button => {
button.onclick = () => {
    startPage.style.display = 'none';
    gamePlay.style.display = 'flex';
    next.innerHTML = 'Next Song';
    updateSongsLeft();
    chooseSongs();
    scores.innerHTML = `Score: ${score}`;
    playNextSong();
};
});

// Function for timer

const startCountdown = () => {
    timeLeft = initialTime;
    countDownElement.innerHTML = `Timer: ${timeLeft}`;
    countDownInterval = setInterval(() => {
        timeLeft--;
        countDownElement.innerHTML = `Timer: ${timeLeft}`;
        if(timeLeft <= 0){
            clearInterval(countDownInterval);
            handleTimeOut();
        }
    },1000);
};

//This function will play next song when the time is over 
const handleTimeOut = () => {
    nextSong();
    }

// Function for updating how many songs left till the end of the game
const updateSongsLeft = () => {
    const songsLeft = totalSongs - turn;
    songsLeftElement.innerHTML = `Songs left: ${songsLeft}`;
};

// Play the next song
const playNextSong = () => {
    assignSong();   
};

// Assign the current song based on the turn
const assignSong = () => {
    song = gameSongs[turn - 1];
    currentSong = song;
    playSong();
};

// Add random songs to the array
const chooseSongs = () => {
    while (gameSongs.length < 27) {
        let random = Math.ceil(Math.random() * 27);
        if (!gameSongs.includes(random)) {
            gameSongs.push(random);
        }
    }
};

const stopAllTracks = () => {
    Array.from(tracks).forEach(track => {
        track.pause();
        track.currentTime = 0; // Reset to the start
    });
};

// Play the current song and prepare answers
const playSong = () => {
    if (song >= 1 && song <= 27) {
        // Stop previous track
        stopAllTracks(); 
        // Play the new track
        const currentTrack = tracks[song - 1];
        currentTrack.play();
        // Set volume to 10% 
        currentTrack.volume = 0.1;
        prepareAnswers();
        startCountdown();
    }
};

// Prepare answers based on the current song
const prepareAnswers = () => {
    const answersData = [
        { options: ['Comflex', 'Any', 'Blurred Lines'], correct: 'Any' },
        { options: ['Thunderous', 'Circus', 'Back Door'], correct: 'Back Door' },
        { options: ['Chk Chk Boom', 'Megaverse', 'La Vida Loka'], correct: 'Chk Chk Boom' },
        { options: ['Cristmas Song', 'Christmas Evel', 'Feliz Navidad'], correct: 'Christmas Evel' },
        { options: ['Leave', 'My Pace', 'Cover Me'], correct: 'Cover Me' },
        { options: ['Deep End', 'Soul', 'Deep Inside'], correct: 'Deep End' },
        { options: ['God`s Menu', 'Heaven', 'Social Path'], correct: 'Heaven' },
        { options: ['Maniac', 'Lalala', 'Feel the Rock'], correct: 'Lalala' },
        { options: ['Red Lights', 'Fake Eyes', 'Taste'], correct: 'Taste' },
        { options: ['Topline', 'Domino', 'Boom'], correct: 'Topline' },
        { options: ['Taste', 'Charmer', 'Drive'], correct: 'Charmer'},
        { options: ['Megaverse', 'La Vida Loka', 'Chk Chk Boom'], correct: 'Chk Chk Boom'},
        { options: ['Circus', 'Zone', 'Domino'], correct: 'Circus'},
        { options: ['Boom', 'Topline', 'Domino'], correct: 'Domino'},
        { options: ['Drive', 'Ride', 'All Night'], correct: 'Drive'},
        { options: ['5 Star', 'God`s Menu', 'Du du du'], correct: 'God`s Menu'},
        { options: ['Call My Name', 'Fame', 'Hall of Fame'], correct: 'Hall of Fame'},
        { options: ['PacMan', 'Item', 'Game'], correct: 'Item'},
        { options: ['Maniac', 'S-Class', 'Lalala'], correct: 'Maniac'},
        { options: ['Universe', 'Thunderous', 'Megaverse'], correct: 'Megaverse'},
        { options: ['Stray Kids', 'Mirror', 'Miroh'], correct: 'Miroh'},
        { options: ['Taste', 'You', 'Red Lights'], correct: 'Red Lights'},
        { options: ['Miroh', 'Side Effects', 'Mirror'], correct: 'Side Effects'},
        { options: ['Sorry I Love You', 'Heaven', 'DLMLU'], correct: 'Sorry I Love You'},
        { options: ['Hell Kitchen', 'Super Bowl', 'Topline'], correct: 'Super Bowl'},
        { options: ['The Sound', 'Heaven', 'Side Effects'], correct: 'The Sound'},
        { options: ['Back Door', 'Thunderous', 'Circus'], correct: 'Thunderous'},
    ];

    const { options, correct } = answersData[song - 1];
    answers.forEach((answer, index) => {
        answer.innerHTML = options[index];
    });
    rightAnswer = correct;
};

// Handle answer selection
const handleAnswer = (answer) => {
    if (question === 'song' && !clicked && !rightGivenAnswer) {
        clearInterval(countDownInterval);
        currentAnswer = answer.innerHTML;
        clicked = true;
        if (currentAnswer === rightAnswer) {
            score++;
            answer.style.backgroundColor = 'green';
            rightGivenAnswer = true;
        } else {
            answer.style.backgroundColor = 'red';
        }
        updateSongsLeft();
        scores.innerHTML = `Score: ${score}`;        
        setTimeout(nextSong, 1000);
    }
};

// Event listeners for touch/click behavior
answers.forEach(answer => {
    let isTouch = false;

    answer.addEventListener('touchstart', (e) => {
        isTouch = true;
        e.preventDefault(); // Prevent default touch behavior
    });

    answer.addEventListener('touchend', (e) => {
        if (isTouch) {
            e.preventDefault(); // Prevent default touch behavior
            handleAnswer(answer);
            isTouch = false;
        }
    });

    answer.addEventListener('click', (e) => {
        if (!isTouch) {
            handleAnswer(answer);
        }
    });
});

// Modify resetForNextSong to re-enable buttons
const resetForNextSong = () => {
    answers.forEach(answer => {
        answer.innerHTML = '';
        answer.style.backgroundColor = '';
    });  
    // startCountdown();
    updateSongsLeft();
    stopAllTracks();
    clicked = false;
    rightGivenAnswer = false;
    givenAnswer = 0;
    question = 'song';
};

// Move to the next song or end the game
const nextSong = () => {
    if (turn < 10) { 
        turn++;
        resetForNextSong();
        setTimeout(playNextSong, 2000);
    } else {
        stopAllTracks();
        showWinner();
    }
};

// Display the winner screen
const showWinner = () => {
    gamePlay.style.display = 'none';
    endGame.style.display = 'block';
    result.innerHTML = `Well done! <br> Your final score: <br> ${score} of 10`;
};

// Restart the game
restart.forEach(button => {
button.onclick = () => {
    gameSongs = [];
    turn = 1;
    score = 0;
    question = 'song';
    clicked = false;
    rightGivenAnswer = false;
    stopAllTracks();
    scores.innerHTML = `Score: ${score}`;
    endGame.style.display = 'none';
    gamePlay.style.display = 'none';
    startPage.style.display = 'flex';
    answers.forEach(answer => {
        answer.innerHTML = '';
        answer.style.backgroundColor = '';
    });
};
});