// Máquina de escrever
const typeWrite = () =>{
    const textParagraph = document.getElementById('typeWriter')
    const textArray = textParagraph.innerHTML.split('')
    textParagraph.innerHTML = " "

    setTimeout(() => {
        textArray.forEach((letter, i) => {
            setTimeout( () => {
                textParagraph.innerHTML += letter
            }, 100 * i)
        })
    }, 1400)

    
}
typeWrite()



