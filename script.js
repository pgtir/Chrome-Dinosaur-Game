let dinoImg = document.querySelector('.dinoImg');
let treeImg = document.querySelector('.treeImg');
// jump the dinosaur
window.addEventListener("click", function () {
    if(dinoImg.classList != "animateDino") {
        dinoImg.classList.add('animateDino');
        // after 0.5s remove class
        setTimeout(() => {
            dinoImg.classList.remove('animateDino');
        }, 500);
    }
});
