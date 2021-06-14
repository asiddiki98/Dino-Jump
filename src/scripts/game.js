
import "../styles/index.scss";
import Bomb from './bomb'
import Dino from './dino'


class Game{
    constructor(){
        this.dino = new Dino()
        this.bomb = new Bomb()
        this.score = document.getElementById("score")
        this.highscore = document.getElementById("highscore")
    }

    play(){
        if (document.getElementById("game-component").classList.contains("game-component")){
            document.getElementById("game-component").classList.remove("game-component")
            document.getElementById("game-component").classList.add("play-game-component")
        }
        if (document.getElementById("bomb").classList.contains("exploded")){
            document.getElementById("bomb").classList.remove("exploded")
            document.getElementById("bomb").classList.add("bomb")
        }
        let score = parseInt(this.score.innerText.split(":")[0]);
        let highscore = parseInt(this.highscore.innerText.split(":")[0]);

        
        let scoreInterval = setInterval(() => {
            this.score.innerText = `${score++} : score`;

            if (score > highscore){
                this.highscore.innerText = `${highscore++} : highscore`;
            }
        }, 100)
        
       
        document.addEventListener("keypress", (e) => {
            if (e.code === 'Space' && !document.getElementById("dino").classList.contains('jump-animation')) {
                this.dino.jump()
            } 
        })

        let game = setInterval(() =>{
            const dinoTop = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('top'))
            const dinoWidth = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('width'))
            const dinoLeft = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('left'))
            const bombLeft = parseInt(window.getComputedStyle(this.bomb.bomb).getPropertyValue('left'))
            const bombtop = parseInt(window.getComputedStyle(this.bomb.bomb).getPropertyValue('top'))
            
            
            if (bombLeft > dinoLeft && bombLeft < (dinoLeft +  dinoWidth - 100)  && dinoTop > bombtop ){ 
                this.bomb.explode() 
                this.lost()
                clearInterval(scoreInterval)
                clearInterval(game)
            }


        }, 50)
    }


    lost(){
        if (document.getElementById("game-component").classList.contains("play-game-component")) {
            document.getElementById("game-component").classList.remove("play-game-component")
            document.getElementById("game-component").classList.add("game-component")
        }

        this.score.innerText="0 : score"
    }
 

 
}
export default Game 