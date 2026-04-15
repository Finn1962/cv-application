import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function ContentContainer({
  children,
  cvStructure,
  setCvStructure,
}) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cvStructure.findIndex(
        (section) => section.key === active.id,
      );
      const newIndex = cvStructure.findIndex(
        (section) => section.key === over.id,
      );

      const newOrder = arrayMove(cvStructure, oldIndex, newIndex);
      setCvStructure(newOrder);
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={cvStructure.map((section) => section.key)}
        strategy={verticalListSortingStrategy}
      >
        <div className="cv-content-container">{children}</div>
      </SortableContext>
    </DndContext>
  );
}
