let color1 = ["#780206", "#FBD3E9", "#00d2ff", "#f2709c", "#a73737", "#4b6cb7", "#C04848", "#5f2c82","#232526","#5C258D", "#4776E6"]
let color2 = ["#061161", "#BB377D", "#3a7bd5", "#ff9472", "#7a2828", "#182848", "#480048", "#49a09d","#414345","#4389A2","#8E54E9"]
let bgGround = document.getElementById("container")
let count = 0;  //initialize count to default, which is array index 0
function right(){
    //if the value of count is not a valid index of the array, set the index to 0, else increase the index by 1
    if(count < color1.length - 1) {
        count++;
    }else{
        count = 0;
    }
    bgGround.style.backgroundImage = `linear-gradient(${color1[count]}, ${color2[count]})`
}

function left(){
    //if the value of count is 0, you cannot decrease by 1 as index -1 will be invalid. so set count to the last index of the array. Else decrease by 1
    if(count === 0) {
        count = color1.length - 1;
    }else {
        count--;
    }
    bgGround.style.backgroundImage = `linear-gradient(${color1[count]}, ${color2[count]})`
}