let guess = Math.floor(Math.random()*20)
let higestScore =0
let score = 10

let checkbtn=document.querySelector(".check")
document.querySelector(".between").textContent=("(Between 2 and 60)")
document.querySelector(".score").textContent
document.querySelector(".highscore").textContent

checkbtn.addEventListener("click",function(){
let input =Number( document.querySelector(".guess").value)

    if(input>guess){
        document.querySelector(".message").textContent="Too High!"
        document.querySelector(".score").textContent= score--
        
    }
    else if (input<guess){
        document.querySelector(".message").textContent="Too Low!"
        document.querySelector(".score").textContent=score--
        
    }
    else if (input==guess){
        document.querySelector(".message").textContent="Correct Answer!"
        document.querySelector("body").style.background="red"
        higestScore=score
    }
    else if(!guess){
        document.querySelector(".message").textContent="Starting question..."
score=10

}
if (higestScore < score){
    highestScore=score
    document.querySelector(".highscore").textContent=higestScore

}
else if (higestScore>score){
    
    document.querySelector(".highscore").textContent=score

}

else if (score < 1 ){
    document.querySelector(".message").textContent="You lost again!!!"
    document.querySelector(".score").textContent=0

}
})