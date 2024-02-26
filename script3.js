let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#button");
let tasksList = document.querySelector(".task-list");

let tasks = JSON.parse(localStorage.getItem("task")) || [];

let addTask = (taskName) => {
  if (!taskName) {
    alert(`Write some task in To-Do list app`);
  } else {
    tasks.push({ taskName });

    localStorage.setItem("task", JSON.stringify(tasks));

    return { taskName };
  }
};
// addTask(`Task123`); // DUMMY DATA

let createLiElement = ({ taskName }) => {
  let li = document.createElement("li");

  li.innerHTML = `${taskName} <span>
  <i id="Delete" class="fa-solid fa-trash-can"></i>
  </span>`;

  li.querySelector("#Delete").addEventListener("click", () => {
    li.remove();
    let removeElement = (i) => {
      tasks.splice(i, 1);
      localStorage.setItem("task", JSON.stringify(tasks));
    };
    removeElement();
  });

  tasksList.appendChild(li);
};

// for each loop in task array
tasks.forEach(createLiElement);

// submit
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newTask = addTask(inputBox.value);

  createLiElement(newTask);

  inputBox.value = "";
});
