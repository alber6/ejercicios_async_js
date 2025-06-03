
const body = document.querySelector("body");
const h1 = document.createElement("h1")
const selector = document.getElementById("character-list");
h1.textContent = "Game of Thrones characters";
body.insertBefore(h1, selector);

fetch("https://thronesapi.com/api/v2/Characters")
    .then((res) => res.json())
    .then((res) => {
        const selector = document.querySelector("select");
        const personajes = res;
        const div = document.querySelector("div");

        if (personajes.length > 0) {
            const placeholder = document.createElement("option");
            placeholder.value = "";
            placeholder.textContent = "Seleccione uno de los personajes...";
            selector.value = "";
            selector.appendChild(placeholder);
            //que no aparezca en el div donde están los personajes porque al cargar la página no hay ningún personaje seleccionado
            div.style.display = "none";
          }

        for (const personaje of personajes) {
            // const div = document.createElement("div");
            // div.innerHTML = `
            // <h2>${personaje.fullName}</h2>
            // <img src="${personaje.imageUrl}" class="image"/>
            // `
            // body.appendChild(div);
            // por si quiero que aparezca todos los personajes en el body

            // llenar el selector de los nombres de los personajes
            const option = document.createElement("option");
            option.value = personaje.fullName;
            option.textContent = personaje.fullName;
            selector.appendChild(option);
        };
       
        selector.addEventListener("change", function() {
            const personajeSeleccionado = personajes.find(personaje => selector.value === personaje.fullName);
            if (personajeSeleccionado) {
                console.log(personajeSeleccionado);
                //que aparezca el div donde se encuentra el personaje seleccionado
                div.style.display = "flex";
                div.innerHTML = `
                    <h2>${personajeSeleccionado.fullName}</h2>
                    <h3>${personajeSeleccionado.title}</h3>
                    <p>${personajeSeleccionado.family}</p>
                    <img src="${personajeSeleccionado.imageUrl}" id="character-image">
                `;
            } else {
                div.innerHTML = "";
            }

    })

    });
