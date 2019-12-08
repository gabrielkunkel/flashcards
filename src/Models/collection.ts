import Card from "./card";


export default interface Collection {
    id: Number,
    title: String,
    cards: Card[]
}