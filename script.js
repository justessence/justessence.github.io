const crossA = document.querySelector('.humberger span:nth-child(1)')
const crossB = document.querySelector('.humberger span:nth-child(2)')
const crossC = document.querySelector('.humberger span:nth-child(3)')
const slide = document.querySelector('.menu ul')
const humberger = document.querySelector('.humberger');
humberger.addEventListener('click',function(){
    crossA.style.transformOrigin = "3px -1px";
    crossC.style.transformOrigin = "1px 100%";
    crossA.classList.toggle('crossA');
    crossC.classList.toggle('crossC');
    crossB.classList.toggle('crossB');
    slide.classList.toggle('slide');
});

