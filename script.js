const inputBox = document.querySelector("#input-box");

const taskList = document.querySelector(".task-list");

const tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

function Addtasks() {
  if (inputBox.value === "") {
    alert(`Write Your Daily Tasks`);
  } else {
    addThisTask(inputBox.value);

    tasks.push = (e) => {
      e.inputBox.value;
    };
  }
  inputBox.value = "";
}

let addThisTask = function (taskName) {
  const li = document.createElement("li");
  li.innerHTML = `${taskName}
  <i id="Delete" class="fa-solid fa-trash-can"></i>`;

  li.querySelector("#Delete").addEventListener("click", function () {
    li.remove();
  });

  taskList.appendChild(li);
};

// const obj = {
//   name: `JOHN`,
//   place: `New york city`,
// };
// localStorage.setItem("Person", JSON.stringify(obj));

// let local = JSON.parse(localStorage.getItem("Person"));
// console.log(local);

let arr = [1, 2, 3, 4, 5];
