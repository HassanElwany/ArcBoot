document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.querySelector(".placeholder-image");
  const videoBackground = document.querySelector(".video-background");
  const videoElement = document.querySelector("#heroVideo");

  if (!videoElement) {
    console.error("Video element not found");
    return;
  }

  videoElement.load();

  videoElement
    .play()
    .then(() => {
      console.log("Video playing");
      setTimeout(() => {
        placeholder.classList.add("hide");
        videoBackground.classList.add("show");
      }, 3000);
    })
    .catch((error) => {
      console.error("Playback failed:", error);
      placeholder.classList.remove("hide");
      videoBackground.classList.remove("show");
    });

  videoElement.addEventListener("error", (e) => {
    console.error("Video error:", e);
  });

  videoElement.addEventListener("loadedmetadata", () => {
    console.log("Metadata loaded:", {
      duration: videoElement.duration,
      videoWidth: videoElement.videoWidth,
      videoHeight: videoElement.videoHeight,
    });
  });
});
