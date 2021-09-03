
export const filterTodo = (todos, searchKeyword) => (
  todos.filter(todo => todo.title.toLowerCase().includes(searchKeyword.toLowerCase()) ) 
)
export const filterTodoDone = (todos, searchDone) => (
  todos.filter(todo => todo.completed.toLowerCase().includes(searchDone.toLowerCase()))
)
export const filterTodoUndone = (todos, searchUndone) => (
  todos.filter(todo => todo.completed.toLowerCase().includes(searchUndone.toLowerCase()))
)

