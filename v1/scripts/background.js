//Created By Zenfy From Kardna Network//

function newSrc() {
    var e = document.getElementById("MySelectMenu");
    var newSrc = e.options[e.selectedIndex].value;
    document.getElementById("MyFrame").src=newSrc;
   }


