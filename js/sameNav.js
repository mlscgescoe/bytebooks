const navbarContainer = document.querySelector('#navbar-container');
fetch('../pages/navbar.html') //get the same HTML for all
    .then(response => response.text())
    .then(data => {
        navbarContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching navbar:', error);
    });