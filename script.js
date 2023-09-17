const slideImage = (index) => {
    viewImage(index);
    changeChoosenButton(index);
    viewMemText(index);
}

const viewImage = (index) => {
    const images = document.querySelectorAll('.slider__container img');

    for (let i = 0; i < sliderButtonsArea.length; i++) {
        if (index === i) {
            images[i].classList.remove('slider__delete-image');
        } else {
            images[i].classList.add('slider__delete-image');
        }
    }
}

const changeChoosenButton = (index) => {
    const sliderButtons = document.querySelectorAll('.slider__button');

    for (let i = 0; i < sliderButtons.length; i++) {
        if (index === i) {
            sliderButtons[i].classList.add('slider__button_choosen');
        } else {
            sliderButtons[i].classList.remove('slider__button_choosen');
        }
    }
}

const viewMemText = (index) => {
    const sliderMemTexts = document.querySelectorAll('.slider__mem-text');

    for (let i = 0; i < sliderMemTexts.length; i++) {
        if (index === i) {
            sliderMemTexts[i].classList.remove('slider__delete-mem-text');
        } else {
            sliderMemTexts[i].classList.add('slider__delete-mem-text');
        }
    }
}

const sliderButtonsArea = document.querySelectorAll('.slider__button-area');

sliderButtonsArea[0].addEventListener('click', (e) => {
    slideImage(0);
})

sliderButtonsArea[1].addEventListener('click', (e) => {
    slideImage(1);
})

sliderButtonsArea[2].addEventListener('click', (e) => {
    slideImage(2);
})

sliderButtonsArea[3].addEventListener('click', (e) => {
    slideImage(3);
})
