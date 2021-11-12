var express = require ('express');
var socket = require ('socket.io');

// App setup
var app = express();
var server = app.listen(4000,function(){
    console.log('listening to requests on port 4000');
});

//Static filesx
app.use(express.static('public'));

//Socket setup backend side
var io = socket(server);

io.on('connection',function(socket){
    console.log('Made socket connection',socket.id)

    socket.on('chat',function(data){ //Listen for the messages from the client
        io.sockets.emit('chat', data); //Emit the chat message on all sockets (all clients)
    });

    //broadcast from the server to the frontend at the rest of the clients
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)//emits to the rest of the clients but not the client that emitted the event/socket is the one that emitted the event
    });

});