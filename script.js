// Ordering The Settings
let homeLanding = document.querySelector(".home");
homeLanding.style.backgroundImage = "url('../images/back2.jpg')";

// ////////////////////////////////////////////////////
let tabs = document.querySelectorAll('.tabs li');
const tabsArr = Array.from(tabs);

let divsCont = document.querySelectorAll('.content > div');
const divsArr = Array.from(divsCont);


tabsArr.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArr.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArr.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.content).style.display = 'block';
    });
});

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let arrUp = document.querySelector('.arr-up');

window.onscroll = function () {
    if (this.scrollY >= 1200) {
        arrUp.classList.add('show');
    } else {
        arrUp.classList.remove('show');
    }
};

arrUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////

// Get The Sellectors for Contact Form
const hashDone = document.querySelector("#done");


function validation() {
    let error = false;
    if (!error) {
        hashDone.innerText = "Done!";
    }
}