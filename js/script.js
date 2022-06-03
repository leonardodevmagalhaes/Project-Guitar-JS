

const ropes = document.querySelectorAll(".rope");

window.addEventListener("keydown", getRope)

ropes.forEach(function(rope){
    rope.addEventListener("click", getRope);
})

function getRope(event){

    const audioRope = rope(event);

    const verification = document.querySelector(`.rope[data-rope = "${audioRope}"]`);

    const ropeTrue = verification;

    if(ropeTrue){
        const audio = document.querySelector(`audio[data-rope = "${audioRope}"]`);
        audio.currentTime = 0;
        audio.play()
    }else{
        // valor tipdo como false (tecla não existe);
    }    
}
function rope(event){
    let rope;
    if (event.type === "click"){
        rope = event.target.dataset.rope;
    }else{
        rope = event.key;
    }
    rope = rope.toLowerCase();
    return rope;
}

