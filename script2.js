// const inputBox = document.querySelector("#input-box");

// const addBtn = document.querySelector("#button");

// const taskList = document.querySelector(".task-list");

// addBtn.addEventListener("click", function () {
//   if (inputBox.value === "") {
//     alert(`Write some tasks`);
//   } else {
//     addTask(inputBox.value);
//     inputBox.value = "";
//   }
// });

// let addTask = (item) => {
//   let li = document.createElement("li");
//   li.innerHTML = `${item} <span>
//     <i class="fa-solid fa-trash-can"></i>
//   </span>`;

//   li.querySelector("i").addEventListener("click", () => {
//     li.remove();
//   });
//   taskList.appendChild(li);
// };

// Working -
let inputBox = document.querySelector("#input-box");

let addBtn = document.querySelector("#button");

let taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert(`Write some task in To-Do list`);
  } else {
    addTask(inputBox.value);
    inputBox.value = "";
  }
});

const addTask = function (task) {
  let li = document.createElement("li");
  li.innerHTML = `${task} <span>
      <i id="Delete" class="fa-solid fa-trash-can"></i>
      </span>`;

  taskList.appendChild(li);

  li.querySelector("#Delete").addEventListener("click", () => {
    li.remove();
    alert(`Task Deleted`);
  });
};
