function redirectTo(path) {
    // GitHub pages
    const repoName = 'Learnify';
    window.location.href = `/${repoName}${path}`; 

    // Local 
    // window.location.href = path;
}

function redirectTo(path, id) {
    // GitHub pages
    const repoName = 'Learnify';
    window.location.href = `/${repoName}${path}?id=${id}`;

    // Local
    // window.location.href = `${path}?id=${id}`;
}

function redirectToVideoClass(path, trackId, videoClassId) {
    // GitHub pages
    const repoName = 'Learnify';
    window.location.href = `/${repoName}${path}?trackId=${trackId}&videoClassId=${videoClassId}`;

    // Local
    // window.location.href = `${path}?trackId=${trackId}&videoClassId=${videoClassId}`;
}