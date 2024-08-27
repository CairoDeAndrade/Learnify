document.addEventListener("DOMContentLoaded", function() {
    getStudentUsername();
    loadClassrooms();
});

const API_URL = "https://65d8cad7c96fbb24c1bc5095.mockapi.io/api/v1/classrooms";

function loadClassrooms() {
    fetch(API_URL)
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

        classroomDiv.setAttribute('data-id', classroom.id);

        classroomDiv.addEventListener('click', function() {
            const classroomId = this.getAttribute('data-id');
            redirectTo('/components/classroom-details/classroom-details.html', classroomId);
        });

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
        
        // Github pages
        // img.src = "/Learnify/assets/images/computer.png";

        // Local
        img.src = "/assets/images/computer.png";

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