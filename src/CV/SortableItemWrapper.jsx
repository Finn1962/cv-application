import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import dragHandle from "../assets/drag-icon.svg";

export default function SortableItemWrapper({ children, id }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    position: "relative",
  };

  return (
    <div ref={setNodeRef} style={style} className="sortable-item-wrapper">
      <div className="drag-handle" {...attributes} {...listeners}>
        <img src={dragHandle} />
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
}
