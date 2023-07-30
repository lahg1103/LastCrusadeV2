function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
function newHeight(newWidth, oldWidth, oldHeight) {
    aspectratio = oldHeight / oldWidth;
    return newWidth * aspectratio
}
class World {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.c = this.canvas.getContext("2d");

        this.c.canvas.width = document.querySelector(".game-container").offsetWidth;
        this.c.canvas.height = document.querySelector(".game-container").offsetHeight;
        
    }

    init() {
        console.log("Hello from the world", this);

        const image = new Image();
        image.onload = () => {
            this.c.drawImage(image, 0, 0, this.c.canvas.width, this.c.canvas.height);
        };
        image.src = "./images/shopBackground.png";
    }
}


