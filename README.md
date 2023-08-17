# Tweeter Project

Tweeter is a simple, single-page Twitter clone. Tweeter is a better alternative as there is no weirdness going on, no toxicity, and it's all about having fun! This app was made using JavaScript, CSS, and HTML.

Live demo (might load slowly): [Tweeter](https://tweeter-rlgc.onrender.com/)

!["Tweeter"](https://github.com/diannegabriel/tweeter/blob/master/docs/overall.gif)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Tune into <http://localhost:8080/> in your browser and tweet away!

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5


## How To Use

Have something witty to say? Or have some weird shower thoughts to share? No worries! Simply click the down arrow on the top right side of the page. Once the form shows up, start typing what's on your mind, and submit when you are done!

If you have nothing to share and are simply feeling curious about what other people are up to, scroll down through your timeline to see what everybody else is tweeting. Simple as that!

## Features

### Toggle Form
Afraid of accidentally typing something and accidentally submitting it? No worries! Tweeter has a sliding feature that shows or hides the text form. No more oopsies!
!["Toggle form"](https://github.com/diannegabriel/tweeter/blob/master/docs/toggle_compose.gif)

### Success Event
Tweeter confirms your tweet has been posted by notifying you. The notification automatically goes away and you are more than welcome to tweet more or browse your timeline.
!["Success Event"](https://github.com/diannegabriel/tweeter/blob/master/docs/success.gif)

### Errors
Oh no! Did you receive an error instead of a success notification? Either you may have tried to send an empty tweet or you have exceeded the character limit.
!["Error - Empty Form"](https://github.com/diannegabriel/tweeter/blob/master/docs/error_empty.gif)
!["Error - Exceeds Character Limit"](https://github.com/diannegabriel/tweeter/blob/master/docs/error_characters.gif)

### End Timeline
I get it... Tweeter can be super addicting. Sadly, your timeline hits the end and you have to start reading new tweets instead. Tweeter lets you know when you've hit the wall and if you click the up arrow button beside it, it takes you all the way to the top!
!["End Timeline"](https://github.com/diannegabriel/tweeter/blob/master/docs/end_timeline.gif)

### Responsive Display
No matter how big or small your browser, no matter how squished your browser is, trust me, Tweeter will always work!
!["Responsive Display"](https://github.com/diannegabriel/tweeter/blob/master/docs/responsive.gif)