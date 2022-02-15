# Lecture 3

### :house: Home task

0. Write a node.JS program with TypeScript that gets from the command line string parameter - path to JSON file, reads and parses its content. 
Then, program should create a folder “<JSON_filename>_pages”. For each link in the file get the HTML content of it and save it to the file in the created folder.
JSON file contains an array of strings - links. Example of the file you can find [here](/03_lecture/links.json).

1. Write a node.JS program with TypeScript that gets from the command line numeric parameter - frequency in seconds.
Program should print every tick (defined by frequency) next system information (if a parameter isn't accessible mark it as N/A):
    ```
    - operating system
    - architecture
    - current user name
    - cpu cores models
    - cpu temperature
    - graphic controllers vendors and models
    - total memory, used memory, free memory in GBs
    - if system has, battery info (charging, percent, remaining time)
    ```
2. Write your own implementation of `EventEmitter` class (_Publisher/Subscriber_).
It should behave like the following:
   ```js
   const emitter = new MyEventEmitter();

   emitter.registerHandler('usedUpdated', () => console.log('User was updated'));
   
   emitter.emitEvent('usedUpdated'); // User was updated
   ```


### Useful links:
[NVM guide](https://ua-blog.com/%D1%82%D1%83%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB-%D0%BF%D0%BE-node-version-manager-nvm)

[Node.js tutorial](https://nodejs.dev/learn)

[Node.js basics course](https://metanit.com/web/nodejs/)

[Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

[Node.js URL docs](https://nodejs.org/docs/latest-v14.x/api/url.html)

[Node.js fs docs](https://nodejs.org/docs/latest-v14.x/api/fs.html)

[Node.js streams docs](https://nodejs.org/docs/latest-v14.x/api/stream.html)

[Node.js events docs](https://nodejs.org/docs/latest-v14.x/api/events.html)

[Service for HTTP requests testing](https://httpstat.us/)
