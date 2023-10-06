
const searchImg = document.querySelector('.search-img');
const searchContainer = document.querySelector('.header__search__container');


searchImg.addEventListener('click', (e) => {
    e.stopPropagation(); 
    searchContainer.classList.add('search-width'); 
    const searchInput = searchContainer.querySelector('.header__search');
    searchInput.focus(); 
});


document.addEventListener('click', (e) => {
    if (e.target !== searchImg && e.target !== searchContainer) {
        searchContainer.style.width = '0'; 
    }
});


searchContainer.addEventListener('click', (e) => {
    e.stopPropagation();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchContainer.style.width = '0';
    }
});



//переключение контента в мейне
const swicthMeassureBtn = document.querySelector('.button__switch__container-hardness')
const containerHardness = document.querySelector('.container__hardness')
const swicthHardnessBtn = document.querySelector('.button__switch__container')
const containerMeassure = document.querySelector('.container__measure')

swicthMeassureBtn.addEventListener('click', () => {
    containerHardness.style.opacity = 0;
    containerHardness.style.visibility = 'hidden';
    containerMeassure.style.opacity = 1;
    containerMeassure.style.visibility = 'visible';
    swicthMeassureBtn.style.display = 'none';
    swicthHardnessBtn.style.display = 'flex';
});

swicthHardnessBtn.addEventListener('click', () => {
    containerHardness.style.opacity = 1;
    containerHardness.style.visibility = 'visible';
    containerMeassure.style.opacity = 0;
    containerMeassure.style.visibility = 'hidden';
    swicthHardnessBtn.style.display = 'none';
    swicthMeassureBtn.style.display = 'flex';

});



//табы в хедере
const productToggle = document.querySelector('.product-toggle');
const productMenu = document.querySelector('.tab-content');

productToggle.addEventListener('click', () => {
    productMenu.classList.toggle('show-menu');
    productMenu.classList.toggle('display-none');

});

const otherItems = document.querySelectorAll('.nav__list__item:not(.product-toggle)');

otherItems.forEach((item) => {
    item.addEventListener('click', () => {
        productMenu.classList.remove('show-menu');
        productMenu.classList.add('display-none');
    });
});




//внутрений слайдер
let sliderContainers = document.querySelectorAll(".productions__slider__item");

sliderContainers.forEach(function (sliderContainer) {
    let currentSlide = 0;
    let slides = sliderContainer.querySelectorAll(".slider__list-inside-item");
    let dots = sliderContainer.querySelectorAll(".dot");

    function showSlide(slideIndex) {
        slides.forEach(function (slide) {
            slide.style.display = "none";
        });
        slides[slideIndex].style.display = "block";

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });
        dots[slideIndex].classList.add("active");
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            if (index !== currentSlide) {
                currentSlide = index;
                showSlide(currentSlide);
            }
        });
    });


});


//внешний слайдер
const hardnessList = document.getElementById("hardnessList");
const measureList = document.getElementById("measureList");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", () => {
    const firstItem = hardnessList.firstElementChild;
    const firstItemMeasure = measureList.firstElementChild;

    hardnessList.removeChild(firstItem);
    hardnessList.appendChild(firstItem);

    measureList.removeChild(firstItemMeasure);
    measureList.appendChild(firstItemMeasure);

    arrowLeft.classList.remove('active-arrow');
    arrowRight.classList.add('active-arrow');
});

arrowRight.addEventListener("click", () => {
    const lastItem = hardnessList.lastElementChild;
    const lastItemMeasure = measureList.lastElementChild;

    hardnessList.removeChild(lastItem);
    hardnessList.insertBefore(lastItem, hardnessList.firstElementChild);

    measureList.removeChild(lastItemMeasure);
    measureList.insertBefore(lastItemMeasure, measureList.firstElementChild);

    arrowRight.classList.remove('active-arrow');
    arrowLeft.classList.add('active-arrow');
});




//табы переключения слайдера

const tabTverdometr = document.getElementById('tverdometrTab')
const tabMerytverdosti = document.getElementById('merytverdostiTab')
const tverdometrContainer = document.querySelector('.slider__hardness__content')
const meryTverdostiContainer = document.querySelector('.slider__measure__content')

tabTverdometr.addEventListener('click', () => {
    tverdometrContainer.classList.remove('display-none');
    meryTverdostiContainer.classList.add('display-none');

    tabTverdometr.classList.add('active-tab-productions');
    tabTverdometr.classList.add('active-tab-productions::after');

    tabMerytverdosti.classList.remove('active-tab-productions');
    tabMerytverdosti.classList.remove('active-tab-productions::after');
})


tabMerytverdosti.addEventListener('click', () => {
    meryTverdostiContainer.classList.remove('display-none');
    tverdometrContainer.classList.add('display-none');

    tabTverdometr.classList.remove('active-tab-productions');
    tabTverdometr.classList.remove('active-tab-productions::after');

    tabMerytverdosti.classList.add('active-tab-productions');
    tabMerytverdosti.classList.add('active-tab-productions::after');
})



//слайдер производство
const manufactureList = document.getElementById("manufacture-slider");
const arrowLeftManufacture = document.querySelector(".arrow-left-manufacture");
const arrowRightManufacture = document.querySelector(".arrow-right-manufacture");


arrowLeftManufacture.addEventListener("click", () => {
    const firstItem = manufactureList.firstElementChild;

    manufactureList.removeChild(firstItem);
    manufactureList.appendChild(firstItem);
});

arrowRightManufacture.addEventListener("click", () => {
    const lastItem = manufactureList.lastElementChild;

    manufactureList.removeChild(lastItem);
    manufactureList.insertBefore(lastItem, manufactureList.firstElementChild);


});




// изображение в модалке
const images = document.querySelectorAll('.enlarge-image');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';

        modalImage.src = image.src;
        modalImage.classList.add('size-modal')
       
    });
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

//слайдер инфоцентр

const infoList = document.getElementById("infoSlider");
const arrowLefInfo = document.querySelector(".arrow-left-info");
const arrowRightInfo = document.querySelector(".arrow-right-info");


arrowLefInfo.addEventListener("click", () => {
    const firstItem = infoList.firstElementChild;

    infoList.removeChild(firstItem);
    infoList.appendChild(firstItem);
});

arrowRightInfo.addEventListener("click", () => {
    const lastItem = infoList.lastElementChild;

    infoList.removeChild(lastItem);
    infoList.insertBefore(lastItem, infoList.firstElementChild);

});


//анимация на появление блоков

const subContainers = document.querySelectorAll('.sub__container');
const viewportHeight = window.innerHeight;

function handleScroll() {
    subContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        if (rect.top - viewportHeight <= 0) {
            container.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', handleScroll);

//раскрытие бургер меню
const openBurger = document.querySelector('.burger__icon');
const closeBurger = document.querySelector('.close__icon');
const burgerMenu = document.querySelector('.burger__container');

openBurger.addEventListener('click', ()=>{
    openBurger.classList.add('display-none')
    closeBurger.classList.remove('display-none')
    burgerMenu.classList.remove('display-none')
})

closeBurger.addEventListener('click', ()=>{
    openBurger.classList.remove('display-none')
    closeBurger.classList.add('display-none')
    burgerMenu.classList.add('display-none')
})


//раскрытие выпадающего списка в бургер меню

const productsItem = document.querySelector('.burger__products');
const subMenu = document.querySelector('.sub-menu');

productsItem.addEventListener('click', () => {
    subMenu.classList.toggle('open');
});

//переключение изображения в мобилке

const measureHeader = document.getElementById('measureHeader');
const hardnessHeader = document.getElementById('hardnessHeader');
const hardnessImage = document.querySelector('.hardness__mobile-img');
const measureImage = document.querySelector('.measure__mobile-img');
const activeText = document.querySelector('.active__text')

measureHeader.addEventListener('click', () => {
    hardnessImage.style.opacity = '0';
    measureImage.classList.remove('display-none');
    hardnessHeader.classList.remove('active__text');

    hardnessImage.classList.add('display-none');
    measureHeader.classList.add('active__text');
    
    setTimeout(() => {
        measureImage.style.opacity = '';
    }, 200);
});

hardnessHeader.addEventListener('click', () => {
    measureImage.style.opacity = '0';

    measureImage.classList.add('display-none');
    hardnessHeader.classList.add('active__text');

    hardnessImage.classList.remove('display-none');
    measureHeader.classList.remove('active__text');
    
    setTimeout(() => {
        hardnessImage.style.opacity = '';
    }, 200);
});


