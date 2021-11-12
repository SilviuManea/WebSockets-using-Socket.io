//Make connection using socket (frontend side) - we need to use <script src="/socket.io/socket.io.js"></script> on the index.html in order to do this
var socket = io.connect('http://localhost:4000');

//Querying the DOM - so we can get the handle of the different elemnts we are interacting with.
var message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send');
    output = document.getElementById('output');
    feedback = document.getElementById('feedback');

//Emit Events(to the server)
btn.addEventListener('click',function(){
    socket.emit('chat',{//emits a message down the websocket to the server
        message:message.value, //we send this values
        handle:handle.value 
    }); 

});

//Listening for the keypress event in order to show the message "x is typing" in the chat windows
message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value); //we emit this to the server(which via boradcasting will send it to the rest of the clients)
});

//Listen for events(from the server)
socket.on('chat',function(data){
    //Clear the feedback field
    feedback.innerHTML="";
    //Render the messages on the output chat window
    output.innerHTML += '<p><strong>'+ data.handle + ':</strong>'+ data.message + '</p>';
});

//Listen for typing broadcasts
socket.on('typing',function(data){
    //output the user handle to the browser
    feedback.innerHTML = '<p><em>'+ data +' is typing a message...</em></p>';
});