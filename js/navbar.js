window.addEventListener('DOMContentLoaded', () => {
    const navbarDiv = document.getElementById('navbar');
    const nav = document.createElement('nav');
    nav.style.backgroundColor = '#aa5040';
    nav.style.padding = '10px'; 

    nav.innerHTML = `
        <ul style="display: flex; justify-content: space-between; align-items: center;">
            <li>
                <strong style="font-weight: bold;">E-library</strong>
            </li>
            <li style="display: inline; margin-left: auto;">
                <a href="../index.html" style="text-decoration: none; color: #333;">Home</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="books.html" style="text-decoration: none; color: #333;">Books</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="login.html" style="text-decoration: none; color: #333;">Log In</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="about-us.html" style="text-decoration: none; color: #333;">About Us</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="contact.html" style="text-decoration: none; color: #333;">Contact</a>
            </li>
        </ul>
    `;

    navbarDiv.appendChild(nav);
});
