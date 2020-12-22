/* const zelda = {
    name: "Zelda",
    
}

zelda.saludar = function() {
   console.log(`Me llamo ${this.name}`);
}

zelda.saludar(); 
//
const link = {
    name: "Link",
    
}

link.saludar = function() {
   console.log(`Me llamo ${this.name}`);
}

link.saludar();  */

//Otro método:
/* const heroMethods = {
    saludar: function(){
        console.log(`Hola soy ${this.name}`);
    },
    hablar: function(){
        console.log(`Es un saludo ${this.saludo}`)
    }
}
function Hero(name,saludo){
  const hero = {
      name: name,
      saludo: saludo,
  }
  
  hero.saludar = heroMethods.saludar; 
  hero.hablar = heroMethods.hablar;; 
  return hero
}
const zelda = Hero("Zelda", "Soy Leyenda");
zelda.saludar(); 
zelda.hablar();  */

//Otro método => Object.create()
/* const heroMethods = {
    saludar: function(){
        console.log(`Soy un super héroe! soy ${this.name}`);
    }
}
function Hero(name){
   const hero = Object.create(heroMethods); 
   hero.name = name;

   return hero; 
}
const zelda = Hero("Zelda");
zelda.saludar();  */


/* 
     PROTOTYPE:  */
//Herencia prototipal. 
//Constructor.

//1)
/* function Hero(name){
    const hero = Object.create(Hero.prototype);
    hero.name = name;

    return hero;
}

Hero.prototype.saludar = function(){
    console.log(`Yo soy ${this.name}`);
}

const zelda = Hero("Zelda");
zelda.saludar();  */

//2)