function getVideoClassesByStudyTrack() {
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('id');

    if (trackId) {
        fetch(`https://65d8cad7c96fbb24c1bc5095.mockapi.io/api/v1/tracks/${trackId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar a trilha de estudos');
                }
                return response.json();
            })
            .then(data => {
                renderVideoClasses(data.videoClasses);
            })
            .catch(error => {
                console.error("Erro:", error);
                alert("Ocorreu um erro ao carregar as aulas.");
            });
    } else {
        alert("Nenhuma trilha de estudos selecionada.");
    }
}

function renderVideoClasses(videoClasses) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    videoClasses.forEach(videoClass => {
        const card = document.createElement('div');
        card.className = 'card primary-color';
        
        const title = document.createElement('h3');
        title.className = 'roboto-black';
        title.textContent = `${videoClass.sequence}. ${videoClass.title}`;
        
        const doneDiv = document.createElement('div');
        doneDiv.className = 'done';
        
        if (!videoClass.done) {
            doneDiv.classList.add('warn-font');
        } else {
            doneDiv.classList.add('success-font');
        }
        
        const doneText = document.createElement('p');
        doneText.textContent = videoClass.done ? 'Concluído' : 'Pendente';
        
        doneDiv.appendChild(doneText);
        card.appendChild(title);
        card.appendChild(doneDiv);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    getVideoClassesByStudyTrack();
});
