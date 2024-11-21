# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Functional Overview
# Form Setup and Handling Task Input
Initial Setup:
We create a state variable input using useState() to store the input value from the user.
The input is initially set as an empty string (setinput("")).
Form onSubmit:
When the user submits the form, we prevent the default behavior using e.preventDefault().
If the input is empty, nothing happens (input.trim() === "").
If the input is not empty, we pass the input to the parent component (Board) via handleSubmit(input).
After submission, the input is cleared (setinput("")).

# Parent (Board) Setup
The parent component (Board.jsx) receives the task input from the form through a function called handleSubmit.
Inside handleSubmit, we update the respective state for each stage (stage1, stage2, stage3) using the setstage1, setstage2, setstage3 functions.
We store tasks for each stage and render them in their respective components.
# Stage Component Setup

Each stage component displays tasks for a particular stage. Tasks are rendered from the tasks array passed via props.
The tasks are listed using .map() method to iterate over the task list and display each task.

# Drag and Drop Setup
Making Tasks Draggable:

To make a task draggable, we add the draggable="true" attribute to the task's HTML element.
In the Item.jsx component, this allows each task to be dragged.
Handling the Drag Start:

On the dragStart event, we trigger the handleDragStart function.
Inside handleDragStart, we use e.dataTransfer.setData() to store the task and its source stage.
We store the data as taskData, which contains:
task: The task that is being dragged.
sourceStage: The stage from where the task is being dragged (e.g., "stage1", "stage2", or "stage3").
Handling the Drag Over:

The onDragOver event allows the target (drop zone) to be valid for dropping.
We call e.preventDefault() to allow the drag-and-drop operation, as it’s required to prevent the default behavior.
Handling the Drop:

When a task is dropped, we handle the onDrop event.
We retrieve the stored data using e.dataTransfer.getData("taskData"), which returns a string. We then use JSON.parse() to convert it into an object.
We remove the task from the source stage (using filter()) and add it to the target stage (using setstageX()).