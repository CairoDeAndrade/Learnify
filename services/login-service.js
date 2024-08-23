function login(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    validateUserCredentials(username, password);
}

function validateUserCredentials(username, password) {
    if (username === 'admin' && password === 'admin') {
        storeLoginData(username);
        redirectTo('/components/classroom/classroom.html');
    } else {
        alert('Login inválido');
    }
}

function redirectTo(path) {
    const baseURL = window.location.origin;
    window.location.href = `${baseURL}${path}`;
}


function storeLoginData(user) {
    sessionStorage.setItem('logged', 'true');
    sessionStorage.setItem('user', user);
}
