# SKZ Music Quiz

This quiz is designed to test your knowledge of Stray Kids’s discography while having fun.
Stray Kids is a dynamic K-Pop boy band, formed by JYP Entertainment in 2017. They are known for their powerful performances and self-produced music. With a unique blend of genres and meaningful lyrics, they have captivated audiences worldwide. 

The live link can be found here - [SKZ Music Quiz](https://anka-s.github.io/SKZ-Music-Quiz/) 

<img src = "assets/docs/responsive-design.jpeg">

## UX/UI

- __UX__

The site will be presented as simple but attractive and easy to navigate. 

- __User Stories:__

   -  As a user, I want to enjoy the interface of the website and receive positive experience.
   -  As a user, I want to have the opportunity to play the game on different devices.
   -  As a user, I want to be able to start the quiz so I can play the game.
   -  As a user, I want to see multiple options for answers so I can choose one answer from varieties.
   -  As a user, I want to see if my answer is right or wrong so I will know my progress.
   -  As a user, I want to go further when I guess the song so I don't need to wait while the song ends.
   -  As a user, I want to see my final score so I will know my result.
   -  As a user, I want: to see which answer was correct if I chose the wrong answer so I will learn more in the future.
   -  As a user, I want to have a countdown timer so I can see how much time I have for an answer.
   -  As a user, I want to know how many songs are left till the end of the game, so I will not lose interest.
   

- __Wireframes__

- Browser View:

<img src="assets/docs/wireframes/start-page-browser.png">

<img src="assets/docs/wireframes/play-game-browser.png">

<img src="assets/docs/wireframes/end-of-the-game-browser.png">

- Phone View:

<img src="assets/docs/wireframes/start-page-phone.jpeg">

<img src="assets/docs/wireframes/play-game-phone.jpeg">

<img src="assets/docs/wireframes/end-of-the-game-phone.jpeg">


## Features 

Detailing the existing and planned features and the value they bring.

### Existing Features

- __The background Image__

  - Presents a music band to the user

<img src = "assets/docs/features/hero-ph.jpg">

- __The logo of the group image__

  - Let users know the name of the band

<img src = "assets/docs/features/logo.jpeg">

- __Start Game section__

  - This section is engaging the user to press the button and start the music quiz

<img src = "assets/docs/features/start-game-button.jpeg">

- __Game Play section__

  - This section plays the song, that the user needs to guess. It has *multiple* options for answer, *restart* button, *Timer* countdown and *Songs Left* score.
  - *Timer* and *Songs Left* features show the user how much time is left for guessing the song and how many songs are left till the end of the game

<img src = "assets/docs/features/timer-and-songs-left.jpeg">

- __Correct/Wrong answer and Score__

  - When the user presses the button with the answer, it shows if this answer is correct or wrong highlighting the button with green or red color.
  - Also user can see his current score, which icreases when he presses the correct answer.

  <img src = "assets/docs/features/correct-answer.jpeg">
  <img src = "assets/docs/features/wrong-answer.jpeg">

- __The End of the Game section__

   - This section shows the user how many songs he guessed and proposes to play again.

   <img src = "assets/docs/features/end-of-the-game.jpeg">

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for the SKZ Music Quiz game. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media

<img src = "assets/docs/features/footer.jpeg">

### Features Left to Implement

- Show which answer was correct
- Answer buttons will randomly change their position
- Use API for the more attractive and interesting game

## Testing 

This game was tested on different devices:
### Desktop 
<img src = "assets/docs/testing/desktop-start-page.png">
<img src = "assets/docs/testing/desktop-game.jpeg">
<img src = "assets/docs/testing/desktop-correctanswer.jpeg">
<img src = "assets/docs/testing/desktop-wronganswer.png">
<img src = "assets/docs/testing/desktop-end.jpeg">

### Redmi 8 Pro
<img src = "assets/docs/testing/redmi8prostart.jpg">

### iPhone 12 Pro
<img src = "assets/docs/testing/iphone12progameplay.jpg">

### iPad Air 2
<img src = "assets/docs/testing/ipadair2.jpg">
<img src = "assets/docs/testing/ipadair2vertical.jpg">

### iPhone SE
<img src = "assets/docs/testing/iphonesewrong.jpg">

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/#validate_by_input)
  <img src="assets/docs/validator/HTML-validator.jpeg">

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  <img src="assets/docs/validator/CSS-validator.jpeg">

- JavaScript
   - No errors were found when passing through the official [JSHint](https://jshint.com/)
   <img src = "assets/docs/validator/JSHint.jpeg">

- LightHouse
  - The lighthouse test is used to give a score for performance, SEO, accessibility and best practices.
It returned scores of 98, 100, 100 & 100 on desktop devices and 89, 100, 100 & 100 on mobile devices respectively meaning the performance is optimised.

<img src = "assets/docs/validator/Lighthouse-desktop.jpeg"> 
<img src = "assets/docs/validator/Lighthouse-mobile.jpeg">

- Wave
  - No errors were detected when passing through the Wave [report](https://wave.webaim.org/report#/https://anka-s.github.io/SKZ-Music-Quiz/)
  <img src = "assets/docs/validator/wave-validator.jpeg">

### Unfixed Bugs

- The logo image goes over the game section and creates white space on small devices such as iPhone SE
<img src = "assets/docs/bugs/iphonesebug.jpg">

- On Apple devices, after choosing the answer, the answer button still highlights with a grey colour through the next turns till you will not select another answer or tap somewhere else on the screen of the phone.
<img src = "assets/docs/bugs/iphone12procorrect+bug.jpg">
<img src = "assets/docs/bugs/iphone12proanswerbug.jpg">

- On some Apple devices (such as iPad Air 2 and iPhone SE) the song plays only on the first turn.

- On Apple devices, sometimes songs don't play after the automatic switch when the countdown is over. And it works again after you select an answer.


## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [SKZ Music Quiz](https://anka-s.github.io/SKZ-Music-Quiz/) 


## Credits 

- I take inspiration for my game from this [Music Quiz](https://github.com/Ezio2994/music-quiz/) 

### Content 

- Icon for webpage created with Favicon generator (https://realfavicongenerator.net/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The CDN framework used for ready-made styling was [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/download/)
- Balsamiq used for wireframe
- [Perplexity](https://www.perplexity.ai/) used for debugging 
- [Miro boards](https://miro.com/app/board/uXjVK1tCs_I=/) used for planning the work process


### Media

- The photo used for the background was taken from [Peakpx](https://www.peakpx.com/) 
- The image for the logo was taken from [Stick png](https://www.stickpng.com/img/icons-logos-emojis/iconic-brands/stray-kids-logo)
- Songs taken from the [Internet Archive](https://archive.org/search?query=subject%3A%22Stray+Kids%22)
