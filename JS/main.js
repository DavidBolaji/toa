const menu = document.getElementById('menu')
const sidebar = document.querySelector('.sidebar')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

const scroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.querySelector('.desktop').classList.add('active')
   
  } else {
     document.querySelector('.desktop').classList.remove('active')
  }

}

menu.addEventListener('click', () => {
    sidebar.classList.add('active')
    modal.classList.add('active')
})

modal.addEventListener('click', () => {
    sidebar.classList.remove('active')
    modal.classList.remove('active')
})

close.addEventListener('click', () => {
    modal.classList.remove('active')
    sidebar.classList.remove('active')
    
})

window.addEventListener('scroll', scroll)

