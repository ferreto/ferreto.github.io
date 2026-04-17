var accordion = document.getElementsByClassName("review__accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var reviewPanel = this.nextElementSibling;
        if (reviewPanel.style.display === "block") {
            reviewPanel.style.display = "none";
        } else {
            reviewPanel.style.display = "block";
        }
    });
}