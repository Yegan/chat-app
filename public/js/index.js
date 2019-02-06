var socket = io('http://localhost:3000/');

socket.on('connect',function (){
    console.log('Connected to the server')
});

socket.on('disconnect',function (){
    console.log('Disconnected from the server')
});

socket.on('newEmail', function (){
console.log('New email');
});


