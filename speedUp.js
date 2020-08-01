const interval = setInterval(() => {
  const header = document.querySelector('._1QUKR');
  
  if(header) {
    clearInterval(interval);
    
    const button = document.createElement("button"); // Velocidade 2x ou mais
    const button2 = document.createElement("button"); // Velocidade normal

    button.innerHTML = "2.5x";
    button2.innerHTML = "1x"

    button.classList.add("increaseSpeed");
    button2.classList.add("oneTime");
    
    header.appendChild(button)
    header.appendChild(button2)
    
    // Velocidade 2.5x
    button.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach(audio => {
        console.log(audio)
        audio.playbackRate = 2.5
      });
    })

    button2.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach(audio => {
        console.log(audios)
        audio.playbackRate = 1.0
      });
    })

    header.appendChild(button);
    header.appendChild(button2);
  }
}, 1000)
