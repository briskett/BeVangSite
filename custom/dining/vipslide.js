let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    updateBookNowButton();
}


function updateBookNowButton() {
    const bookNowBtn = document.getElementById('bookNowBtn');
    bookNowBtn.textContent = `Book Now for Room ${slideIndex + 1}`;
}

document.getElementById('bookNowBtn').addEventListener('click', function() {
    alert(`Booking for Room ${slideIndex + 1}`);
});