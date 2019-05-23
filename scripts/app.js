const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const Line1 = document.querySelector('.link1');
    const Logo = document.querySelector('.logo')
    const Line2 = document.querySelector('.link2');
    burger.addEventListener('click',() => {

        nav.classList.toggle('nav-active');
        Line1.classList.toggle('line1-active');
        Line2.classList.toggle('line2-active');
        Logo.classList.toggle('logo-active');
    });
    
}


navSlide();