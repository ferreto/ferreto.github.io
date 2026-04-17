function ChangeLng(data) {
    if (data.selectedOptions && data.selectedOptions.length > 0) {
        var selectedOption = data.selectedOptions[0];
        var dataLink = selectedOption.getAttribute('data-link');
        if (dataLink) {
            window.location.replace(dataLink);
        }
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}