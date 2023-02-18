
const sBlock = document.querySelector('.small_block')
let positionX = 0
let positionY = 0
let positionX_2 = false;
let positionY_2 = false;
let start = 1;

const move = () => {
    if (start === 1) {
        if (positionX_2 === false && positionX <= 440) {
            positionX += 15;
            sBlock.style.left = `${positionX}px`;
            setTimeout(move, 10);
        } else if (positionX >= 440 && positionY <= 440) {
            positionY += 15;
            sBlock.style.top = `${positionY}px`;
            setTimeout(move, 10);
        } else if (positionX > 0 && positionY >= 440) {
            positionX_2 = true;
            positionX -= 15;
            sBlock.style.left = `${positionX}px`;
            setTimeout(move, 10);
        } else if (positionY_2 === false && positionY > 0) {
            if (positionY === 10) positionX_2 = false;
            positionY -= 10;
            sBlock.style.top = `${positionY}px`;
            setTimeout(move, 10);
        }
    }
};
move()

const timerInp = document.querySelector(".pTime");
const btn_start = document.querySelector(".btn_start_inp")
const btn_stop = document.querySelector(".btn_stop_inp")

let i = 0;

btn_start.addEventListener("click",()=>{
    const time = setInterval(() => {
        i++;
        timerInp.innerHTML = i;

    }, 100);
    btn_stop.addEventListener("click",()=>{
        clearInterval(time)
    })
})