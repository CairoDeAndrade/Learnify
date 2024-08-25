function redirectTo(path) {
    // const repoName = 'Learnify';
    // window.location.href = `/${repoName}${path}`; // GitHub pages
    window.location.href = path;
}

function redirectTo(path, id) {
    // const repoName = 'Learnify';
    // window.location.href = `/${repoName}${path}?id=${id}`; // GitHub pages
    window.location.href = `${path}?id=${id}`;
}