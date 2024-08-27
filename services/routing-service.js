function redirectTo(path) {
    // GitHub pages
    const repoName = 'Learnify';
    window.location.href = `/${repoName}${path}`; 

    // Local 
    // window.location.href = path;
}

function redirectTo(path, id) {
    // GitHub pages
    // const repoName = 'Learnify';
    // window.location.href = `/${repoName}${path}?id=${id}`;

    // Local
    window.location.href = `${path}?id=${id}`;
}