
import "../styles/index.scss";
import Bomb from './bomb'
import Dino from './dino'


class Game{
    constructor(){
        this.dino = new Dino()
        this.bomb = new Bomb()
    }

    play(){

        document.getElementById("game-component").style.animation = "animate $speed linear infinite;";
        
        document.addEventListener("keypress", () => {
            if (!document.getElementById("dino").classList.contains('jump-animation')) {
                this.dino.jump()
            } 
        })

        setInterval(() =>{
            const dinoTop = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('top'))
            const dinoWidth = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('width'))
            const dinoLeft = parseInt(window.getComputedStyle(this.dino.dino).getPropertyValue('left'))
            const bombLeft = parseInt(window.getComputedStyle(this.bomb.bomb).getPropertyValue('left'))
            const bombtop = parseInt(window.getComputedStyle(this.bomb.bomb).getPropertyValue('top'))
            
            if (bombLeft > dinoLeft && bombLeft < (dinoLeft +  dinoWidth - 100)  && dinoTop > bombtop ){
                this.bomb.explode() 
                this.lost()
            }


        }, 50)
    }

    lost(){
        alert("game over")

    }
 

 
}
export default Game 