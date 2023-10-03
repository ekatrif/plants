const options = {
    "basics": {
        title: "Basics",
        description:"Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price:15,
    },
    "standard": {
        title: "Standard",
        description:"Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price:25,
    },
    "pro care": {
        title: "Pro care",
        description:"Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
        price:35,
    }
};
const optionsClosed = ["Basics", "Standard", "Pro care"];
const optionsWrapper = document.querySelector(".prices__options");
addInactiveOptions();
optionsWrapper.addEventListener("click",openOption);
function openOption(e) {
    console.log(e.target);
    if (e.target.classList.contains("prices__option")) {
        const activeOptions = document.querySelectorAll(".prices__option-opened");
        if (activeOptions.length) {
            for (let i=0;i<activeOptions.length;i++) {
                let title = activeOptions[i].querySelector(".price-option__title");
                activeOptions[i].replaceWith(buildClosedOption(title.innerText,activeOptions[i]));
            }
        }
        e.target.replaceWith(buildActiveOption(e.target.innerText.toLowerCase(),e.target));
    }
    if (e.target.classList.contains("prices__option-opened")) {
        let title = e.target.querySelector(".price-option__title");
        e.target.replaceWith(buildClosedOption(title.innerText,e.target));
    }
}
function buildClosedOption(option,container) {
    const wrapper = document.createElement('div');
    wrapper.className = "prices__option price-option";
    wrapper.innerText = option;
    return container.insertAdjacentElement("beforebegin",wrapper);
}
function buildActiveOption(option,container) {
    const wrapper = document.createElement('div');
    wrapper.className = "prices__option-opened";
    const title = document.createElement('div');
    title.className = "price-option__title";
    title.innerText = options[option].title;
    const description = document.createElement('div');
    description.className = "price-option__description";
    description.innerText = options[option].description;
    const price = document.createElement('div');
    price.className = "price-option__price";
    const span1 = document.createElement('span');
    span1.innerText = "$";
    const span2 = document.createElement('span');
    span2.innerText = options[option].price;
    const button = document.createElement('div');
    button.className = "price-option__button";
    const link = document.createElement('a');
    link.className = "price-option__link";
    link.setAttribute("href","#contacts");
    link.innerText = "Order";
    price.appendChild(span1);
    price.appendChild(span2);
    price.innerHTML += " / per hour";
    button.appendChild(link);
    wrapper.appendChild(title);
    wrapper.appendChild(description);
    wrapper.appendChild(price);
    wrapper.appendChild(button);
    return container.insertAdjacentElement("beforebegin",wrapper);
}
function addInactiveOptions() {
    for (let i=0;i<optionsClosed.length;i++) {
        const option = document.createElement('div');
        option.className = "prices__option price-option";
        option.innerText = optionsClosed[i];
        optionsWrapper.appendChild(option);
    }
}