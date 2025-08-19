import { useState } from "react";

export const useCreateTask = () => {
    const [cards, setCards] = useState([]);

    const toAddCard = ({
        title,
        description,
    }) => {
        const newCard = {
            id: crypto.randomUUID(), // генерирует UUID v4,
            titleText: title,
            descriptionText: description,
            statusValue: "to do"
        }

        setCards([...cards, newCard]);
    }

    const toRemoveCard = (id) => {
        setCards(cards.filter(el => (el.id === id)));
    }

    const toChangeStatus = ({id, status}) => {

    }

    return {
        cards,
        toAddCard,
        toRemoveCard,
        toChangeStatus
    }
}