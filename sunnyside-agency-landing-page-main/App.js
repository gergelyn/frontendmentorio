const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navigation');

hamburger.addEventListener('click', function(e) {
    console.log("Click");
    if (navUl.style.display === "flex") {
        console.log("Its block so it will be none")
        navUl.style.display = "none";
    } else {
        console.log("Its none so it will be block")
        navUl.style.display = "flex";
    }
});