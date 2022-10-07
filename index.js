
const createGameLayout = ()=>{
    let canvas = document.querySelector("#gameCanvas");
    let canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = "black"
    canvasContext.fillRect(0,0,canvas.width , canvas.height)
    canvasContext.fillStyle = "red"
    canvasContext.fillRect(122,122,50 ,50)
}

window.addEventListener("load", ()=>{
    createGameLayout();
})