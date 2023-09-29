document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
  
    footer.innerHTML = `
      <div class="footer-content">
        <div class="contact-info">
          <p>Contact information</p>
        </div>
        <div class="static-pages">
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    `;
  
    footer.style.backgroundColor = "#aa5040";
    footer.style.color = "#fff";
    footer.style.padding = "20px";
    
    const footerContent = footer.querySelector(".footer-content");
    footerContent.style.display = "flex";
    footerContent.style.flexDirection = "column";
    footerContent.style.alignItems = "center";
    footerContent.style.justifyContent = "center";
  
    const contactInfo = footer.querySelector(".contact-info");
    contactInfo.style.display = "flex";
    contactInfo.style.justifyContent = "center";
  
    const ul = footer.querySelector("ul");
    ul.style.listStyle = "none"; 
    ul.style.padding = "0"; 
    ul.style.display = "flex"; 
    ul.style.justifyContent = "center"; 
  
    const links = ul.querySelectorAll("a");
    links.forEach(link => {
      link.style.textDecoration = "none"; 
      link.style.color = "#fff"; 
      link.style.margin = "0 10px";
    });
  });
  