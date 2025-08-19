import { useState, useEffect } from "react";

export const useCreateTask = () => {
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem('taskCards');
        return savedCards ? JSON.parse(savedCards) : [];
    });

    useEffect(() => {
        localStorage.setItem('taskCards', JSON.stringify(cards));
    }, [cards]);

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
        setCards(prevCards => prevCards.filter(el => el.id !== id));
    }

    const toChangeStatus = ({id, status}) => {
        setCards(prevCards => 
            prevCards.map(card => 
                card.id === id ? { ...card, statusValue: status } : card
            )
        );
    }

    return {
        cards,
        toAddCard,
        toRemoveCard,
        toChangeStatus
    }
}