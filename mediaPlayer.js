const mediaPlayer = document.getElementById("media")
const audio = document.getElementById("audio")
const play = document.getElementById("play")
const upload = document.getElementById("upload")
const fileName = document.getElementById("fileName")

play.onclick = function() {playButtonClicked()}

upload.onclick = function() {uploadButtonClicked()}

function playButtonClicked(){
    if (mediaPlayer.paused) {
        mediaPlayer.play()
        mediaPlayer.textContent = "pause"
    
    } else {
        mediaPlayer.pause()
        mediaPlayer.textContent = "play"
    }
    
}


function handleFiles(event) {
    var files = event.target.files;
    $("#audio").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("media").load();
    fileName.textContent = files[0].name
}

document.getElementById("upload").addEventListener("change", handleFiles, false);