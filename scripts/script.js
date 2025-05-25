document.addEventListener("DOMContentLoaded", function () {
    // ===========================================
    // AUDIO CON FADE-IN SUAVE
    // ===========================================
    const audio = document.getElementById("audio");

    if (audio) {
        audio.volume = 0; // Inicia en silencio

        const fadeIn = () => {
            let volumen = 0;
            const fadeInterval = setInterval(() => {
                if (volumen < 0.3) {
                    volumen += 0.01;
                    audio.volume = volumen;
                } else {
                    clearInterval(fadeInterval);
                }
            }, 100); // 0.01 cada 100ms → 3s para llegar a 0.3
        };

        const intentoPlay = () => {
            audio.play().then(() => {
                fadeIn();
            }).catch(() => {
                setTimeout(intentoPlay, 2000); // Reintenta si está bloqueado
            });
        };

        intentoPlay();
    } else {
        console.error("No se encontró el elemento de audio.");
    }

    // ===========================================
    // CRONÓMETRO HASTA EL 5 DE JULIO 2025 - 17:30
    // ===========================================
    function crearCountdown() {
        const targetDate = new Date("2025-07-05T17:30:00");
        const currentDate = new Date();
        let diferencia = targetDate - currentDate;

        if (diferencia < 0) diferencia = 0;

        const days = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dia").innerText = days;
        document.getElementById("hor").innerText = hours;
        document.getElementById("min").innerText = minutes;
        document.getElementById("seg").innerText = seconds;
    }

    setInterval(crearCountdown, 1000);
    crearCountdown();

    // ===========================================
    // LÍNEA DE TIEMPO (animación al hacer scroll)
    // ===========================================
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function muestraLi() {
        const items = document.querySelectorAll(".timeline li");
        items.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mues|traLi);
    muestraLi();

    // ===========================================
    // AÑO AUTOMÁTICO EN EL FOOTER
    // ===========================================
    const anio = new Date().getFullYear();
    document.getElementById("anio").innerText = anio;
});
