var isOpen = "false";
var newwindow=null;
function call() {
    var link = document.getElementById('popup').getAttribute('href');
    if (isOpen == "false" || newwindow == null) {
        isOpen = "true"; 
        window.open(link,'popup','width=950,height=650,scrollbars=yes,resizable=yes');
    } else {
        newwindow.location.href = url;
        newwindow.focus();
    }
}

