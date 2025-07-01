const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show_quote');
            entry.target.classList.add('show_about');
            entry.target.classList.add('show_logo');
            entry.target.classList.add('show_pic');
            entry.target.classList.add('show_title');
            entry.target.classList.add('show_yap');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.hidden');
const hidden_quoteElemnts = document.querySelectorAll('.hidden_quote');
const hidden_aboutElemnts = document.querySelectorAll('.hidden_about');
const hidden_logoElemnts = document.querySelectorAll('.hidden_logo');
const hidden_picElemnts = document.querySelectorAll('.hidden_pic');
const titleElemnts = document.querySelectorAll('.title');
const yapElemnts = document.querySelectorAll('.yap');

hiddenElemnts.forEach((el) => observer.observe(el));
hidden_quoteElemnts.forEach((el) => observer.observe(el));
hidden_aboutElemnts.forEach((el) => observer.observe(el));
hidden_logoElemnts.forEach((el) => observer.observe(el));
hidden_picElemnts.forEach((el) => observer.observe(el));
titleElemnts.forEach((el) => observer.observe(el));
yapElemnts.forEach((el) => observer.observe(el));