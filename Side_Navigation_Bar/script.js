const sidebarToggler = document.querySelector('.sidebar-toggler')
const sidebar = document.querySelector('.sidebar')

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('collapse')
})