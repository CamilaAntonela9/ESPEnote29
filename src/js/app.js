// Declaración de variables globales
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;
let deferredPrompt; // Agregado

// Funciones
const showPostModal = () => {
  MAIN.style.display = "none"; // Oculta el contenido principal
  MODAL_POST.style.display = "block"; // Muestra el modal
  setTimeout(() => {
    MODAL_POST.style.transform = "translateY(0)"; // Animación para mostrar el modal
  }, 1);
};

const closePostModal = () => {
  MAIN.style.display = "block";
  MODAL_POST.style.transform = "translateY(100vh)"; // Oculta el modal con animación
};

// Evento para controlar la instalación

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("Anulado el evento de instalación");
  event.preventDefault();
  deferredPrompt = event; // Guardamos el evento
});

//CUANDO SE CARGA EL DOM
window.addEventListener("load", () => {
    MAIN = document.querySelector("#main");
    MODAL_POST = document.querySelector("#modal-post-section");

    // Apuntar correctamente al botón con el ícono "+"
    BTN_UPLOAD_POST = document.querySelector("#btn-upload-post");
    BTN_UPLOAD_POST.addEventListener("click", showPostModal);

    // Cerrar el modal al hacer clic en "Cancelar"
    BTN_CLOSE_POST = document.querySelector("#btn-post-cancel");
    BTN_CLOSE_POST.addEventListener("click", closePostModal);

    if(navigator.serviceWorker) {
        const res = navigator.serviceWorker.register("../../sw.js");
        if (res) {
            console.log("Service Worker registrado correctamente");
        }
    }

    const bannerInstall = document.querySelector("#banner-install");
    bannerInstall.addEventListener("click", (event) => {
      if(deferredPrompt){
        deferredPrompt.prontmpt(); // Muestra el prompt de instalación
        const response = deferredPrompt.userChoice;
        if(response.outcome === "accepted") {
          console.log("Usuario aceptó la instalación");
        }
      }
    });
});
