//template_ob2sc0n

//service_a8n1b9y

//kSBXwG5ZmNru9jeFp

 function contact(event) {
   event.preventDefault();
   const loading = document.querySelector(".modal__overlay--loading");
   const success = document.querySelector(".modal__overlay--success");
   loading.classList += " modal__overlay--visible";


    emailjs
    .sendForm(
        "service_a8n1b9y",
        "template_ob2sc0n",
        event.target,
        "kSBXwG5ZmNru9jeFp"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";   
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at erosofatelier@gmail.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}