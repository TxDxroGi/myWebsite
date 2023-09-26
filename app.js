let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('sidebar');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
