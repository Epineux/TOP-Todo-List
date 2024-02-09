import { tasks, addNewTask, displayTasks } from "../components/tasksModule";
import { extractFormInformation, resetTaskForm } from "../components/formHandler";

function newTaskSubmit() {
  const overlay = document.querySelector(".overlay-new-task");

  const taskInfos = extractFormInformation();
  const newTask = addNewTask(taskInfos);
  tasks.push(newTask);
  displayTasks();
  overlay.classList.remove("active");
  resetTaskForm();
}

export { newTaskSubmit };
