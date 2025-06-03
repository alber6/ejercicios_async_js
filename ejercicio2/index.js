// se añade un escuchador para que cada vez que se cargue la página aparezca un pokemon random del 1 al 151 y para eso
// usamos window con domcontentloaded hace que el código se ejecute solo cuando el HTML ya ha sido completamente cargado
// usamos el math.floor para que salgan números enteros y math.random para que salgan aleatorios
window.addEventListener("DOMContentLoaded", () => {

    function CambiarPokemon(){
    //metemos el fetch dentro de una función para que se pueda utilizar al cargar la página y al hacer click y no tener que repetir código.
    const randomPokemon = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    fetch(url)
    .then((res) => res.json())
    .then((res) =>{
    const image = res.sprites.front_default;

    // se selecciona la etiqueta de img que aparece en el html para añadir el src a la etiqueta img
    const img = document.querySelector(".random-image");
    //image es la dirección htttps de la imágenes de los pokemon
    img.src = image;
    });
};
    //cambiar de pokemon cuando se cargue la página
    CambiarPokemon();

    const btnPokemon = document.querySelector(".btn");
    btnPokemon.addEventListener("click", (ev) =>{
        //usar la funcion para que se cambie de pokemon al hacer click
        CambiarPokemon();
    })
});

