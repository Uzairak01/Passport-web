const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

function navBar () {
    hamburger.addEventListener("click", () => {
        document.querySelector(".container-fluid").style.left = "0";
        hamburger.style.display = "none";
        document.querySelector(".close").style.display = "block";
    })

    close.addEventListener("click", () => {
        document.querySelector(".container-fluid").style.left = "-100%";
        hamburger.style.display = "block";
        document.querySelector(".close").style.display = "none";
    })
}

navBar();
