
const burgerBackground = document.querySelector(".burger-menu__dark-background");
const burgerMenu = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".header__burger-logo__burger");
const closeButton = document.querySelector(".header__burger-logo__close");

burgerButton.addEventListener("click", function () {
    // Stop scrolling
    document.body.style.overflow = "hidden";
    // Show burger menu
    burgerBackground.style.display = "block";
    // Switch headers buttons
    closeButton.classList.remove("header__burger-logo__close--hide");
    burgerButton.classList.add("header__burger-logo__burger--hide");
})

document.body.addEventListener("click", function (event) {
    if (
        event.target.closest(".header__logo")
        || event.target.closest(".header__burger-logo__close")
        || event.target === burgerBackground
        || event.target.closest(".burger-menu__navigation__link")
    ) {
        burgerMenu.classList.add("burger-menu--close");
        setTimeout(() => {
            // Continue scrolling
            document.body.style.overflow = "scroll";
            // hide burger menu
            burgerBackground.style.display = "none";
            // Switch headers buttons
            closeButton.classList.add("header__burger-logo__close--hide");
            burgerButton.classList.remove("header__burger-logo__burger--hide");
            burgerMenu.classList.remove("burger-menu--close");
        }, 400)
    }
})
