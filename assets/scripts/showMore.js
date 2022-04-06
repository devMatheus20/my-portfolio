const button = document.querySelector('.show-more')
const rowProjectsTwo = document.querySelector('.row-2')

rowProjectsTwo.style.display = 'none'


// Ver Mais
const showMore = () => {
    if(rowProjectsTwo.style.display === 'flex') {
        rowProjectsTwo.style.display = 'none'
        button.innerHTML = 'Ver mais'
    } else if(rowProjectsTwo.style.display === 'none') {
        rowProjectsTwo.style.display = 'flex'
        button.innerHTML = 'Ver menos'
    }
}




button.addEventListener('click', showMore)
