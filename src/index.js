import "./styles/index.scss";
import Game from './scripts/game'
import Dino from './scripts/dino'
let game = new Game()

let start = document.getElementById("start-button")

start.onclick = () => game.play() 

const enter = function(e) {
        if (e.code === 'Enter') {
            game.play()
        }
}

document.addEventListener("keypress", enter)

export default enter