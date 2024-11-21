const Item = ({ value, stageName }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "taskData",  // Ensure we are using the correct key to store data
      JSON.stringify({ 
        task: value, 
        sourceStage: stageName
       })  // Passing both task and its source stage
    );
  };

  return (
    <div
      className="item border shadow-sm bg-white h-20 flex p-1"
      draggable
      onDragStart={handleDragStart}  // Enable dragging
    >
      {value}
    </div>
  );
};

export default Item;
