# chrome-extension-udemybookmarkkiller

Hides inline video bookmark elements from Udemy, whose presence causes a persistence bug when skipping around the videos and is a huge annoyance of mine. Foreground.js waits 5 seconds before hiding elements, as after the page loads it can take a while for all the video elements to load. This may need to be increased, as Udemy's CDN isn't always up to snuff.

Install extension by entering the Extension menu in Chrome or Brave, and activating developer mode. Select 'Load unpacked', and select the local project directory.

Code is built for Manifest Version 3, and utilizes service worker for event handling.
