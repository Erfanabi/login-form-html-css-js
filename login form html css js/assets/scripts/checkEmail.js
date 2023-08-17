const myEmail = document.getElementById("input-1");
const btn = document.getElementsByTagName("input")[0];

const iconRed = document.getElementById("red");
const iconGreen = document.getElementById("green");


let myPattern = /^([a-zA-Z0-9._-]+\@(gmail)\.(com))$/g;

myEmail.addEventListener("keyup", function () {
    let email = myEmail.value;
    let check = email.match(myPattern);
    console.log(check);

    // check myPattern true or false if null == false
    if (check == null) {
        iconRed.classList.remove("d-none");
        iconGreen.classList.add("d-none");
    }
    else {
        iconRed.classList.add("d-none");
        iconGreen.classList.remove("d-none");
    }
});

btn.addEventListener("click", function () {
    let email = myEmail.value;
});