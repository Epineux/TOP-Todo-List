import "../css/reset.css";
import "../css/style.css";
import { newTaskSubmit } from "./utils/domUtils";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".new-task-form");
  const overlay = document.querySelector(".overlay-new-task");

  // Add a new task after submitting the form for it
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    newTaskSubmit();
  });

  // Show the overlay when the User want to create a task
  const openForm = document.querySelector(".add-task");
  openForm.addEventListener("click", () => overlay.classList.add("active"));
});
// const icon = document.querySelector(".theme-icon");

// icon.addEventListener('click', ()=> {
//   icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
// });
