const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show_img_box');
        }
    });
});

const img_boxElemnts = document.querySelectorAll('.img_box');

img_boxElemnts.forEach((el) => observer.observe(el));