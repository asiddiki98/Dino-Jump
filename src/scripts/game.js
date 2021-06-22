
import "../styles/index.scss";
import Bomb from './bomb'
import Dino from './dino'
import event from '../index'

class Game{
    constructor(){
        this.dino = new Dino();
        this.bomb = new Bomb();
        this.score = document.getElementById("score");
        this.highscore = document.getElementById("highscore");
        this.instruction = document.getElementById("instructions");
        this.background = document.getElementById("game-component")
    }

    play(){
        document.removeEventListener("keypress", event);
        this.background.style.animationDelay = "0s";
        this.background.style.animationDuration = "1500000000s";
        this.bomb.bomb.style.animationDelay="0s";
        this.bomb.bomb.style.animationDuration = "2.5s";

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
            this.instruction.innerText = ` your score was ${score - 1}!\n you can do better :P \n play again?`;
            this.instruction.innerHTML = this.instruction.innerHTML.replace(`${score - 1}`, `<span style="color: skyblue;">${score - 1}</span>`);
            
            
            
            if (score == 100){
                this.background.style.animationDelay = "-1.2s";
                this.background.style.animationDuration = `1125000000s`;
                this.bomb.bomb.style.animationDelay = "-1.2s";
                this.bomb.bomb.style.animationDuration = `1.875s`;
            }
            if (score == 200){
                this.background.style.animationDelay = "-0.29s";
                this.background.style.animationDuration = `750000000s`;
                this.bomb.bomb.style.animationDelay = "-0.29s";
                this.bomb.bomb.style.animationDuration = `1.25s`;      
            }
            if (score == 300){
                this.background.style.animationDelay = "-0.1s";
                this.background.style.animationDuration = `562500000s`;
                this.bomb.bomb.style.animationDelay = "-0.1s";
                this.bomb.bomb.style.animationDuration = `0.9375s`;
                
            }
            if (score == 500) {
                this.background.style.animationDelay = "0.8s";
                this.background.style.animationDuration = `375000000s`;
                this.bomb.bomb.style.animationDelay = "-0.8s";
                this.bomb.bomb.style.animationDuration = `0.625s`;
            }
            if (score > highscore){
                this.highscore.innerText = `${highscore++} : highscore`;
                this.instruction.innerText = ` you beat your highscore!!! \n play again?`;
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
                this.lost()
                clearInterval(scoreInterval)
                clearInterval(game)
                consol.log("lost")
            }


        }, 10)
    }


    lost(){
       
        if (document.getElementById("game-component").classList.contains("play-game-component")) {
            document.getElementById("game-component").classList.remove("play-game-component")
            document.getElementById("game-component").classList.add("game-component")
            this.score.innerText = "0 : score";
            document.addEventListener("keypress", event);
            return true
        } else {
            return false
        }

        // this.instruction.innerText = `${this.score}`
        // this.score.innerText="0 : score";
    }
 

 
}
export default Game 