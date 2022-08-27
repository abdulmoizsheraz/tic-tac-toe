console.log("Welcome to the game")
// let gameaudio=new Audio('click.mp3')
// clickaudio.play()
let turn = "X"
function Changeturn() {
    return turn === "X" ? "0" : "X"
}
// GAME lOGIC
let boxtext1 = document.getElementsByClassName('boxtext')
Array.from(boxtext1).forEach(function (e) {

    e.addEventListener('click', () => {
        if (e.innerText == ""){
            let gameaudio=new Audio('click.mp3')
            e.innerText = turn;
            turn = Changeturn();
            DecideWinner();
            gameaudio.play();
        }
    })
})
// Winning Logic
function DecideWinner() {
    let e = document.getElementsByClassName('boxtext')
    // let won=document.getElementsByClassName('Won')
    if((e[0].innerText==e[1].innerText)&&(e[1].innerText==e[2].innerText && (e[0].innerText!="" ))){
       document.querySelector('.Won').innerText= "So the Winner is "+e[0].innerText
       document.querySelector('.gif').style.display="block"

    }
    else if((e[0].innerText==e[3].innerText)&&(e[3].innerText==e[6].innerText  && (e[0].innerText!="" ))){
        document.querySelector('.Won').innerText= "So the Winner is "+e[0].innerText
        document.querySelector('.gif').style.display="block"
    }
    else if((e[3].innerText==e[4].innerText)&&(e[4].innerText==e[5].innerText  && (e[3].innerText!="" ))){
        document.querySelector('.Won').innerText= "So the Winner is "+e[3].innerText
        document.querySelector('.gif').style.display="block"
    }
    else if((e[6].innerText==e[7].innerText)&&(e[7].innerText==e[8].innerText)  && (e[6].innerText!="" )){
        document.querySelector('.Won').innerText= "So the Winner is "+e[6].innerText
        document.querySelector('.gif').style.display="block"
    }
    else if((e[2].innerText==e[5].innerText)&&(e[5].innerText==e[8].innerText) && (e[2].innerText!="" )){
        document.querySelector('.Won').innerText= "So the Winner is "+e[2].innerText
        document.querySelector('.gif').style.display="block"
    }
    else if((e[0].innerText==e[4].innerText)&&(e[4].innerText==e[8].innerText) && (e[0].innerText!="" )){
        document.querySelector('.Won').innerText= "So the Winner is "+e[0].innerText
        document.querySelector('.gif').style.display="block"
    }
    else if((e[2].innerText==e[4].innerText)&&(e[4].innerText==e[6].innerText) && (e[2].innerText!="" )){
        document.querySelector('.Won').innerText= "So the Winner is "+e[2].innerText
        document.querySelector('.gif').style.display="block"
    }
   

    
}
// Reset The Game

let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    location.reload()
})



