let burger = document.getElementById('burger-menu');
let mobileMenu = document.getElementById('mob-menu');

burger.addEventListener('click', () => {
   document.body.classList.toggle('lock');
   burger.classList.toggle('active');
   mobileMenu.classList.toggle('active');

   console.log('hello')
});
