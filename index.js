let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm
        (`service_siueviw`,
         `template_2pwbaog`,
         event.target,
         `ieAiBu1ZhZ11fuRyy`
        ).then(() => {
            loading.classList.remove(`modal__overlay--visible`);
            success.classList += " modal__overlay--visible";
            
        }).catch(() => {
            loading.classList.remove(`modal__overlay--visible`);
            alert("The email service is temporarily unavailable, please feel free to contact me directly at lfcaruccio@gmail.com");
        })


        setTimeout(() => {
        }, 1000);
}



function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
    document.body.classList += ` modal__open`;
}