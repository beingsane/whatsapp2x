# whatsapp2x
Acelere a velocidade dos seus áudios no whatsapp. Agora áudios de 5 minutos podem ser reduzidos a pouco mais de um minuto. O código foi baseado no trabalho do [Programador Br](https://www.youtube.com/watch?v=j0Ih1xVyKbY)

![Imagem2](/image/print2.png)

## Instalação

1. Clone o repositório.
2. git clone https://github.com/peidrao/whatsapp2x.git
3. Abra o seu navegador (Chrome, Brave ou derivados)
4. Abra o menu de extensãos.
5. Ative o modo desenvolvedor. 
6. Arraste a pasta que foi clonada dentro da área das extensões.


## Observação

Pode ser (ou com toda certeza) que não funcione da primeira vez, pois a classe do "header" do seu WhatsApp Web esteja diferente. Basta inspencionar.

![Imagem](/image/print.png)

## Alternativa

Seguindo o mesmo padrão que o anterior, porém somente com um botão. Essa alternativa permite que o usuário clique no botão de aumentar a velocidade, e no mesmo botão possa diminuir.

```
const interval = setInterval(() => {
  const header = document.querySelector('._3All_');
  
  if(header) {
    clearInterval(interval);
  
    const button = document.createElement("button"); // Velocidade 2x ou mais
    let isActive = false;

    button.innerHTML = "2.5x";


    button.classList.add("x2");
    
    header.appendChild(button)
    
    // Velocidade 2.5x
    button.addEventListener("click", () => {
      if (isActive) {
        isActive = false
        const audios = document.querySelectorAll("audio")
        audios.forEach(audio => {
          console.log(audio)
          audio.playbackRate = 1.0
        });
      } else {
        isActive = true
        const audios = document.querySelectorAll("audio")
        audios.forEach(audio => {
          console.log(audio)
          audio.playbackRate = 2.5
        });
      }

      console.log(isActive);
    })


    header.appendChild(button);
  }
}, 1000)
```