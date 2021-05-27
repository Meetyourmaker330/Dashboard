let burger = document.getElementById('burger-menu');
let mobileMenu = document.getElementById('mob-menu');
let dropDownBtn = document.getElementById('open-dropdown-btn');
let dropdown = document.getElementById('dropdown');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   mobileMenu.classList.toggle('active');
});

dropDownBtn.addEventListener('click', () => {
   dropDownBtn.classList.toggle('show');
   dropdown.classList.toggle('show');
})


