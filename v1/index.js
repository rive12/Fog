var urlObj = new window.URL(window.location.href); var url = "https://kardna-v2.herokuapp.com/games%20page.html"; if (url) { var win; document.querySelector(Games).onclick = function() { if (win) { win.focus(); } else { win = window.open(); win.document.body.style.margin = '0'; win.document.body.style.height = '100vh'; var iframe = win.document.createElement('iframe'); iframe.style.border = 'none'; iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.margin = '0'; iframe.src = url; win.document.body.appendChild(iframe); } document.querySelector(Games).style.background='#00000'; document.querySelector(Games).innerHTML="Page Opened!"; }; } 

const form = document.querySelector('form');
const input = document.querySelector('input');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let url = urlParams.get('site');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function settings() {
	var win = window.open("/settings.html", null, "height=500,width=500,status=yes,toolbar=no,menubar=no,location=no");
	win.moveTo(screen.width / 3, screen.height / 3);
}

function sboxPopup() {
	var sbox = document.querySelector(".sBox");
	var input = document.querySelector(".sBox input");

	document.onkeypress = function(e) {
		if (e.key == "Enter") sbox.style.display = "none";
	};

	var display = sbox.style.display == "inline";
	if (display) {
		display = "none";
		sbox.style = `position: fixed;
	animation-name: sboxslideout;
  animation-duration: 2s;`;
	} else {
		display = "inline-block";
		sbox.style = `position: fixed;
	top: 6.6%;
	bottom: 0;
	left: 80%;
	z-index: 99;
	animation-name: sboxslidein;
  animation-duration: 2s;
	color: #000056;
	border: none;
	width: 10%;
	height: 40px;`
	}
	sbox.style.display = display;
}
