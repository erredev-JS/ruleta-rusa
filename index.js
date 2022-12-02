
function ruleta() {
    let txt = document.getElementById("txt")
    let img = document.getElementById("img")
    let num = Math.ceil(Math.random()*6)
    let bullet = 6
    if(num == bullet){
        img.src = "skull.png"
        img.style.width = "285px"
        txt.style.color = "red"
        txt.innerText = "Te moriste!"
    }else{
        img.src = "face.png"
        img.style.width = "400px"
        txt.style.color = "rgb(19, 255, 23)"
        txt.innerText = "Sigues vivo!"
    }
}
