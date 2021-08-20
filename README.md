# chrome-extension-udemybookmarkkiller

Hides inline video bookmark elements from Udemy, whose presence causes a persistence bug when skipping around the videos and is a huge annoyance of mine. Foreground.js waits 5 seconds before hiding elements, as after the page loads it can take a while for all the video elements to load. This may need to be increased, as Udemy's CDN isn't always up to snuff.

To install extension in Chrome or Brave: 

1. Clone the repo
   ```sh
   git clone https://github.com/ggroce/chrome-extension-boiler-mv3.git
   ```
2. Enter the Extension menu in Chrome or Brave, and activate developer mode.

3. From the Extension menu, select 'Load unpacked', and select the local project directory this repo was cloned into.  

<br>
Code is built for Manifest Version 3, and utilizes service worker for event handling.



