const urlParams = new URLSearchParams(window.location.search);
const trackId = urlParams.get('id');

document.addEventListener("DOMContentLoaded", function () {
    getVideoClassesByStudyTrack();
    getStudentUsername();
    checkChallengeStatus();
});

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
                renderChallenge(data.challenge);
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

    videoClasses.forEach(videoClass => {
        const card = document.createElement('div');
        card.className = 'card primary-color';
        
        card.onclick = function() {
            redirectToVideoClass('/components/video-class/video-class.html', trackId, videoClass.id);
        };

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

function renderChallenge(challenge) {
    const container = document.querySelector('.container');

    const challengeDiv = document.createElement('div');
    challengeDiv.className = 'challenge primary-color';

    const title = document.createElement('h3');
    title.textContent = `Desafio: ${challenge.title}`;
    challengeDiv.appendChild(title);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'desc secondary-color';

    const descriptionTitle = document.createElement('h4');
    descriptionTitle.className = 'roboto-black';
    descriptionTitle.textContent = 'Descrição';
    descriptionDiv.appendChild(descriptionTitle);

    const descriptionText = document.createElement('p');
    descriptionText.textContent = challenge.description;
    descriptionDiv.appendChild(descriptionText);

    challengeDiv.appendChild(descriptionDiv);

    // Challenge status
    const deliverDiv = document.createElement('div');
    deliverDiv.className = 'deliver';

    const card = document.createElement('div');
    card.className = 'card secondary-color';

    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Situação';
    card.appendChild(cardTitle);

    const statusDiv = document.createElement('div');
    statusDiv.className = 'link';

    const statusText = document.createElement('h2');
    statusText.className = 'warn-font status';
    statusText.textContent = challenge.status === 'PENDING' ? 'Pendente' : 'Concluído';
    statusDiv.appendChild(statusText);

    card.appendChild(statusDiv);
    deliverDiv.appendChild(card);

    const linkDiv = document.createElement('div');
    linkDiv.className = 'card secondary-color';

    const inputDiv = document.createElement('div');
    inputDiv.className = 'link';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'link';
    input.id = 'github-link';
    input.className = 'input';
    input.placeholder = 'Coloque o link do seu GitHub aqui';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'primary-button';
    button.textContent = 'Enviar';

    button.addEventListener('click', () => sendChallenge(input, button, statusText));

    inputDiv.appendChild(input);
    inputDiv.appendChild(button);

    linkDiv.appendChild(inputDiv);
    deliverDiv.appendChild(linkDiv);

    challengeDiv.appendChild(deliverDiv);

    container.appendChild(challengeDiv);

    if (challenge.status === 'PENDING') {
        localStorage.setItem('challenge', 'PENDING');
    } else if (challenge.status === 'DONE') {
        localStorage.setItem('challenge', 'DONE');
        updateChallengeUI(input, button, statusText, 'DONE');
    }
}

function sendChallenge(input, button, statusText) {
    input.value = '';
    input.disabled = true;
    button.disabled = true;
    button.classList.add('disabled');

    statusText.classList.remove('warn-font');
    statusText.textContent = 'Enviado';
    statusText.style.color = '#2d88ff';

    localStorage.setItem('challenge', 'SENT');
}

function checkChallengeStatus() {
    const challengeStatus = localStorage.getItem('challenge');
    if (challengeStatus === 'SENT') {
        const input = document.getElementById('github-link');
        const button = document.querySelector('.primary-button');
        const statusText = document.querySelector('.status');

        if (input && button && statusText) {
            updateChallengeUI(input, button, statusText, 'SENT');
        }
    }
}

function updateChallengeUI(input, button, statusText, status) {
    if (input && button && statusText) {
        input.disabled = true;
        button.disabled = true;
        button.classList.add('disabled');

        if (status === 'SENT') {
            statusText.classList.remove('warn-font');
            statusText.textContent = 'Enviado';
            statusText.style.color = '#2d88ff';
        }
    }
}
