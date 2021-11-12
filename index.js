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
})