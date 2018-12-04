/* This javascript file creates the login in flip animation by adding and removing css classes */



var current_login = document.getElementsByClassName("student-login");

var button = document.getElementById("change-login1");
var button2 = document.getElementById("change-login2");
console.log(button2);


// var test = document.getElementById("change-test");

// test.addEventListener('click', e => {
//     location.href="../../Student Home/studenthome.html";
// });

document.getElementsByClassName("return-button")[0].setAttribute("id", "hidden");

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
var about_page = document.getElementsByClassName("about-button");
var student_log_box = document.getElementsByClassName("student-login");
var business_log_box = document.getElementsByClassName("business-login");
var i = 0;
var txt = "The purpose of UnBroke is providing a reliable connection between students and local businesses. "
            + "UnBroke allows business owners to advertise their deals on a free online platform, and students in "
            + "turn recieve an database of information to conserve money.";
about_page[0].onclick = function() {
    document.getElementsByClassName("student-login")[0].classList.add("start-about-page");
    document.getElementsByClassName("about-button")[0].classList.add("start-about-page");
    // student_log_box[0].classList.add("start-about-page");
    business_log_box[0].classList.add("start-about-page"); 
    setTimeout(function() {
        document.getElementsByClassName("student-login")[0].setAttribute("id", "hidden"); //
        document.getElementsByClassName("unbroke-about-page")[0].removeAttribute("id");
        document.getElementsByClassName("unbroke-about-page")[0].classList.add("end-about-page");
        
        setTimeout(function() {
            typeWriter(); //
        },600);

        document.getElementsByClassName("about-button")[0].setAttribute("id", "hidden"); 
        document.getElementsByClassName("return-button")[0].removeAttribute("id");
        document.getElementsByClassName("return-button")[0].classList.add("end-about-page"); 
 
    }, 600);
}

/* Rest everything */
document.getElementsByClassName("return-button")[0].onclick = function() {
    document.getElementsByClassName("unbroke-about-page")[0].classList.remove("end-about-page");
    document.getElementsByClassName("unbroke-about-page")[0].classList.add("start-about-page");
    document.getElementsByClassName("return-button")[0].classList.remove("end-about-page");
    document.getElementsByClassName("return-button")[0].classList.add("start-about-page");
    setTimeout(function() {
        document.getElementsByClassName("unbroke-about-page")[0].classList.remove("start-about-page");
        document.getElementsByClassName("return-button")[0].classList.remove("start-about-page");
        document.getElementsByClassName("unbroke-about-page")[0].setAttribute("id", "hidden");
        document.getElementsByClassName("return-button")[0].setAttribute("id", "hidden");

        document.getElementsByClassName("about-button")[0].classList.remove("start-about-page");
        document.getElementsByClassName("about-button")[0].removeAttribute("id");
        document.getElementsByClassName("about-button")[0].classList.add("end-about-page");
        document.getElementsByClassName("student-login")[0].classList.remove("start-about-page");
        document.getElementsByClassName("student-login")[0].removeAttribute("id");
        document.getElementsByClassName("student-login")[0].classList.add("end-about-page");
        business_log_box[0].classList.remove("start-about-page"); 
        business_log_box[0].classList.add("end-about-page");
        document.getElementsByClassName("unbroke-about-page")[0].innerHTML = "";
        i = 0;
        setTimeout(function() {
            
            document.getElementsByClassName("about-button")[0].classList.remove("end-about-page");
            document.getElementsByClassName("student-login")[0].classList.remove("end-about-page");
            business_log_box[0].classList.remove("end-about-page");
        },600);

        
    },600);
}






function typeWriter() {
    var speed = 5; /* The speed/duration of the effect in milliseconds */
    if (i < txt.length) {
        document.getElementsByClassName("unbroke-about-page")[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// for(var i = 0; i < txt.length; i++) {
//     setTimeout(function() {
//         document.getElementsByClassName("unbroke-about-page")[0].innerHTML += txt.charAt(i);
//         i++;
//     }, 200);
// }



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