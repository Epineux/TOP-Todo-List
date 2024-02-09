function extractFormInformation() {
  let title = document.querySelector("#title").value;
  let details = document.querySelector("#details").value;
  let dueDate = document.querySelector("#date").value;
  let isImportant = document.querySelector("#priority").checked;
  const date = new Date();
  const creationDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return { title, details, dueDate, isImportant, creationDate };
}

function resetTaskForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#details").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#priority").checked = false;
}

export { extractFormInformation, resetTaskForm };
