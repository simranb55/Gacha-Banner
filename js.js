let legendaryPity = 0;
let epicPity = 0;

function summon() {
  legendaryPity += 1;
  epicPity += 1;

  let videoSrc = "";
  let result = "";
  let forced = "";


  const legendaryVideos = [
    "videos/legendary 1.mp4",
    "videos/legendary 2.mp4"
  ];
  const epicVideos = [
    "videos/epic 1.mp4",
    "videos/epic 2.mp4",
    "videos/epic 3.mp4",
    "videos/epic 4.mp4",
    "videos/epic 5.mp4"
  ];
  const rareVideos = [
    "videos/rare 1.mp4",
    "videos/rare 2.mp4",
    "videos/rare 3.mp4",
    "videos/rare 4.mp4",
    "videos/rare 5.mp4"
  ];
  const commonVideos = [
    "videos/common 1.mp4",
    "videos/common 2.mp4",
    "videos/common 3.mp4",
    "videos/common 4.mp4",
    "videos/common 5.mp4",
    "videos/common 6.mp4"
  ];


  if (legendaryPity >= 100) {
    videoSrc = legendaryVideos[Math.floor(Math.random() * legendaryVideos.length)];
    result = "Legendary";
    forced = "(Legendary Pity)";
    legendaryPity = 0;
    epicPity = 0;
  }
 
  else if (epicPity >= 10) {
    const roll = Math.random() * 100;

    if (roll < 1) {
      videoSrc = legendaryVideos[Math.floor(Math.random() * legendaryVideos.length)];
      result = "Legendary";
      forced = "(Epic Pity, got Legendary)";
      legendaryPity = 0;
    } else {
      videoSrc = epicVideos[Math.floor(Math.random() * epicVideos.length)];
      result = "Epic";
      forced = "(Epic Pity)";
    }

    epicPity = 0;
  }
  
  else {
    const roll = Math.random() * 100;
    if (roll < 1) {
      videoSrc = legendaryVideos[Math.floor(Math.random() * legendaryVideos.length)];
      result = "Legendary";
      legendaryPity = 0;
      epicPity = 0;
    } else if (roll < 6) {
      videoSrc = epicVideos[Math.floor(Math.random() * epicVideos.length)];
      result = "Epic";
      epicPity = 0;
    } else if (roll < 26) {
      videoSrc = rareVideos[Math.floor(Math.random() * rareVideos.length)];
      result = "Rare";
    } else {
      videoSrc = commonVideos[Math.floor(Math.random() * commonVideos.length)];
      result = "Common";
    }
  }

 

  document.getElementById("pityText").textContent = `Pity: ${legendaryPity} / 100`;


  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("summonVideo");

  video.src = videoSrc;
video.playbackRate = 1.3;

video.oncanplay = () => {
  overlay.style.display = "flex";
  video.play().catch(err => console.error("Video play failed:", err));
};

}


function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("summonVideo");

  video.pause();
  video.currentTime = 0;
  video.src = ""; 
  overlay.style.display = "none";
}