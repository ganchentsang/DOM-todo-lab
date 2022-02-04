// initliazed cached element references for each html id
const userInput = document.getElementById('userInput')
const submitButton = document.getElementById('submitButton')
const taskList = document.getElementById('taskList')
const resetButton = document.getElementById('resetButton')

// created an event listener to add the user input to list
submitButton.addEventListener('click', function(event) {
  if(userInput.value === "") return
  const newTodo = document.createElement('li')
  newTodo.textContent = userInput.value
  taskList.appendChild(newTodo)
  userInput.value = ''
})

// created an event listener to reset the list when pressed
resetButton.addEventListener('click', function(event) {
  taskList.innerHTML = ''
  userInput.value = ''
})

// created an event listener to erase a list element when clicked
taskList.addEventListener('click', function(event) {
  const parentNode = event.target.parentNode
  parentNode.removeChild(event.target)
})