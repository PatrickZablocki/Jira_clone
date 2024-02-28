import { useDraggable } from "@dnd-kit/core";

export function Task({ task, onDelete }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;

  return (
    <div className="task" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <h3>{task.summary}</h3>
      <p>Description: {task.description}</p>
      <p>Project: {task.project}</p>
      <p>Issue Type: {task.issueType}</p>
      <p>Owner: {task.owner}</p>
      <button className="btn btn-danger" onMouseDown={(event) => {
        event.stopPropagation();
        onDelete(task.id);
      }}>
        Delete
      </button>
    </div>
  );
}