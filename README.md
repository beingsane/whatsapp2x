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


## Mudar a velocidade 

Pode ser que a velocidade que vem como padrão esteja muito alta, dessa forma basta mudar os valores de **audio.playbackRate**. 


## Observação

Pode ser (ou com toda certeza) que não funcione da primeira vez, pois a classe do "header" do seu WhatsApp Web esteja diferente. Basta inspencionar.


## Alternativa

Alternativa com dois botões.

![Imagem](/image/print.png)

```
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
```