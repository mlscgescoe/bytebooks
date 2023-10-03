const tabLinks = Array.from(document.querySelectorAll(".tab-link"));
    const tabContents = document.querySelectorAll(".tab-content");
    
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener("click", toggleTab);
    });
    
    let priorActiveTab = null;
    
    function toggleTab(event) {
        tabLinks.forEach(function(tabLink, index){
            tabLink.classList.remove("active");
            tabLink.classList.add("inactive");
        
            tabContents[index].classList.remove("visible");
            tabContents[index].classList.add("hidden");
        });

        if(priorActiveTab === this) {
            this.classList.remove("active");
            this.classList.add("inactive");

            tabContents[tabLinks.indexOf(this)].classList.remove("visible");
            tabContents[tabLinks.indexOf(this)].classList.add("hidden");

            priorActiveTab = null;
        } else {
            this.classList.remove("inactive");
            this.classList.add("active");
        
            tabContents[tabLinks.indexOf(this)].classList.remove("hidden");
            tabContents[tabLinks.indexOf(this)].classList.add("visible");
        
            priorActiveTab = this;
        }
        
        if (priorActiveTab === null) {
            this.classList.remove("inactive");
            this.classList.add("active");
        
            tabContents[tabLinks.indexOf(this)].classList.remove("hidden");
            tabContents[tabLinks.indexOf(this)].classList.add("visible");
        }
      
        event.preventDefault();
    }