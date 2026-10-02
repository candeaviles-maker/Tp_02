const seccion = document.querySelector("section");

function cargarShows() {

    fetch("js/data.json")
    .then(res => res.json())
    .then(shows => {

        seccion.innerHTML = shows.map((show) => `
            <div>
                <h2>${show.artista}</h2>
                <p>${show.descripcion}</p>
                <p>${show.lugar}</p>
                <p>${show.fecha}</p>
            </div>
        `).join("")

    })

}

function CambiarTema() {

    document.body.classList.toggle("movistar")

}

document.querySelector(".btn").addEventListener("click", cargarShows)
document.querySelector(".btn_style").addEventListener("click", CambiarTema)