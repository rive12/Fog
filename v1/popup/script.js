window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
var urlObj = new window.URL(window.location.href); var url = "https://kardna-v2.herokuapp.com/games%20page.html"; if (url) { var win; document.querySelector('a').onclick = function() { if (win) { win.focus(); } else { win = window.open(); win.document.body.style.margin = '0'; win.document.body.style.height = '100vh'; var iframe = win.document.createElement('iframe'); iframe.style.border = 'none'; iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.margin = '0'; iframe.src = url; win.document.body.appendChild(iframe); } document.querySelector('a').style.background='#00000'; document.querySelector('a').innerHTML="Page Opened!"; }; } 