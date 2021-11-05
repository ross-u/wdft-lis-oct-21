/* 

- What is DOM
  - document object model
  - document object

- Selecting DOM elements:
  - getElementById
  - getElementsByClassName
  - getElementsByTagName

  - querySelector
  - querySelectorAll

- Manipulating DOM elements:
  - textContent and innerText
  - innerHTML - returns every element in the node

  - className
  - classList.add("name")   or className + ""
  - classList.remove("name")
  - classList.toggle("name")

  - getAttribute
  - setAttribute
*/

const toDoList = document.querySelector("#to-do-list");
const toDoInput = document.querySelector("#to-do-input");

const addButton = document.querySelector("#add-item");



addButton.addEventListener('click', function () {
  // Get text from the input element
  const text = toDoInput.value;
  console.log(`text`, text)

  // Create a new li element
  const newLi = document.createElement('li');

  // Add the text to the li element
  newLi.textContent = text;

  // Append the li element to the to do classList
  toDoList.appendChild(newLi);

  // Clear the text from the input
  toDoInput.value = "";
})



