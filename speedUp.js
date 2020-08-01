const interval = setInterval(() => {
  const header = document.querySelector('._3All_');
  
  if(header) {
    clearInterval(interval);
    
    const button2 = document.createElement("button"); // Velocidade normal
    const button = document.createElement("button"); // Velocidade 2x ou mais

    button2.innerHTML = "1x"
    button.innerHTML = "2.5x";

    button2.classList.add("x1");
    button.classList.add("x2");
    
    header.appendChild(button2)
    header.appendChild(button)
    
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

    header.appendChild(button2);
    header.appendChild(button);
  }
}, 1000)
