/* eslint-disable react/prop-types */
import Item from "./Item";

const Stage = ({ tasks, setTasks, stageName, setstage1, setstage2, setstage3 }) => {
  const handleDragOver = (e) => {
    e.preventDefault();  // This allows dropping
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const taskData = JSON.parse(e.dataTransfer.getData("taskData"));
    const task = taskData.task;
    const sourceStage = taskData.sourceStage;

    // Remove the task from the source stage
    if (sourceStage === "stage1") {
      setstage1((prev) => prev.filter((item) => item !== task));
    } else if (sourceStage === "stage2") {
      setstage2((prev) => prev.filter((item) => item !== task));
    } else if (sourceStage === "stage3") {
      setstage3((prev) => prev.filter((item) => item !== task));
    }

    // Add task to the target stage
    if (stageName === "stage1") {
      setstage1((prev) => [...prev, task]);
    } else if (stageName === "stage2") {
      setstage2((prev) => [...prev, task]);
    } else if (stageName === "stage3") {
      setstage3((prev) => [...prev, task]);
    }
  };

  return (
    <div
      className="stage h-full p-3 w-80 gap-4 flex flex-col bg-gray-100"
      onDragOver={handleDragOver}
      onDrop={handleDrop}  // Attach the onDrop handler
    >
      {tasks.map((task, index) => (
        <Item key={index} value={task} stageName={stageName} />
      ))}
    </div>
  );
};

export default Stage;
