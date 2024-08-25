document.addEventListener("DOMContentLoaded", function() {
    getStudentUsername();
    getClassroomById();
});

const API_URL = "https://65d8cad7c96fbb24c1bc5095.mockapi.io/api/v1/classrooms";

function getClassroomById() {
    const urlParams = new URLSearchParams(window.location.search);
    const classroomId = urlParams.get('id');

    if (classroomId) {
        fetch(`${API_URL}/${classroomId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar a turma');
                }
                return response.json();
            })
            .then(data => {
                renderClassroomDetails(data);
            })
            .catch(error => {
                console.error("Erro:", error);
                alert("Ocorreu um erro ao carregar os detalhes da turma.");
            });
    } else {
        alert("Nenhuma turma selecionada.");
    }
}

function renderClassroomDetails(classroom) {
    const studyTrackTitleElement = document.querySelector('#study-track .info h3');

    if (studyTrackTitleElement) {
        studyTrackTitleElement.textContent = classroom.studyTrack.title;
    }

    const percentageElement = document.querySelector('#study-track .percentage');
    if (percentageElement) {
        percentageElement.textContent = `${classroom.completePercentage}% completo`;
    }
}

