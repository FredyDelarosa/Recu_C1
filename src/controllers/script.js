//script.js
import Contact from "../models/Contact.js"
import { bst } from "./dependencies.js";

let addBtn = document.getElementById("almanaque-btn");
let searchBtn = document.getElementById("search-btn");
let findMinBtn = document.getElementById("find-min-btn");
let findMaxBtn = document.getElementById("find-max-btn");

addBtn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let instrument = document.getElementById("instrument").value;

    let contacto = new Contact(name, age, instrument);
    let data = bst.add(contacto);
    
    if (data) {
        Swal.fire({
            icon: "success",
            text: "Registro exitoso",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registro fallido",
        });
    }
});

searchBtn.addEventListener("click", () => {
    let searchQuery = parseInt(document.getElementById("searchQuery").value);
    let result = bst.search(contact => contact.age === searchQuery);
    
    if (result) {
        Swal.fire(`Contacto encontrado: ${result.name}, ${result.age} años, Instrumento: ${result.instrument}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registro no encontrado",
        });
    }
});

findMinBtn.addEventListener("click", () => {
    let result = bst.findMin();
    if (result) {
        Swal.fire(`Contacto menor: ${result.name}, ${result.age} años, Instrumento: ${result.instrument}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay contactos en el almanaque",
        });
    }
});

findMaxBtn.addEventListener("click", () => {
    let result = bst.findMax();
    if (result) {
        Swal.fire(`Contacto mayor: ${result.name}, ${result.age} años, Instrumento: ${result.instrument}`);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay contactos en el almanaque",
        });
    }
});

