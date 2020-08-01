const interval = setInterval(() => {
  const header = document.querySelector('._1QUKR');
  
  if(header) {
    clearInterval(interval);
    
    const button = document.createElement("button");
    button.innerHTML = "2.5x";
    button.classList.add("twoTimesButton");
    header.appendChild(button)
    
    //const teste = document.querySelector(".twoTimesButton");
    
    button.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio")
      
      audios.forEach(audio => {
        console.log(audios)
        audio.playbackRate = 2.5
      });
    })
    header.appendChild(button);
  }
}, 1000)
