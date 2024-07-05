document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.arc-image');
    let currentImageIndex = 0;

    function updateImages() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            img.style.transform = `translateX(${(index - currentImageIndex) * 300}px) translateY(${Math.abs(index - currentImageIndex) * -50}px) scale(${index === currentImageIndex ? 1.2 : 1})`;
            img.style.opacity = index === currentImageIndex ? 1 : 0.7;
        });
        images[currentImageIndex].classList.add('active');
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImages();
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds

    updateImages();
});
