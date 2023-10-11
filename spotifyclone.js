document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll(".fa-play");
    const audioPlayer = new Audio(); // Create an audio element
  
    let currentPlaying = null;
  
    function playAudio(url) {
      if (currentPlaying !== url) {
        audioPlayer.pause();
        audioPlayer.src = url;
        audioPlayer.play();
        currentPlaying = url;
      } else {
        audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
      }
    }
  
    playButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const parentItem = button.closest(".item");
        const audioUrl = parentItem.getAttribute("data-audio");
        playAudio(audioUrl);
      });
    });
  });
  
  