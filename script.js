// page 1:
function hidBlock() {
	document.getElementById('run_left').style.left = '0'
}

// PAGE 5:

function hid() {
    
    let text = document.getElementsByClassName('events_text')[0];
    text.style.left = "0";
	let img = document.getElementsByClassName('events_img')[0];
    img.style.right = "0";
	
	
}
function hidVideo() {
	let video = document.getElementsByClassName('video_wrap')[0];
    video.style.left = "0";
}

function video_play() {
	console.log(7);
	document.getElementById('btn_play').style.display = 'none';
	console.log(17);
	
}

let first_line = document.getElementById('first-line');
let top_line = first_line.offsetHeight/2;
document.getElementById('silver-line').style.top = top_line + 'px';
let last_line = document.getElementById('last-line');
console.log(last_line);
let bottom_line = last_line.offsetHeight+10;
console.log(bottom_line);
document.getElementById('silver-line').style.bottom = bottom_line + 'px';


































