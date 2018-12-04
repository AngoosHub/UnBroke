
var current_login = document.getElementsByClassName("student-login");

var button = document.getElementById("change-login1");
var button2 = document.getElementById("change-login2");
console.log(button2);


// var test = document.getElementById("change-test");

// test.addEventListener('click', e => {
//     location.href="../../Student Home/studenthome.html";
// });


/* Flips the student login to the business login */
button.onclick = function () {


    document.getElementsByClassName("student-login")[0].classList.add("animate-out");

    setTimeout(function () {
        document.getElementsByClassName("student-login")[0].setAttribute("id", "is-showing");
        document.getElementsByClassName("student-login")[0].classList.remove("animate-out");
        document.getElementsByClassName("business-login")[0].removeAttribute("id");
        document.getElementsByClassName("business-login")[0].classList.add("animate-in");

        setTimeout(function () {
            document.getElementsByClassName("business-login")[0].classList.remove("animate-in");
        }, 600);
    }, 600);


}

button2.onclick = function () {
    document.getElementsByClassName("business-login")[0].classList.add("animate-out");
    setTimeout(function () {
        document.getElementsByClassName("business-login")[0].setAttribute("id", "is-showing");
        document.getElementsByClassName("business-login")[0].classList.remove("animate-out");
        document.getElementsByClassName("student-login")[0].removeAttribute("id", "is-showing");
        document.getElementsByClassName("student-login")[0].classList.add("animate-in");
        setTimeout(function () {
            document.getElementsByClassName("student-login")[0].classList.remove("animate-in");
        }, 600);
    }, 600);
}


// Pulls out about page
var about_page = document.getElementsByTagName("nav");

about_page.onclick = function() {
    
}






// NOT WORKING
/* Flips the student login to the business login */
/*
button.onclick = function () {
    if (current_login[0].className == "student-login") {
        console.log("ye boi");

        document.getElementsByClassName("student-login")[0].classList.add("animate-out");

        setTimeout(function () {
            document.getElementsByClassName("student-login")[0].setAttribute("id", "is-showing");
            document.getElementsByClassName("student-login")[0].classList.remove("animate-out");
            document.getElementsByClassName("business-login")[0].removeAttribute("id");
            document.getElementsByClassName("business-login")[0].classList.add("animate-in");

            setTimeout(function () {
                document.getElementsByClassName("business-login")[0].classList.remove("animate-in");
            }, 600);
        }, 600);

        current_login = document.getElementsByClassName("business-login");
        button = document.getElementById("change-login2");
        console.log(button);
        console.log(button2);
    } else {
        console.log("OH YE BOI");
        document.getElementsByClassName("business-login")[0].classList.add("animate-out");
        setTimeout(function () {
            document.getElementsByClassName("business-login")[0].setAttribute("id", "is-showing");
            document.getElementsByClassName("business-login")[0].classList.remove("animate-out");
            document.getElementsByClassName("student-login")[0].removeAttribute("id", "is-showing");
            document.getElementsByClassName("student-login")[0].classList.add("animate-in");
            setTimeout(function () {
                document.getElementsByClassName("student-login")[0].classList.remove("animate-in");
            }, 600);
        }, 600);
        current_login = document.getElementsByClassName("student-login");
        button = document.getElementById("change-login1");
    }

};
*/