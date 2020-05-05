const user = document.getElementById("username");
const saveBtn = document.getElementById("saveScore");
const final = document.getElementById("finalScore");

const newScore = localStorage.getItem("newScore");
final.innerText = newScore;

user.addEventListener("keyup", () =>{
    console.log("user.value");
    saveBtn.disabled= !user.value;
});

saveHighScore = (e) =>  {
    console.log("clicked")
}