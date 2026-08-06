let container = document.querySelector("#container")
container.style.border = "1px solid black";
container.style.padding = "10px";

// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//     alert('Hey Nate. How\'s life?');
// }

// // select button
// let btn = document.querySelector("#btn");
// // add event listener
// btn.addEventListener("click", function changeBGColor(e) {
//     if (btn.style.backgroundColor !== "red") {
//         btn.style.backgroundColor  = "red";
//     } else {
//         btn.style.backgroundColor  = "";
//     }
// })

// select all buttons
// let buttons = document.querySelectorAll("button");
// // add event listener
// buttons.forEach((button) => {
//     button.addEventListener("click", function changeBGColor(e) {
//         if (button.style.backgroundColor !== "red") {
//             button.style.backgroundColor = "red";
//         } else {
//             button.style.backgroundColor = "";
//         }
//     })
// })

// // select button
// let btn = document.querySelector("#btn");

// event: before page prints
// alert appears without pressing the button beforehand
// window.addEventListener("beforeprint", function printMessage(e) {
//     alert("You are about to print this webpage");
//     btn.style.backgroundColor = "green";
    
// })

// event: before page unloads
// window.addEventListener("beforeunload", function addText(e) {
//     let newDiv = document.createElement("div");
//     newDiv.textContent = "This text appears when you close this webpage";
//     container.appendChild(newDiv);
//     newDiv.style.fontSize = "5rem";
// })


// add input field
// let inputBlur = document.createElement("input");
// attach to dom
// container.appendChild(inputBlur);
// add id
// inputBlur.setAttribute("id", "blurInput")
// check id value
// console.log(inputBlur.getAttribute("id"));
// inputBlur.setAttribute("type", "text");
// check id value
// console.log(inputBlur.getAttribute("id"));
// check type attribute
// console.log(inputBlur.getAttribute("type"));
// event: blurs element
// window.addEventListener("blur", function removeFocus(e) {
    // container.style.backgroundColor = "green";
// })

// doomsday
// https://youtu.be/399Ez7WHK5s?si=ie1hFhQ7GAJtUl5a
// f4
// https://youtu.be/pAsmrKyMqaA?si=jLmeh6R6J0zlFYyq

// add video
let video = document.createElement("video");
// add video attributes
video.width = 320;
video.height = 240;
video.controls = true;
// add video source
let addVideoSource = document.createElement("source");
// add source attributes
addVideoSource.src = "./The Fantastic Four_ First Steps Teaser Trailer (2025).mp4"
// // intentionally use broken video link instead to use in error method
// addVideoSource.src = "./abc.mp4" 
// add placeholder text
let placeholderText = document.createElement("p");
// add textcontent to placeholder
placeholderText.innerHTML = "Video loading...";

// attach to dom
video.appendChild(addVideoSource);
// attach placeholder text to dom
video.appendChild(placeholderText);
console.log(video.childNodes);
// attach to dom
container.appendChild(video);

// // add event listener for when video is loaded
// video.addEventListener("loadstart", function addText(e) {
//     // add new element
//     let text = document.createElement("p");
//     // add text
//     text.textContent = "You can now enjoy your video";
//     // add style attributes
//     text.style.fontSize = "30px";
//     text.style.backgroundColor = "green"
//     // attach to dom
//     video.after(text);
//     alert("Bon appetit!");
// })

// // add event listener for duration change
// video.addEventListener("durationchange", function showAlert(e) {
//     alert("I just figured out the duration!");
// })

// // add event listener for when video metadata is loaded
// video.addEventListener("loadedmetadata", function showAlert(e) {
    // alert("Metadta is loaded!")
// })

// // add event listener for when first frame is loaded
// video.addEventListener("loadeddata", function showAlert(e) {
//     alert("First frame of video has loaded!");
// })

// // add event for when video starts downloading
//i video loads in chunks
//i fires continously as the video chuncks downloads 
// video.addEventListener("progress", function showAlert(e) {
//     alert("Video is downloading.");
// })

// // add event for when video can play/start
// video.addEventListener("canplay", function showAlert(e) {
//     alert("Video can be played");
// })

// // add event for when video can be played through
// video.addEventListener("canplaythrough", function showAlert(e) {
//     alert("You can now play till the end of the video");
// })

// // add event for when user plays video
// video.addEventListener("play", function showAlert(e) {
//     alert("Playback has started")
// })

// // add event for when the video starts rendering
// video.addEventListener("playing", function showAlert(e) {
//     alert("Playback has began");
// })

// // add event for returning the current video time
// video.addEventListener("timeupdate", function logCurrentTime(e) {
//     console.log(video.currentTime);
// })


// // add event for when the video ends
// video.addEventListener("ended", function showMessage(e) {
//     alert("Playback has ended");
// })

// // add event for when video aborts/is aborted before it fully loads
// video.addEventListener("abort", function showMessage(e) {
//     alert("Video has been aborted")
// })

// // remove the source after 500ms
// //i this simulates the video abort before it fully load
// setTimeout(function() {
//     video.src = ""; // Clears the source, triggering the abort event
// }, 5000);

// // add event which for when a video loading encounters an error
// //i the event needed o be attached to the source where the src of the video was added
// //i this i because the source errors don't USUALLY reach the video
// //i an alternative is to add the video link directly in the video element and then attaching the event ot the video  
// addVideoSource.addEventListener("error", function showMessage(e) {
//     alert("Error! This video link is broken!")
// })


// // create element for warning message
// let warning = document.createElement("p");
// container.append(warning);

// // add event for when video is paused
// video.addEventListener("pause", function showMessage(e) {
//     warning.textContent = "Video playback is paused";
// })

// // add another event for when video is played
// //i play() method is used for this
// video.addEventListener("play", function showMessage(e) {
//     warning.textContent = "";
// })

// // event for when video speed is changed
// video.addEventListener("ratechange", function showMessage(e) {
//     alert("Playback speed has changed");
//     alert("1");
// }) 

// video.addEventListener("ratechange", function showMessage(e) {
//     console.log(`Rate changed! Current speed: ${video.playbackRate}x`);
//     console.log(`Playback speed has changed to: ${video.playbackRate}x`);
// });

// // store present playback
// let lastRecordedRate = video.playbackRate;

// // add event for when the play rate/speed rate is changed
// video.addEventListener("ratechange", function showMessage(e) {
//     //i the system records the playback rate 2 times
//     //i 1st time: when the system captures the present playback rate then updates the playback rate to the user choice
//     //i 2nd time: when the system updates the ui and state to match the new playback speed

//     // proceed only if the present playback rate is not the same as the last recorded one
//     //i we can skip the 1st time the playback rate is recorded
//     if (video.playbackRate !== lastRecordedRate) {
//         lastRecordedRate = video.playbackRate;
//         console.log(`Rate changed! Current speed: ${video.playbackRate}x`);
//         console.log(`Playback speed has changed to: ${video.playbackRate}x`);
//     }
// });


// // add event for **after the user** seeks / clicks on another playback location / drags the mouse to a new playback position
//i fires when the player stops seeking
// video.addEventListener("seeked", function showMessage(e) {
//     console.log("User just changed playback position!")
// })

// // add event for during the period when the user is dragging the mouse along the playback position
// //i fires contiously while the player is seeking
// video.addEventListener("seeking", function showMessage(e) {
//     console.log("Seeking...")
// })

// // add event for when the browser is not able to download the video data because of the network
// //i its tough to simulate a network problem so i just need to be aware of this event and why it occurs
// window.addEventListener("stalled", function showMessage (e) {
//     ...
// })

// // add event for when each video chunk finishes downloadsing
// //i video loads in chunks
// //i fires continously each time a new video chunks downloads 
// video.addEventListener("suspend", function showMessage(e) {
//     console.log("Browser intentionally pausing video fetching for now...")
// })

// // add event for when the volume changes
// video.addEventListener("volumechange", function showMessage(e) {
//     alert("Volume changed");
// })

// // add the event for when the playback hasn't reached the downloaded data
// //i simulate by seeking ahead to position where video data hasnt loaded in yet
// video.addEventListener("waiting", function showMessage(e) {
//     alert("Not enough video data loaded yet!")
// })

// add anchor
let link = document.createElement("a");
// add attribute
link.href = "https://www.youtube.com/"
// add innertext
link.textContent = "Click to visit youtube"
// attach to dom
container.append(link);
console.log(link.childNodes);
// add btn
let btn = document.querySelector("#btn");
// add click event to btn
btn.addEventListener("click", (e) => {
    alert("Ze linke haz been cliked");
    alert(e.cancelable);
})


///////////

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

// --- CAPTURING PHASE LISTENERS (Going DOWN) ---

outer.addEventListener('click', (e) => {
  console.log('1. ⬇️ OUTER captured the event on the way down');
}, { capture: true }); // capture: true makes this run on the way down

middle.addEventListener('click', (e) => {
  console.log('2. ⬇️ MIDDLE captured the event on the way down');
}, { capture: true });


// --- TARGET PHASE ---

inner.addEventListener('click', (e) => {
  console.log('3. 🎯 INNER button hit (Target Phase)');
});


// --- BUBBLING PHASE LISTENERS (Going UP - Default) ---

middle.addEventListener('click', (e) => {
  console.log('4. ⬆️ MIDDLE bubbled the event on the way up');
}); // default is capture: false

outer.addEventListener('click', (e) => {
  console.log('5. ⬆️ OUTER bubbled the event on the way up');
});

