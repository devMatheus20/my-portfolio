const buttonMenu = document.querySelector('.menu-icon')
const navLinks = document.querySelectorAll('.nav-link')




// Mudar posição das linhas
const translateLines = () => {
    let line1 = document.getElementById('line-one')
    let line2 = document.getElementById('line-two')
    let line3 = document.getElementById('line-three')

    if(line1.className === 'line-1') line1.className = 'line-1t'
    else line1.className = 'line-1'

    if(line2.className === 'line-2') line2.className = 'line-2t'
    else line2.className = 'line-2'

    if(line3.className === 'line-3') line3.className = 'line-3t'
    else line3.className = 'line-3'
}


// Abrir o menu
const showMenu = () => {
    const navList = document.getElementById('nav-list')

    navLinks.forEach(element => {
        element.addEventListener('click', () => {
            navList.className = 'nav-list'
            
        })
    })

    if(navList.className === 'nav-list') navList.className = 'show-list'
    else navList.className = 'nav-list'  
    
    translateLines()
}




navLinks.forEach(link => {
    link.addEventListener('click', translateLines)
})

buttonMenu.addEventListener('click', showMenu)


