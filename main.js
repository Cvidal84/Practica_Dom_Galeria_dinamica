const cuadros = [
    {title: 'Ninja', img: '/fotos/1.1.png', hoverImg: '/fotos/1.png'},
    {title: 'Goku', img: '/fotos/2.1.png', hoverImg: '/fotos/2.png'},
    {title: 'Kimetsu no Yaiba', img: '/fotos/3.1.png', hoverImg: '/fotos/3.png'},
    {title: 'Naruto Rage', img: '/fotos/4.1.png', hoverImg: '/fotos/4.png'},
    {title: 'Naruto', img: '/fotos/5.1.png', hoverImg: '/fotos/5.png'},
    {title: 'Nezuko', img: '/fotos/6.1.png', hoverImg: '/fotos/6.png'},
    {title: 'Goku Rage', img: '/fotos/7.1.png', hoverImg: '/fotos/7.png'},
    {title: 'Armagedon', img: '/fotos/8.1.png', hoverImg: '/fotos/8.png'},
    {title: 'Saitama', img: '/fotos/9.1.png', hoverImg: '/fotos/9.png'},
    {title: 'Saitama punch', img: '/fotos/10.1.png', hoverImg: '/fotos/10.png'},
    {title: 'Meditation', img: '/fotos/11.1.png', hoverImg: '/fotos/11.png'},
    {title: 'Dark Skull', img: '/fotos/12.1.png', hoverImg: '/fotos/12.png'}
]

const cuadrosSection = document.querySelector(".cuadros")
for (const cuadro of cuadros) { /* iteramos sobre el array */
    const elementImg = document.createElement("img") /* creamos una imagen desde el array */
    elementImg.src = cuadro.img

    const elementh4 = document.createElement("h4") /* creamos un h4 desde el array */
    elementh4.textContent = cuadro.title

    const elementh3 = document.createElement("h3") /* creamos un h3 de un precio predefinido */
    elementh3.textContent = "19.99€"

    const cuadroDiv = document.createElement("div") /* creamos un div para meter dentro las tres cosas por cada cuadro */
    cuadroDiv.appendChild(elementImg)
    cuadroDiv.appendChild(elementh4)
    cuadroDiv.appendChild(elementh3)

    cuadrosSection.appendChild(cuadroDiv) /* metemos los divs dentro del section */

    elementImg.addEventListener("mouseover", () => {
        elementImg.src = cuadro.hoverImg
    })

    elementImg.addEventListener("mouseout", () => {
        elementImg.src = cuadro.img
    })

    elementh3.addEventListener("mouseover", () => {
        elementh3.style.backgroundColor ='rgb(121, 50, 201)'
        elementh3.style.color='white'
    })
    elementh3.addEventListener("mouseout", () => {
        elementh3.style.backgroundColor='white'
        elementh3.style.color ='rgb(121, 50, 201)'
    })

}

