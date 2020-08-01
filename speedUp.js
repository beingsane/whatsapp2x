const interval = setInterval(() => {
  const header = document.querySelector('._3All_');

  if (header) {
    clearInterval(interval);

    const button = document.createElement("button"); // Velocidade 2x ou mais
    let isActive = false;

    button.innerHTML = "2.5x";

    button.classList.add("button");

    header.appendChild(button)

    // Velocidade 2.5x
    button.addEventListener("click", () => {
      if (isActive) {
        isActive = false
        const audios = document.querySelectorAll("audio")
        audios.forEach(audio => {
          console.log(audio)
          audio.playbackRate = 1.0
          button.innerHTML = "2.5x"
        });
      } else {
        isActive = true
        const audios = document.querySelectorAll("audio")
        audios.forEach(audio => {
          console.log(audio)
          audio.playbackRate = 2.5
          button.innerHTML = "1x"
        });
      }

      console.log(isActive);
    })


    header.appendChild(button);
  }
}, 1000)