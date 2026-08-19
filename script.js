const modal = document.getElementById("modal");
const recordButton = document.querySelector(".record");
const closeButton = document.getElementById("modalClose");

const form = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const submitButton = document.querySelector(".modal-submit");

const toast = document.getElementById("toast");


// =========================
// МОДАЛЬНОЕ ОКНО
// =========================

recordButton.addEventListener("click", () => {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

});

closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
});

const serviceRecordButton = document.querySelector(".service-record");

serviceRecordButton.addEventListener("click", () => {

    serviceModal.classList.remove("active");

    modal.classList.add("active");

});


// Закрытие по клику на затемнение

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// =========================
// ПРОВЕРКА ФОРМЫ
// =========================

function checkForm(showErrors = true) {

    const inputs = [
        nameInput,
        surnameInput,
        phoneInput,
        emailInput
    ];

    let allFilled = true;

    inputs.forEach(input => {

        const error = input.parentElement.querySelector(".error");

        if (input.value.trim() === "") {

            allFilled = false;

            if (showErrors) {
                error.textContent = "Это поле не заполнено";
            }

        } else {

            error.textContent = "";

        }

    });


    if (allFilled) {

        submitButton.classList.add("active");

    } else {

        submitButton.classList.remove("active");

    }

    return allFilled;
}


// =========================
// ПРОВЕРКА ПРИ ВВОДЕ
// =========================

const inputs = [
    nameInput,
    surnameInput,
    phoneInput,
    emailInput
];

inputs.forEach(input => {

    input.addEventListener("input", () => {

        checkForm(false);

    });

});


// =========================
// ОТПРАВКА ФОРМЫ
// =========================

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const valid = checkForm(true);

    if (!valid) {
        return;
    }


    // Закрываем окно

    modal.classList.remove("active");


    // Очищаем форму

    form.reset();

    submitButton.classList.remove("active");


    // Показываем уведомление

    toast.classList.add("show");


    // Убираем уведомление через 5 секунд

    setTimeout(() => {

        toast.classList.remove("show");

    }, 5000);

});


// =========================
// ГАЛЕРЕЯ
// =========================

const workCards = document.querySelectorAll(".work-card");

const imageModal = document.getElementById("imageModal");

const largeImage = document.getElementById("largeImage");

const imageModalClose = document.getElementById("imageModalClose");


workCards.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.querySelector("img");

        largeImage.src = image.src;

        largeImage.alt = image.alt;

        imageModal.classList.add("active");

    });

});


// Закрытие галереи

imageModalClose.addEventListener("click", () => {

    imageModal.classList.remove("active");

});


// Закрытие по фону

imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


// =========================
// АНИМАЦИЯ ПРИ СКРОЛЛЕ
// =========================

const scrollElements = document.querySelectorAll(
    ".advantages, .works, .services, .masters, .reviews"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


scrollElements.forEach(element => {

    element.classList.add("scroll-animation");

    observer.observe(element);

});


// =========================
// КНОПКА НАВЕРХ
// =========================

const scrollTop = document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// ПОДРОБНОСТИ УСЛУГ
// =========================

const serviceModal = document.getElementById("serviceModal");

const serviceModalClose = document.getElementById("serviceModalClose");

const serviceModalTitle = document.getElementById("serviceModalTitle");

const serviceModalText = document.getElementById("serviceModalText");

const serviceModalPrice = document.getElementById("serviceModalPrice");

const serviceButtons = document.querySelectorAll(".service-more");


// ДАННЫЕ УСЛУГ

const servicesData = {

    "Полировка": {

        text: "Восстанавливаем блеск кузова, убираем мелкие царапины и следы эксплуатации. Перед работой тщательно подготавливаем поверхность автомобиля.",

        price: "от 15 000 ₸"

    },

    "Химчистка": {

        text: "Глубокая химчистка салона с удалением загрязнений, пятен и неприятных запахов. Бережно работаем с тканью, кожей и пластиком.",

        price: "от 20 000 ₸"

    },

    "Керамика": {

        text: "Нанесение защитного керамического покрытия на кузов автомобиля. Покрытие придаёт поверхности глубокий блеск и дополнительную защиту.",

        price: "от 35 000 ₸"

    },

    "Детейлинг": {

        text: "Комплексный уход за автомобилем: кузов, салон, отдельные элементы и защитные покрытия. Подбираем комплекс работ под состояние автомобиля.",

        price: "от 30 000 ₸"

    }

};


// ОТКРЫТИЕ

serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const serviceName = button.dataset.service;

        const service = servicesData[serviceName];

        serviceModalTitle.textContent = serviceName;

        serviceModalText.textContent = service.text;

        serviceModalPrice.textContent = service.price;

        serviceModal.classList.add("active");

    });

});


// ЗАКРЫТИЕ ПО КРЕСТИКУ

serviceModalClose.addEventListener("click", () => {

    serviceModal.classList.remove("active");

});


// ЗАКРЫТИЕ ПО ФОНУ

serviceModal.addEventListener("click", (event) => {

    if (event.target === serviceModal) {

        serviceModal.classList.remove("active");

    }

});
