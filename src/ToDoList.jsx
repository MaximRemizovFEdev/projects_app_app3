import { Card } from "./Card";
import { useCreateTask } from "./useCreateTask";
import { AddTaskModal } from "./AddTaskModal";


const wrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "30px",
  marginBottom: "30px",
};

const ToDoList = () => {
  const { cards, toAddCard, toRemoveCard, toChangeStatus } = useCreateTask();

  return (
    <>
      <AddTaskModal toAddCard={toAddCard} />

      <div style={wrapper}>
        {cards.map((card) => (
          <Card
            key={card.id}
            titleText={card.titleText}
            descriptionText={card.descriptionText}
            statusValue={card.statusValue}
            toRemoveCard={toRemoveCard}
            toChangeStatus={toChangeStatus}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;