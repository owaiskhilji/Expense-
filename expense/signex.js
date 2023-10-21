


function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',pass)
    location.href = './logex.html'
}

function login(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass){

        location.href = './expense.html'
    }
    else{
        alert('FAILED');
        location.href = './sign.html'
    }
}

