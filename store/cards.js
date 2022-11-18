import { types, numbers } from '../helpers/cards.js'

export const cardDeck = () => ({
    cards: []
})

export const addCard = (state, card) => {
    state.cards.push(card)
}

export const removeCard = (state, card) => {
    state.cards.splice(state.cards.indexOf(card), 1)
}

export const shuffleCards = (state) => {
    state.cards = shuffle(state.cards)
}

export const createDeck = (state) => {
    for (const type of types) {
        for (const number of numbers) {
            state.cards.push({
                type,
                number
            })
        }
    } 
}