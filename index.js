const question_btn = document.getElementsByClassName("faq-btn"); 
const arrow = document.querySelectorAll(".arrow");
const title = document.querySelectorAll(".title");
const texto = document.getElementsByClassName("faq-response");

for (let i = 0; i < question_btn.length; i++) {
    question_btn[i].addEventListener("click", () => {
        closeAll();
        openQuest(i);
    });
}

function openQuest(i) {
arrow[i].style.transform = "rotateX(180deg)";
title[i].style.fontWeight = "700";
texto[i].style.maxHeight = "10em";
texto[i].style.opacity = "1";
}

function closeAll() {
    for (let i = 0; i < question_btn.length; i++) {
        arrow[i].style.transform = "rotateX(0deg)";
        title[i].style.fontWeight = "500";
        texto[i].style.maxHeight = "0px";
        texto[i].style.opacity = "0";
    }
}
