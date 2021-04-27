var video_1 = document.getElementById("video-1");
var video_2 = document.getElementById("video-2");

// Impossibilitar mudança de volume do video 2
video_2.addEventListener('volumechange', function(){
  video_2.muted = true;
})

// Funções para prevenir mudança de tempo 
var supposedCurrentTime = 0;
video_1.addEventListener('timeupdate', function() {
  if (!video_1.seeking) {
		supposedCurrentTime = video_1.currentTime;
  }
});

video_1.addEventListener('seeking', function() {
    video_1.pause();
    video_2.pause();

    var delta = video_1.currentTime - supposedCurrentTime;
    if (Math.abs(delta) > 0.01) {
        console.log("Seeking is disabled");
        video_1.currentTime = supposedCurrentTime;
        video_2.currentTime = supposedCurrentTime;
    }
});

video_2.addEventListener('ended', function() {
	supposedCurrentTime = 0;
});

video_2.addEventListener('timeupdate', function() {
    if (!video_2.seeking) {
          supposedCurrentTime = video_2.currentTime;
    }
  });
  video_2.addEventListener('seeking', function() {
    video_1.pause();
    video_2.pause();

    var delta = video_2.currentTime - supposedCurrentTime;
    if (Math.abs(delta) > 0.01) {
        console.log("Seeking is disabled");
    video_2.currentTime = supposedCurrentTime;
    video_2.currentTime = supposedCurrentTime;
    }
  });

  video_2.addEventListener('ended', function() {
      supposedCurrentTime = 0;
  });
  

// CLICK EVENTS
video_1.addEventListener("click", function (event) {

    // Prevent pause
    event.preventDefault();

    handleVideoClick(video_1, video_2);
});

video_2.addEventListener("click", function (event) {

    // Prevent pause
    event.preventDefault();

    handleVideoClick(video_2, video_1);
});


// PLAY EVENTS
video_1.addEventListener("play", function () {
    video_2.play();
});

video_2.addEventListener("play", function () {
    video_1.play();
});

// PAUSE EVENTS
video_1.addEventListener("pause", function () {
    video_2.pause();
});

video_2.addEventListener("pause", function () {
    video_1.pause();
});


// Ao clicar, os videos sao trocados
function handleVideoClick(vid1, vid2) {

    // Toggle display in the videos
    vid1.style.display = "none";
    vid2.style.display = "block";

}