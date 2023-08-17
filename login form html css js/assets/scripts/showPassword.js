const show = document.getElementsByClassName("show");
const inputPassword = document.getElementsByClassName("pass")[0];

const inputPasswordTwo = document.getElementById("input-3");

const progress = document.getElementsByClassName("progress-bar")[0];
const passState = document.getElementsByClassName("pass-state")[0];

const passSame = document.getElementsByClassName("pass-same")[0];

const btnCreateAccount = document.getElementsByClassName("bttn")[0];

for (let btn of show) {
    btn.addEventListener("click", function () {

        if (btn.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].type == "password") {
            btn.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].type = "text";
        }
        else {
            btn.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].type = "password";
        }
    })
}

inputPasswordTwo.addEventListener("keyup", function () {

    let one = inputPassword.value;
    let two = inputPasswordTwo.value;


    for (let i = 0; i < two.length; i++) {
        // console.log(`two = ${two[i]}`);
        // console.log(`one = ${one[i]}`);

        if (two[i] !== one[i]) {
            passSame.innerText = "not same";
            passSame.style.color = "red";
        }
        // if (two[i] == one[i]) {
        //     passSame.innerText = "same";
        //     passSame.style.color = "green";
        // }
    }

});


inputPassword.addEventListener("keyup", function () {

    let result = checkPassword(this.value);

    console.log(result);

    progress.parentNode.classList.remove("bac-gra");

    if (result == 4) {
        passState.innerHTML = "High";
        passState.style.color = "green";
        progress.classList.add("w-100", "color-green");
        progress.classList.remove("w-75", "color-orange", "w-25", "color-red");
    }
    else if (result == 3) {
        passState.innerHTML = "Normal";
        passState.style.color = "orange";
        progress.classList.add("w-75", "color-orange");
        progress.classList.remove("w-100", "color-green", "w-25", "color-red");
    }
    else if (result == 1 || result == 2) {
        passState.innerHTML = "Low";
        passState.style.color = "red";
        progress.classList.add("w-25", "color-red");
        progress.classList.remove("w-75", "color-orange", "w-100", "color-green");
    }




    // alert(one)
    // alert(two);
})


function checkPassword(password) {
    let score = 0;

    const numberPattern = /[0-9]+/;
    const alphaLowerPattern = /[a-z]+/;
    const alphaUpperpattern = /[A-Z]+/;
    const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/;

    let passLength = password.length;
    // console.log(`i = ${passLength}`);
    if (passLength > 8) {

        if (numberPattern.test(password)) {
            score++;
        }
        if (alphaLowerPattern.test(password)) {
            score++;
        }
        if (alphaUpperpattern.test(password)) {
            score++;
        }
        if (specialChars.test(password)) {
            score++;
        }

        // console.log(password);
        // console.log(score);

        return score;
    }



}





