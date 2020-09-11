class A {
    public getNome(){
        console.log("Meu nome é A");
    }
}

class B extends A{
    public getNome(){
        console.log("Meu nome é B");
    }
}

const obj1 = new A();
const obj2 = new B();

const imprimeNome = (obj: A) => obj.getNome();

console.log(imprimeNome(obj1));
console.log(imprimeNome(obj2));