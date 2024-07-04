const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
var people = 0;
var name;
var name1;
var name2;

// Serve the static files in the "public" directory
app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('New client connected');
    
    people++;
    console.log(socket.id);
    if(people == 1) {
      name1 = socket.id;
  }
  else
  {
    name2 = socket.id;
  }


    socket.on('message', function(message) {
      var parent = 0;
      if(socket.id == name1)
      {
        name = "Muntazer:   ";
        parent = 1;
      }
      else if(socket.id == name2){
        name = "Ali:   ";
      }
      else{
        name = "Unknown:   "
      }
      console.log(name);
      if(parent == 1)
      {
        console.log('Received message:', name + message);
        const messageparent =  '              ' + name + message;
        io.emit('message', messageparent);
      }
      else{
        console.log('Received message:', name + message);
        io.emit('message', name + message);
      }
    });

    socket.on('disconnect', function() {
        console.log('Client disconnected');
    });
});

server.listen(8888, function() {
    console.log('Server started on port 8888');
});
