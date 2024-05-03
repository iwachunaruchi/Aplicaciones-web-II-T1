interface Ientity{
    Entidad:String
}
interface Icorredor{
    id:number,
    name:string,
    peso:number,
    altura:number,
    edad:number,
}
interface Icarrer{
    id:number,
    name: string,
    C_kilomters: number,
    adiccional_details: string,
    fecha:string,
    hora: string,   
}
interface Ifollow{
    id:number,
    id_corridor:Icorredor[],
    id_carrer:Icarrer[],
    tiempo_llegada: number,
    orden_de_llegada:number,
    pulso_inicial: number,
    pulso_final: number,
}
export { Ientity, Icorredor, Icarrer, Ifollow };