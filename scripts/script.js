function fadeIn(element, duration) {
    element.style.opacity = 0;
    let start = null;

    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(1, progress / duration);

        if (progress < duration) {
        requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Menemukan elemen navigasi
const navElement = document.querySelector('nav');

// Memanggil fungsi fadeIn saat halaman dimuat
window.addEventListener('load', function () {
    fadeIn(navElement, 1000); // Animasi dalam 1000ms (1 detik)
});