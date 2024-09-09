const appState = {
  isDevelopment: true,
  routePath: "",
  repoName: "Learnify",
};

function redirectTo(path) {
  if (isDevelopment()) {
    // Local
    window.location.href = path;
  } else {
    // GitHub pages
    window.location.href = `/${appState.repoName}${path}`;
  }
}

function redirectTo(path, id) {
  if (isDevelopment()) {
    // Local
    window.location.href = `${path}?id=${id}`;
  } else {
    // GitHub pages
    window.location.href = `/${appState.repoName}${path}?id=${id}`;
  }
}

function redirectToVideoClass(path, trackId, videoClassId) {
  if (isDevelopment()) {
    // Local
    window.location.href = `${path}?trackId=${trackId}&videoClassId=${videoClassId}`;
  } else {
    // GitHub pages
    window.location.href = `/${appState.repoName}${path}?trackId=${trackId}&videoClassId=${videoClassId}`;
  }
}
