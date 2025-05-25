document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("h1, h2, h3, p, span, label");

    // Aplica la clase base a todos
    elementos.forEach(el => {
        if (!el.classList.contains("carrusel-header") && !el.classList.contains("carrusel-title")) {
            el.classList.add("animar-entrada");
        }
    });

    // Observador para mostrar cuando entra en pantalla
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("mostrar");
                observer.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".animar-entrada").forEach(el => {
        observer.observe(el);
    });
});
