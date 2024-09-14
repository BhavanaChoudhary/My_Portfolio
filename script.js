document.addEventListener("DOMContentLoaded", () => {
    const typingLines = document.querySelectorAll('.typing-line');
    const secondPage = document.querySelector('#secondpage');

    const typeLines = () => {
        typingLines.forEach((line, index) => {
            const typingDuration = line.textContent.length * 0.08;
            line.style.animation = `typing ${Math.max(3, typingDuration)}s ease-out ${index * 2.4}s forwards`;
        });
    };

    const handleIntersection = (entries, observer) => {
        if (entries[0].isIntersecting) {
            typeLines();
            observer.unobserve(secondPage); 
        }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    observer.observe(secondPage);
});


$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        
       
        $('.portfolio-filter li').removeClass('portfolio-filter-active');
        
        
        $(this).addClass('portfolio-filter-active');
        
       
        if (value === 'all') {
            $('.portfolio-box').fadeIn('10');
        } else {
            $('.portfolio-box').not('.' + value).fadeOut('1000');
            $('.portfolio-box').filter('.' + value).fadeIn('1000');
        }
    });
});

$(document).ready(function(){
    $('.list').click(function(){
        console.log('Filter clicked:', $(this).attr('data-filter')); // Debug statement
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.portfolio-box').fadeIn('1000');
        } else {
            $('.portfolio-box').not('.' + value).fadeOut('1000');
            $('.portfolio-box').filter('.' + value).fadeIn('1000');
        }
    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     const contactTrigger = document.getElementById('contact-trigger');
//     const contactFormContainer = document.getElementById('contact-form-container');

//     contactTrigger.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent the default link behavior
//         if (contactFormContainer.style.display === 'block') {
//             contactFormContainer.style.display = 'none';
//         } else {
//             contactFormContainer.style.display = 'block';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const contactTrigger = document.getElementById('contact-trigger');
    
    contactTrigger.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Scroll to the contact form container
        document.getElementById('contact-info-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
