const cuadros = [
    {title: 'Ninja', img: '/fotos/1.1.png', hoverImg: '/fotos/1.png', ventas: 100, precio: 29.99, fecha: '2023-01-15'},
    {title: 'Goku', img: '/fotos/2.1.png', hoverImg: '/fotos/2.png', ventas: 120, precio: 18.99, fecha: '2023-10-15'},
    {title: 'Kimetsu no Yaiba', img: '/fotos/3.1.png', hoverImg: '/fotos/3.png', ventas: 190, precio: 19.99, fecha: '2023-12-10'},
    {title: 'Naruto Rage', img: '/fotos/4.1.png', hoverImg: '/fotos/4.png', ventas: 20, precio: 19.89, fecha: '2024-10-15'},
    {title: 'Naruto', img: '/fotos/5.1.png', hoverImg: '/fotos/5.png', ventas: 160, precio: 19.91, fecha: '2021-10-15'},
    {title: 'Nezuko', img: '/fotos/6.1.png', hoverImg: '/fotos/6.png', ventas: 127, precio: 29.99, fecha: '2023-11-15'},
    {title: 'Goku Rage', img: '/fotos/7.1.png', hoverImg: '/fotos/7.png', ventas: 160, precio: 31.99, fecha: '2023-12-30'},
    {title: 'Armagedon', img: '/fotos/8.1.png', hoverImg: '/fotos/8.png', ventas: 90, precio: 19.95, fecha: '2022-11-15'},
    {title: 'Saitama', img: '/fotos/9.1.png', hoverImg: '/fotos/9.png', ventas: 220, precio: 19.99, fecha: '2023-10-15'},
    {title: 'Saitama punch', img: '/fotos/10.1.png', hoverImg: '/fotos/10.png', ventas: 80, precio: 19.99, fecha: '2024-10-15'},
    {title: 'Meditation', img: '/fotos/11.1.png', hoverImg: '/fotos/11.png', ventas: 20, precio: 19.95, fecha: '2022-10-15'},
    {title: 'Dark Skull', img: '/fotos/12.1.png', hoverImg: '/fotos/12.png', ventas: 220, precio: 19.99, fecha: '2024-10-15'},
    {title: 'Kyojuro', img: '/fotos/13.1.png', hoverImg: '/fotos/13.png', ventas: 120, precio: 20.99, fecha: '2023-10-15'},
    {title: 'Satoru', img: '/fotos/14.1.png', hoverImg: '/fotos/14.png', ventas: 120, precio: 23.99, fecha: '2023-10-15'},
    {title: 'Roshi', img: '/fotos/15.1.png', hoverImg: '/fotos/15.png', ventas: 320, precio: 19.99, fecha: '2022-10-15'},
    {title: 'Jujutsu', img: '/fotos/16.1.png', hoverImg: '/fotos/16.png', ventas: 120, precio: 20.99, fecha: '2023-02-15'},
    {title: 'Kid buu', img: '/fotos/17.1.png', hoverImg: '/fotos/17.png', ventas: 129, precio: 19.99, fecha: '2024-04-15'},
    {title: 'Dragon Ball', img: '/fotos/18.1.png', hoverImg: '/fotos/18.png', ventas: 100, precio: 19.99, fecha: '2023-10-15'},
    {title: 'Pikachu', img: '/fotos/19.1.png', hoverImg: '/fotos/19.png', ventas: 201, precio: 21.99, fecha: '2025-01-15'},
    {title: 'Yoda', img: '/fotos/20.1.png', hoverImg: '/fotos/20.png', ventas: 2050, precio: 19.99, fecha: '2023-10-15'},
    {title: 'Batman', img: '/fotos/21.1.png', hoverImg: '/fotos/21.png', ventas: 120, precio: 21.99, fecha: '2024-12-15'},
    {title: 'Wolverine', img: '/fotos/22.1.png', hoverImg: '/fotos/22.png', ventas: 190, precio: 22.99, fecha: '2021-10-15'},
    {title: 'Dead Pool', img: '/fotos/23.1.png', hoverImg: '/fotos/23.png', ventas: 167, precio: 19.99, fecha: '2022-10-27'},
    {title: 'Star Wars', img: '/fotos/24.1.png', hoverImg: '/fotos/24.png', ventas: 420, precio: 23.99, fecha: '2021-10-15'}
]

const cuadrosSection = document.querySelector(".cuadros")
const selectOrden = document.querySelector("#orden")

cuadrosSection.innerHTML = ""//limpia cuadros antes de mostrar
for (const cuadro of cuadros) { /* iteramos sobre el array */
    const elementImg = document.createElement("img") /* creamos una imagen desde el array */
    elementImg.src = cuadro.img

    const elementh4 = document.createElement("h4") /* creamos un h4 desde el array */
    elementh4.textContent = cuadro.title

    const elementh3 = document.createElement("h3") /* creamos un h3 de un precio predefinido */
    elementh3.textContent = `${cuadro.precio}€`

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

//ordenar según la selección
selectOrden.addEventListener("change", (event) => {
    cuadrosSection.innerHTML = "" //limpiar cuadros antes de mostrar

    let cuadrosOrdenados //creamos una variable para los cuadros ordenados, orden cambiado del original
    const criterio = event.target.value //esto que es?

    if (criterio ==="mas-vendidos") {
        cuadrosOrdenados = [...cuadros].sort((a,b) => b.ventas - a.ventas)
    } else if (criterio ==="precio-mayor-menor") {
        cuadrosOrdenados = [...cuadros].sort((a,b) => b.precio - a.precio)
    } else if (criterio ==="precio-menor-mayor") {
        cuadrosOrdenados = [...cuadros].sort((a,b) => a.precio - b.precio)
    } else if (criterio ==="fecha-publicacion") {
        cuadrosOrdenados = [...cuadros].sort((a,b) => new Date(b.fecha) - new Date (a.fecha)) //este hay que cambiarlo seguramente
    } else {
        cuadrosOrdenados = cuadros
    }

    
    //mostrar cuadros ordenados
    for (const cuadro of cuadrosOrdenados) {
        const elementImg = document.createElement("img");
        elementImg.src = cuadro.img;

        const elementh4 = document.createElement("h4");
        elementh4.textContent = cuadro.title;

        const elementh3 = document.createElement("h3");
        elementh3.textContent = `${cuadro.precio}€`;

        const cuadroDiv = document.createElement("div");
        cuadroDiv.appendChild(elementImg);
        cuadroDiv.appendChild(elementh4);
        cuadroDiv.appendChild(elementh3);

        cuadrosSection.appendChild(cuadroDiv);

        elementImg.addEventListener("mouseover", () => {
            elementImg.src = cuadro.hoverImg;
        });
        elementImg.addEventListener("mouseout", () => {
            elementImg.src = cuadro.img;
        });
        elementh3.addEventListener("mouseover", () => {
            elementh3.style.backgroundColor = 'rgb(121, 50, 201)';
            elementh3.style.color = 'white';
        });
        elementh3.addEventListener("mouseout", () => {
            elementh3.style.backgroundColor = 'white';
            elementh3.style.color = 'rgb(121, 50, 201)';
        });
    }
})
