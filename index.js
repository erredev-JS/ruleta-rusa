
function ruleta(){
    let txt = document.getElementById("txt")
    let img = document.getElementById("img")
    let num = Math.ceil(Math.random()*6)
    let numFace =  Math.ceil(Math.random()*3)
    let bullet = 6
    if(num == bullet){
        img.src = "skull.png"
        img.style.width = "214px"
        txt.style.color = "red"
        txt.innerText = "Te moriste!"
        txt.style.animation = "shake  ease 0.5s"
    }if (num != bullet && numFace == 1){
        img.src = "face.png"
        img.style.width = "300px"
        txt.style.color = "rgb(19, 255, 23)"
        txt.innerText = "Sigues vivo!"
        txt.style.animation = "shake2  ease 0.5s"
        
    }if (num != bullet && numFace == 2){
        img.src = "lengua.png"
        img.style.width = "214px"
        txt.style.color = "rgb(19, 255, 23)"
        txt.innerText = "Sigues vivo!"
        txt.style.animation = "shake3  ease 0.5s"
    }if (num != bullet && numFace == 3){
        img.src = "swag.png"
        img.style.width = "214px"
        txt.style.color = "rgb(19, 255, 23)"
        txt.innerText = "Sigues vivo!"
        txt.style.animation = "shake4  ease 0.5s"
    }
}
