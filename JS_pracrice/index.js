document.querySelector("h1").innerText="Laura Sepbossynova, CS-2120N";
let now = new Date();

document.querySelector("p1").innerText="Year: " + now.getFullYear();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector("p2").innerText="Today is: " + days[now.getDay()];
document.querySelector("p3").innerHTML = "Date : " + now.getDate();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector("p4").innerText = "Month : " + month[now.getMonth()];
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    function startTime() {
        let now = new Date(),
            hours = checkTime(now.getHours()),
            minutes = checkTime(now.getMinutes()),
            seconds = checkTime(now.getSeconds());
        document.querySelector("p5").innerText ="Current time is: "+ hours + ":" + minutes + ":" + seconds;
    }
    startTime();
})();
let graduation = new Date("2024.07.01");
let timeDifference = Math.abs(graduation.getTime() - now.getTime());
let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
document.querySelector("p6").innerText = (daysDifference |0) + " days left until the freedom!";

function Multiply(){
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    document.querySelector("p7").innerText = x * y;
}
function Divide(){
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    document.querySelector("p7").innerText = x / y;
}
