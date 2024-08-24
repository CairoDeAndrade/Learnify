document.addEventListener("DOMContentLoaded", function() {
    getStudentUsername();
    loadClassrooms();
});

function getStudentUsername() {
    const username = sessionStorage.getItem("user");
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        alert("Usuário não logado. Redirecionando para a página de login.");
        // window.location.href = "/index.html";
        window.location.href = "index.html";
    }
}

function loadClassrooms() {
    const apiUrl = "https://65d8cad7c96fbb24c1bc5095.mockapi.io/api/v1/classrooms";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar as turmas');
            }
            return response.json();
        })
        .then(data => {
            renderClassrooms(data);
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao carregar as turmas.");
        });
}

function renderClassrooms(classrooms) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    classrooms.forEach(classroom => {
        const classroomDiv = document.createElement('div');
        classroomDiv.classList.add('classroom', 'primary-color');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const title = document.createElement('h3');
        title.classList.add('roboto-black');
        title.textContent = classroom.title;

        const supportDate = document.createElement('p');
        supportDate.classList.add('warn-font');
        supportDate.textContent = `Suporte disponível até ${new Date(classroom.supportEndDate).toLocaleDateString('pt-BR')}`;

        infoDiv.appendChild(title);
        infoDiv.appendChild(supportDate);

        const img = document.createElement('img');
        
        // Githubpages
        img.src = "/Learnify/assets/images/computer.png";

        // img.src = "/assets/images/computer.png"; 
        img.alt = "image";

        const percentage = document.createElement('p');
        percentage.classList.add('percentage');
        percentage.textContent = `${classroom.completePercentage}% completo`;

        classroomDiv.appendChild(infoDiv);
        classroomDiv.appendChild(img);
        classroomDiv.appendChild(percentage);

        container.appendChild(classroomDiv);
    });
}
