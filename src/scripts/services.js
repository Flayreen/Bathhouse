const listServices = document.querySelector(".services__list");

listServices.addEventListener("click", function (event) {
    const item = event.target.closest(".services__list__item");

    if (window.innerWidth < 768) {
        if (item) {
            item.classList.toggle("services__list__item--mob-active");

            const paragraph = item.querySelector(".services__list__item__description");
            paragraph.classList.toggle("services__list__item__description--show");
        }
    }

    if (window.innerWidth >= 768) {
        if (item.classList.contains("services__list__item--disabled-desk")) {
            const activeTab = document.querySelector(".services__list__item--active-desk");
            activeTab.classList.remove("services__list__item--active-desk");
            activeTab.classList.add("services__list__item--disabled-desk");

            const description = item.dataset.serviceDecription;
            const paragraphBlock = document.querySelector(".services__content__info");
            paragraphBlock.classList.add("animatedText");
            paragraphBlock.textContent = description;
            setTimeout(() => {
                paragraphBlock.classList.remove("animatedText")
            }, 500)
            item.classList.add("services__list__item--active-desk");
            item.classList.remove("services__list__item--disabled-desk");
        }
    }
})