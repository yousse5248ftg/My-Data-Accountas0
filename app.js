const Greeting = document.getElementById("Greeting");
let UserName = prompt("Enter Your User Name");
let msg = `Hello ${UserName} Wellcome`
if (!isNaN(UserName)){
    msg = `Hello User Wellcome`
}
Greeting.innerText = msg