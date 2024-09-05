const btn = document.querySelector('.nav-toggle');
const content = document.querySelector(' .secundaria');
const content1 = document.querySelector('.terciaria');


btn.addEventListener('click', () => {
    content.classList.toggle('open');
    content1.classList.toggle('open');
})