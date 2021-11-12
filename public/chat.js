//Make connection using socket (frontend side) - we need to use <script src="/socket.io/socket.io.js"></script> on the index.html in order to do this
var socket = io.connect('http://localhost:4000');

//Querying the DOM - so we can get the handle of the different elemnts we are interacting with.
var message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send');
    output = document.getElementById('output');

//Emit Events
btn.addEventListener('click',function(){
    socket.emit('chat',{//emits a message down the websocket to the server
        message:message.value, //we send this values
        handle:handle.value 
    }) 

})