
const isIntersecting = (entry => {
    return entry.isIntersecting//true (dentro de la planta)
})

const loadImage = (entry) => {
    const nodo = entry.target;
    const imagen = container.querySelector("img");
    const url = imagen.data.src
    //cargar imagen
    imagen.src = url;

    //quitar el regstro de imagen
    onseber.unonserve(nodo)
};

const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(accion)
});

//
const registerImage = (imagen) => {
    //IntersectacionObservador -> oberver(imagen)
    observer.observe(imagen)

};