
const listServices = document.querySelector(".services__list");

listServices.addEventListener("click", function (event) {
    const item = event.target.closest(".services__list__item");

    if (window.innerWidth < 768) {
        if (item) {
            item.classList.toggle("services__list__item--mob-active");

            const paragraph = item.querySelector(".services__list__item__description");
            paragraph.classList.toggle("services__list__item__description--show")
        }
    }

    if (window.innerWidth >= 768) {
        if (item.classList.contains("services__list__item--disabled-desk")) {
            const activeTab = document.querySelector(".services__list__item--active-desk");
            activeTab.classList.remove("services__list__item--active-desk");
            activeTab.classList.add("services__list__item--disabled-desk");

            const description = item.dataset.serviceDecription;
            const paragraphBlock = document.querySelector(".services__content__info");
            paragraphBlock.textContent = description;
            item.classList.add("services__list__item--active-desk");
            item.classList.remove("services__list__item--disabled-desk");
        }
    }
})


const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger-menu__dark-background");
const burgerButton = document.querySelector(".header__burger-logo__burger");
const closeButton = document.querySelector(".header__burger-logo__close");
const darkBackground = document.querySelector(".burger-menu__dark-background");

burgerButton.addEventListener("click", function () {
    // Stop scrolling
    document.body.style.overflow = "hidden";
    // Show burger menu
    burgerMenu.style.display = "block";
    // Switch headers buttons
    closeButton.style.display = "block";
    burgerButton.style.display = "none";
})

document.body.addEventListener("click", function (event) {
    if ( event.target === darkBackground || event.target.closest(".burger-menu__navigation__link")) {
        // Continue scrolling
        console.log(event.target)
        document.body.style.overflow = "scroll";
        // hide burger menu
        burgerMenu.style.display = "none";
        // Switch headers buttons
        closeButton.style.display = "none";
        burgerButton.style.display = "block";
    }
})

header.addEventListener("click", function (event) {
    if (event.target.closest(".header__logo") || event.target.closest(".header__burger-logo__close")) {
        // Continue scrolling
        console.log(event.target)
        document.body.style.overflow = "";
        // hide burger menu
        burgerMenu.style.display = "none";
        // Switch headers buttons
        closeButton.style.display = "none";
        burgerButton.style.display = "block";
    }
})
