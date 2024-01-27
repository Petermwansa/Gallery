
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nexgtBtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    // we used 900 here because the width of the cotainer is 900px 
    scrollContainer.scrollLeft += 900;
})

nexgtBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})