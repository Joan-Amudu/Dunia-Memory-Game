# DUNIA

The deployed site can be found [here](https://joan-amudu.github.io/Dunia-Memory-Game/)

# Table of Content
[General Information](#general-information)

[How to Play](#how-to-play)

[User Experience](#user-experience)

[Features](#features)

[Technologies](#technologies)

[Testing](#testing)

[Deployment](#deployment)

[Credits](#credits)

[Acknowledgements](#acknowledgements)

# General Information
Dunia in Kiswahili means - The World. This memory game will be based on the world map and is inspired by my love for travel.

The game is based on matching a country and it's capital city. The goal is to have several geographical regions of the world. However this particlular project will be based on europe.

Europe is made up of 50 countries. so, at the hard level, all countries will have to be matched with their repective capital cities. At the medium level, only 35 countries will be available and at the easy level, only 15 countries.

The game is supposed to be fun and can be played by everyone. 

the game will be further developed beyond the scope of this project to include other regions: Oceania, Asia, South East Asia, North America, South America and Africa.

# How to Play
To play, simply wait for the country and capital city to be shown (3 pairs for the easy level) and then match the pairs. 

Any correct matches will score a point. Wrong matches will also be recorded.

# User Experience 
This section highlights the business objectives and user experience .

## Business Objectives 



## User Stories
* As a user I want to quickly know what the game is about.
* As a player, I want instructions on how to play the game, so that I know what to expect.
* As a player I want to go through different levels of the game.
* As a player I want to see my progress through a scoreboard.
* As a player, I want to be able to mute/unmute any sounds


## Design 
The webiste's design and layout is based on fonts, colors, wireframes, images and icons.

### Fonts
* [Google Fonts](https://fonts.google.com/) was imported to CSS with the Oswald font family being the main font and San Serif the fall back font.

### Wireframes
* Wireframes were created using the [Balsamiq](https://balsamiq.com/wireframes/) software.



* A pdf of the wireframes can be found [here](/Assets/Wireframes/Dunia-Memory-Game.pdf). This file can also be downloaded from Github. (**Please Note:** _[Adobe Acrobat Reader](https://get.adobe.com/reader/) is required to view files in pdf format_).


# Features
lorem ipsum....
    
 
# Technologies
This project is created with:
* HTML5 - used for building the website.
* CSS3 - for styling elements.
* Google Fonts - .
* Bootstrap - to customise the site as a responsive mobile-first site.

* Font Awesome - for Icons.
* Balsamic - to creation of the Wireframes.
* GitHub - Used for hosting the code and version control.
* GitHub Pages - This is where the site is deployed.

# Testing 

## Testing User stories
lorem ipsum....

## Functional Testing
### All pages
The testing below is identical on all pages.
Action | Expected Result | Pass/Fail 
---------------|---------------|---------------
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
||



### Home Page
Action | Expected Result | Pass/Fail 
---------------|---------------|---------------
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
||


### Contact Us Page
Action | Expected Result | Pass/Fail 
---------------|---------------|---------------
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
Test Case 1| N/A | Fail
||

## Validators
- [HTML Validator](https://validator.w3.org/) .
- [CSS Validator](https://jigsaw.w3.org/css-validator/) .

## Brower Compatitbility
This will be tested on the following browsers:
  - Google Chrome
  - Microsoft Edge
  - Firefox
  - Safari
  - Internet Explorer

## Responsiveness

  

# Deployment
This website was created in gitpod, which is linked to Github. All changes were commited and pushed to Github.

## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Joan-Amudu/Dunia-Memory-Game).
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. Click save.
6. The page will automatically publish to GitHub pages. 
7. Scroll back down through the page to locate the now published site [link](https://joan-amudu.github.io/Dunia-Memory-Game/) in the "GitHub Pages" section.

### Forking
To fork this respository:

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
2. Under the repository name, click Code.
3. To clone the repository, select HTTPS and copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type **git clone**, and then paste the URL you copied in Step 3.

```
 git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
    * To clone this particular repository:
    git clone https://github.com/Joan-Amudu/Dunia-Memory-Game.git

7. Press Enter. Your local clone will be created.
8. Change into the directory being created.
9. Clicking index.html, opens the site in a browser.

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) for more information about cloning repositories.


# Credits
Below are the resources that were used to create this website.
## Code
javascript code and structure inspired by [Ania Kubrow.](https://youtu.be/tjyDOHzKN0w) and [Port exe](https://youtu.be/3uuQ3g92oPQ)


JavaScript Audio Controls code snippet from [Adam Khoury.](https://youtu.be/hsSXzdn_0Gg)



still issues with starting and stopping musing using button.

for count timer --- [stackover flow](https://stackoverflow.com/questions/43317415/create-a-count-up-timer-in-javascript)

  var elem = $('#countTimer');
  var count = 0;
  setInterval(function() {
  if (count > 60) { // We check if the timer is in seconds or mins
    var time = ++count; // We get a copy of the time in 'seconds'
    time = parseInt(time / 60); // We convert it to mins
    $(elem).text(time + 'm');
  } else { // Simmilarly we can also add a condition to check hours with s=3600
    $(elem).text(++count + 's');
  }
}, 1000);

## Images
Back face Image on cards by James Lee: [Pexels](https://www.pexels.com/photo/close-up-photo-of-feathers-2625664/).


## Inspirations

* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/), a popular front-end open source toolkit has been used for the columns, rows, buttons and form.
* [Font Awesome](https://fontawesome.com/) was used for the social media icons. Here, the free icons were selected and styled to match the overall color-scheme of the website. 

* [Pexels](https://www.pexels.com/) - Used for free stock.
    - [cottonbro](https://www.pexels.com/@cottonbro)
    
[pause icon](By GitHub - https://github.com/github/octicons, MIT, https://commons.wikimedia.org/w/index.php?curid=33440636)

## Other resources
* [w3schools.com](https://www.w3schools.com/default.asp): used for a deeper understanding of HTML and CSS.
* [StackOverflow](https://stackoverflow.com/): Used for troubleshooting. 
* YouTube - [Ania Kubow](https://youtu.be/tjyDOHzKN0w)
* Code Institute course modules.

# Acknowledgements
I would like to acknowledgement my mentor Brian Macharia who guided me throughout the project.

