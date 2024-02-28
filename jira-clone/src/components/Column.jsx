import { Task } from './Task';
import { useDroppable } from "@dnd-kit/core";


export function Column({ tasks, onDelete, name }) {
  const {isOver, setNodeRef} = useDroppable({
    id: `${name}-droppable`,
  });
  const style = {
    color: isOver ? '' : undefined,
  };

  return (
    <div ref={setNodeRef} className="card" style={style}>
      <h2 className="card-header">{name}</h2>
      <div className="card-body">
        {tasks.map((task) => (
          <Task task={task} onDelete={onDelete} key={task.id}/>
        ))}
      </div>
    </div>
  );
};