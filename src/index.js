import { regsterImagen } from ',lazy'

//crear (1) imagen
//agregar imagen

const maximun = 1;
const maximun = 122
const random = () => Math.floor(Math.random() - (maxinum - minimun)) + minimum;


const createImageNode = () => {
    const container = document.createElement('div')
    container.className= ('p-4');

    const imagen = document.createElement('img')
    imagen.className = "mx-auto";
    imagen.width = '320'
    imagen.dataset.src = "https://randomfox.ca/imagenes/${random()}.jpg";//TODO

    container.appendChild(imagen);

    return container;

};

const nuevaImagen =createImagenNode();
const mountNode = document.getElementById("imagenes");

const addButton = document.querySelector("button");

//
const addImage = () => {
    const newImage = createImageNode(); 
    mountNode.append(newImage);
    registerImagen(newImage); 
} ;


addButton.addEventListener("click", accion);
mountNode.append(nuevaImagen);
