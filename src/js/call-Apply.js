function saludar(){
    console.log(`Hola, soy ${this.name} ${this.apellido}`);
}

const chris = {
    name:"Chris",
    apellido:"Evans"
};

//saludar();
//Método CALL: 
//Separados por una (,).
saludar.call(chris);
//2)
function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}
caminar.call(chris, 500, `Norte`);

//APPLY:
//Se llama (Argumentos) con un ARRAY[].
/* caminar.apply(chris,[800, `Oeste`]); */
//otro:
const valores = [900,`Sur`];
caminar.apply(chris, valores); 

//BIND:
// Pasar argumentos ya existentes. 
const luisa = {
    name: "Luisa",
    apellido: "Rosas"
}
const luisaSaluda = saludar.bind(luisa);
luisaSaluda(); 
//segundo-ejemplo:
const alma = {
    name: "Alma",
    apellido: "Velázquez"
}
const almaSaluda = saludar.bind(alma);
almaSaluda()

//BUTTON:
const buttons = document.getElementsByClassName("call-to-action");

//Nodelist 
//Buttons como THIS.
Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => console.log("Sistema en Peligro!");
})
