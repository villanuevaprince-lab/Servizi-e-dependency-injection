export interface Piatto { id:number; nome:string; prezzo:number; }
export interface RigaOrdine { piatto:Piatto; quantita:number; }
export const MENU:Piatto[]=[{id:1,nome:'Hamburger classico',prezzo:8.5},{id:2,nome:'Cheeseburger',prezzo:9},{id:3,nome:'Burger vegetariano',prezzo:9.5},{id:4,nome:'Patatine',prezzo:3.5},{id:5,nome:'Bibita',prezzo:2.5}];