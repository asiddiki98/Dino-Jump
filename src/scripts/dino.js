class Dino {
    constructor(){
        this.dino = document.getElementById("dino")
    }

    jump(){
       this.dino.classList.add("jump-animation") 
       setTimeout(() => {
           this.dino.classList.remove("jump-animation")
       }, 500);
    }

}


export default Dino


