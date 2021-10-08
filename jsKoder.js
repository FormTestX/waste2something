const toggle = document.getElementsById('menuicon')[0]
const navBar = document.getElementsByClassName('ul')[0]


menuicon.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})

