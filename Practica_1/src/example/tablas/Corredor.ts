//interfaz de los corredores
interface Icorredor{
    id:number,
    name:string,
    peso:number,
    altura:number,
    edad:number,
}

const corredores: Icorredor[]=[
    { id: 1, name: "Leanne Graham", peso: 70, altura: 175, edad: 30 },
    { id: 2, name: "Leanne Graham", peso: 65, altura: 170, edad: 28 },
    { id: 3, name: "Patricia Lebsack", peso: 75, altura: 180, edad: 35 },
    { id: 4, name: "Ronny", peso: 68, altura: 172, edad: 29 },
    { id: 5, name: "Nicholas Runolfsdottir V", peso: 72, altura: 178, edad: 32 }
]
export {Icorredor,corredores};