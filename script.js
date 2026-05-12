document.addEventListener('DOMContentLoaded', () => {
    // Definir la fecha objetivo: Martes 12/05/2026 a las 5:00pm (17:00)
    // Meses en JS son 0-indexados. 0=Enero, 4=Mayo.
    const targetDate = new Date(2026, 4, 12, 17, 0, 0).getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minutesEl.innerText = "00";
            secondsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Lógica de los botones
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const overlay = document.getElementById('result-overlay');
    const resultContent = document.getElementById('result-content');
    const btnClose = document.getElementById('btn-close');

    btnYes.addEventListener('click', () => {
        resultContent.innerHTML = '<h3>¡Qué lindo que me seas sincer@! 💖<br>Pero recuerda que la vamos a pasar genial, te espero con muchas ansias.</h3>';
        overlay.classList.remove('hidden');
        // Pequeño timeout para que la transición funcione bien
        setTimeout(() => overlay.classList.add('active'), 10);
    });

    // Si dice que "No" lo olvidará, igual se le manda una advertencia divertida con la imagen del cuchillo.
    // Esto se alinea con la lógica de que la opción contraria saque la imagen de amenaza lúdica.
    btnNo.addEventListener('click', () => {
        resultContent.innerHTML = `
            <h3>¡Ah bueno! Más te vale que no lo olvides... 🔪</h3>
            <img src="cute_knife.png" alt="Ojo con olvidarlo">
        `;
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('active'), 10);
    });

    btnClose.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    });
});
