
import variables from "../styles/variables.scss"
import "../styles/index.scss";
import Bomb from './bomb'
import Dino from './dino'


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
        this.background.style.animationDuration = "1500000000s"
        this.bomb.bomb.style.animationDuration = "2.5s"

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
            // if (score == 75){
            //     this.background.style.animationDuration = `1425000000s`
            //     this.bomb.bomb.style.animationPlayState = "initial"
            //     this.bomb.bomb.style.animationDuration = `2.375s`

                
            // }
            // if (score == 150){
            //     this.background.style.animationDuration = `1350000000s`
            //     this.bomb.bomb.style.animationPlayState = "initial"
            //     this.bomb.bomb.style.animationDuration = `2.3s`
                
            // }
            // if (score == 225){
            //     this.background.style.animationDuration = `1275000000s`
            //     this.bomb.bomb.style.animationPlayState = "initial"
            //     this.bomb.bomb.style.animationDuration = `2.125s`
                
            // }
            // if (score == 75){
            //     this.background.style.animationDuration = `1425000000s`
            //     this.bomb.bomb.style.animationDuration = `2.375s`
                
            // }

          
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
            }


        }, 10)
    }


    lost(){
        if (document.getElementById("game-component").classList.contains("play-game-component")) {
            document.getElementById("game-component").classList.remove("play-game-component")
            document.getElementById("game-component").classList.add("game-component")
            this.score.innerText = "0 : score";
            return true
        } else {
            return false
        }

        // this.instruction.innerText = `${this.score}`
        // this.score.innerText="0 : score";
    }
 

 
}
export default Game 