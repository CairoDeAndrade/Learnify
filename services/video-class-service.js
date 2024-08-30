document.addEventListener("DOMContentLoaded", () => {
  getStudentUsername();

  const trackId = new URLSearchParams(window.location.search).get("trackId");
  const videoClassId = new URLSearchParams(window.location.search).get("videoClassId");
  fetchTrackData(trackId, videoClassId);
});

const container = document.querySelector('.video-class');

function renderVideoClass(videoClass) {
  container.innerHTML = '';

  const titleElement = document.createElement('h3');
  titleElement.className = 'title';
  titleElement.textContent = videoClass.title;

  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';

  const iframeElement = document.createElement('iframe');
  iframeElement.width = '100%';
  iframeElement.height = '70%';
  iframeElement.src = videoClass.link.replace('watch?v=', 'embed/');
  iframeElement.title = 'YouTube video player';
  iframeElement.frameBorder = '0';
  iframeElement.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframeElement.referrerPolicy = 'strict-origin-when-cross-origin';
  iframeElement.allowFullscreen = true;

  videoContainer.appendChild(iframeElement);

  const summaryTitleElement = document.createElement('h3');
  summaryTitleElement.textContent = 'Resumo';

  const summaryElement = document.createElement('p');
  summaryElement.className = 'summary';
  summaryElement.textContent = videoClass.summary;

  container.appendChild(titleElement);
  container.appendChild(videoContainer);
  container.appendChild(summaryTitleElement);
  container.appendChild(summaryElement);
}

async function fetchTrackData(trackId, videoClassId) {
  try {
    const response = await fetch(`https://65d8cad7c96fbb24c1bc5095.mockapi.io/api/v1/tracks/${trackId}`);
    const track = await response.json();

    const selectedVideoClass = track.videoClasses.find(vc => vc.id === videoClassId);

    if (selectedVideoClass) {
      renderVideoClass(selectedVideoClass);
    } else {
      alert("Aula não encontrada oi indisponível!");
    }
  } catch (error) {
    alert('Erro ao buscar os dados da trilha:', error);
  }
}
