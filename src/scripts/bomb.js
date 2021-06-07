export default class Bomb {
    constructor(){
        this.bomb = document.getElementById("bomb")
    }

    explode(){
        this.bomb.classList.toggle("exploded")
        
    }
}