function getStudentUsername(event) {
    const username = sessionStorage.getItem("user");
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        alert("Usuário não logado. Redirecionando para a página de login.");
        window.location.href = "/index.html";
    }
}