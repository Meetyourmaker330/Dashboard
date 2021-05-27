let burger = document.getElementById('burger-menu');
let mobileMenu = document.getElementById('mob-menu');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   mobileMenu.classList.toggle('active');
});
