const btnMenu = document.querySelector('.btn-menu img')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const formBox = document.querySelector('.form-box')
const blob = document.querySelector('.blob')

const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')
const btnMenuLogin = document.querySelector('.btn-menu-login')
const registerBox = document.querySelector('#register-box')
const loginBox = document.querySelector('#login-box')

btnMenuLogin.onclick = ()=>{
    formBox.classList.toggle('show')
    blob.classList.toggle('show-blob')
}
btnMenu.onclick = ()=>{

    menu.classList.toggle('active')
    body.classList.toggle('flou')
}

registerBtn.onclick = ()=>{
    registerBox.style.left = '50px'
    loginBox.style.left = '-450px'
}
loginBtn.onclick = ()=>{
    registerBox.style.left = '450px'
    loginBox.style.left = '50px'
}