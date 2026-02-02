let boxes = document.body.querySelectorAll('.boxes')
let turn0 = true; 
let msg = document.querySelector('.winners');
let reset = document.querySelector('.btn')





let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turn0){
          box.innerText = '0'
          turn0 = false
        } else{
            box.innerText = 'X'
            turn0 = true
        }
        box.disabled = true
        CheckWinner()
    })
})

let CheckWinner = ()=>{
    for(let win of winner){
        pos1Val = boxes[win[0]].innerText 
        pos2Val = boxes[win[1]].innerText 
        pos3Val = boxes[win[2]].innerText 

        if(pos1Val !== '' && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            gameWinner(pos1Val)
        }
    }
    }
}

let gameWinner = (winn)=>{
   msg.classList.remove('hide')
   msg.innerText = `Congratulations You Win, ${winn}`
   disabledAll()
}

let disabledAll =()=>{
    for(let btn of boxes){
        btn.disabled = true
    }
}


