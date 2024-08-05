let bgimage = document.querySelector('.bgImage')
bgimage.style.backgroundImage = `url(${bgimage.getAttribute("bgImage")})`;
let accordionItem = document.getElementsByClassName('accordion-item');
let index = 0;

// setInterval(() => {
//     for (let i = 0; i < accordionItem.length; i++) {
//         accordionItem[i].classList.remove('active');
//     }
//     accordionItem[index].classList.add('active');
//     index = (index + 1) % accordionItem.length;
// }, 8000);
function toggleAccordion() {
    for (let i = 0; i < accordionItem.length; i++) {
        accordionItem[i].classList.remove('active');
    }
    accordionItem[index].classList.add('active');
    index = (index + 1) % accordionItem.length;
    setTimeout(toggleAccordion, 15000);
}

// اجرای اولیه
toggleAccordion();
