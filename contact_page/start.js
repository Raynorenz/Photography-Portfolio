const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show_title');
            entry.target.classList.add('show_yap');
        }
    });
});

const titleElemnts = document.querySelectorAll('.title');
const yapElemnts = document.querySelectorAll('.yap');

titleElemnts.forEach((el) => observer.observe(el));
yapElemnts.forEach((el) => observer.observe(el));