const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show_cat_images');
            entry.target.classList.add('show_cat_pics');
        }
    });
});

const cat_imagesElemnts = document.querySelectorAll('.cat_images');
const cat_picsElemnts = document.querySelectorAll('.cat_pics');


cat_imagesElemnts.forEach((el) => observer.observe(el));
cat_picsElemnts.forEach((el) => observer.observe(el));