# socket-chat
This is a basic chat app built using react and socket.io

### Run Locally 

First git clone the application to your local machine

From the server folder run: `node index.js`

From the chat-app-client folder run: 

`yarn`

then 

`yarn start`

The application will open at localhost:3000

To chat back and forth between users open a second browser tab to localhost:3000


If you want to build a chat app using socket.io you should note that between versions 2 and 3 socket.io upgraded the way that you handle CORS to allow you to be able to manage this yourself, but this also means that you don't get it out of the box -- if you want CORS to be handled for you I recommend using v2 for now
