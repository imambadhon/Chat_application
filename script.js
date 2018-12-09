var $handle = $('#handle');
var $session = $('#session');

var handle1 = NaN;

function send() {
    console.log('Testing!');


    var handle1 = $handle.val();
    var session1 = $session.val();
    
    localStorage.setItem('handle', handle1);
    localStorage.setItem('session', session1);

    window.location.assign("index.html");
  }

var handle1 =  localStorage.getItem('handle');
var session1 = localStorage.getItem('session');

$('#handle').append(handle1);

$('#session_name').append(session1);

setTimeout(function(){ $('#chat-window').empty(); }, 900000);