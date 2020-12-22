function saludar(){
    console.log(`Hola, soy ${this.name} ${this.apellido}`);
}

const chris = {
    name:"Chris",
    apellido:"Evans"
};

//saludar();
//Método Call:
saludar.call(chris);
//2)
function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);
}
caminar.call(chris, 500, `Norte`);

//APPLY:


