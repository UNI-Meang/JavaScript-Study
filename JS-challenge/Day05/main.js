const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
]; 

function randomColor(){
    const randomColor1 = colors[Math.round(Math.random() * colors.length)];
    const randomColor2 = colors[Math.round(Math.random() * colors.length)];
    const color = [];

    if(randomColor1 !== randomColor2){
        color.push(randomColor1, randomColor2)
        document.body.style.background = `linear-gradient(45deg, ${color[0]}, ${color[1]})`;
    } else {
        return;
    }

    // if(randomColor1 !== randomColor2){
    //     document.body.style.background = `linear-gradient(45deg, ${color[0]}, ${color[1]})`;
    // } else {
    //     return false;
    // }
}

const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', randomColor);