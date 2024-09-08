function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  validateUserCredentials(username, password);
}

function validateUserCredentials(username, password) {
  if (username === "admin" && password === "admin") {
    storeLoginData(username);
    redirectTo("/components/classroom/classroom.html");
  } else {
    alert("Login inválido");
  }
}

function storeLoginData(user) {
  sessionStorage.setItem("logged", "true");
  sessionStorage.setItem("user", user);
}

function getStudentUsername() {
  const username = sessionStorage.getItem("user");
  if (username) {
    document.getElementById("username").textContent = username;
  } else {
    alert("Usuário não logado. Redirecionando para a página de login.");
    window.location.href = "index.html";
  }
}
