//Make connection using socket (frontend side) - we need to use <script src="/socket.io/socket.io.js"></script> on the index.html in order to do this
var socket = io.connect('http://localhost:4000');