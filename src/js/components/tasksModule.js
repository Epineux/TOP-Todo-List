const tasks = [];

function addNewTask(taskInfos) {
  function editTask() {}

  function markComplete() {}

  return { taskInfos, editTask, markComplete };
}

export default addNewTask;
function displayTasks() {
  const tasksContainer = document.querySelector(".tasks-container");

  function createTaskCard(task) {
    // Create elements
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskInfos = document.createElement("div");
    taskInfos.classList.add("task-infos");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTitle = document.createElement("h2");
    taskTitle.textContent = task.taskInfos.title;

    const taskDate = document.createElement("p");
    taskDate.textContent = task.taskInfos.dueDate;

    const taskSettings = document.createElement("div");
    taskSettings.classList.add("task-settings");

    const moreInfosIcon = createIcon("images/information-outline.svg", "more-infos");
    const importantIcon = createIcon("images/star-outline.svg", "important");
    const editIcon = createIcon("images/dots-vertical.svg", "edit");

    // Append elements
    taskInfos.appendChild(checkbox);
    taskInfos.appendChild(taskTitle);
    taskSettings.appendChild(moreInfosIcon);
    taskSettings.appendChild(importantIcon);
    taskSettings.appendChild(editIcon);
    taskCard.appendChild(taskInfos);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskSettings);

    // Append the task card to the container
    tasksContainer.appendChild(taskCard);
  }

  // Function to create an icon element
  function createIcon(src, alt) {
    const icon = document.createElement("img");
    icon.src = src;
    icon.alt = alt;
    return icon;
  }

  tasksContainer.innerHTML = "";
  tasks.forEach((task) => createTaskCard(task));
}

export { tasks, addNewTask, displayTasks };
