const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show_about_text');
            entry.target.classList.add('show_about_img_box');
        }
    });
});

const about_textElemnts = document.querySelectorAll('.about_text');
const about_img_boxElemnts = document.querySelectorAll('.about_img_box');

about_textElemnts.forEach((el) => observer.observe(el));
about_img_boxElemnts.forEach((el) => observer.observe(el));