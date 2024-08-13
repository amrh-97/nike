'use strict';

const shoes = document.querySelectorAll('.shoe__1');
const nextIcon = document.querySelector('.arrow__icon i:nth-child(2)')
const backIcon = document.querySelector('.arrow__icon i:nth-child(1)')

let currentStep = 0
let schoeChangeVariable = true;

const shoeChange = function (disp) {
    shoes[currentStep].style.display = disp;
}

shoes.forEach(el => {
    el.style.display = 'none';
})

shoeChange('block');
// shoes[currentStep].style.display = 'block';

const shoeNext = function () {
    // shoes[currentStep].style.display = 'none';
    shoeChange('none');
    currentStep++;
    shoes[currentStep].style.animation = 'open 0.7s ease';
    shoeChange('block');
    // shoes[currentStep].style.display = 'block';
    backBtnShow();
    nextBtnHide();
}




const shoeBack = function () {
    // shoes[currentStep].style.display = 'none';
    shoeChange('none');
    currentStep--;
    shoes[currentStep].style.animation = 'open 0.7s ease';
    shoeChange('block');
    // shoes[currentStep].style.display = 'block';
    backBtnHide();
    nextBtnShow();
}

const nextBtnHide = function () {
    if (currentStep >= shoes.length - 1) {
        nextIcon.style.display = 'none';
    }
}
const nextBtnShow = function () {
    if (currentStep < shoes.length - 1) {
        nextIcon.style.display = 'block';
    }
}

const backBtnShow = function () {
    if (currentStep >= 1) {
        backIcon.style.display = 'block';
    }
}
const backBtnHide = function () {
    if (currentStep === 0) {
        backIcon.style.display = 'none';
    }
}
backIcon.addEventListener('click', shoeBack);
nextIcon.addEventListener('click', shoeNext);