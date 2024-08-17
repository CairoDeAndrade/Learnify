function login(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('logged', 'true');
        redirectTo('/components/classroom/classroom.html');
    } else {
        alert('Login inválido');
    }
}

function redirectTo(path) {
    window.location.href = path;
}
