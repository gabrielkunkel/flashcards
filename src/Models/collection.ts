import Card from "./card";


export default interface Collection {
    id: number,
    title: string,
    image: string,
    cards: Card[]
}