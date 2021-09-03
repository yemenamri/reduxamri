import { ADD_TODO, COMPLETE_TODO, UNCOMPLETE_TODO, DELETE_TODO, EDIT_TODO,SEARCH_UNDONE } from '../actions/action-types';

const initialState = [
  { id: 1, title: 'Faire de la Prière', completed: true },
  { id: 3, title: 'Aller Au Boulot', completed: false },
  { id: 2, title: 'Réviser Cours React', completed: false },
];

const addTodo = (state, newTodo) => {
  const { title, completed } = newTodo;
  const ids = state.map(todo => todo.id);
  const newId = Math.max(...ids) + 1;
  const todo = {
    id: newId,
    title,
    completed,
  };
  const newState = [...state, todo]
  return newState
};

const completeTodo = (state, todoId) => {
 
  const newState = state.map(todo => {

    if (todo.id === Number(todoId)) {
      return {
        id: todo.id,
        title: todo.title,
        completed: false,
      };
    }
    return todo;
  });
  return newState
}

const deleteTodo = (state, todoId) => {
  const newState = state.filter(todo => {
    
    return todo.id !== todoId
  });
  return newState
}

const uncompleteTodo = (state, todoId) => {
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        completed: true,
      };
    }
    return todo;
  });
  return newState
}
const undoneTodo = (state, todoId) => {
  const newState = state.filtre(todo => {
    if (todo.completed === 'true') {
      return {
        id: todo.id,
        title: todo.title,
        completed: true,
      };
    }
    return todo;
  });
  return newState
}

const editTodo = (state, updateTodo) => {
 
  const newState = state.map(todo => {
    if (todo.id === updateTodo.id) {
      return {
        id: todo.id,
        title: updateTodo.title,
        completed: todo.completed
      };
    }
    return todo;
  });
  return newState;
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case COMPLETE_TODO: return completeTodo(state, action.payload)
    case UNCOMPLETE_TODO: return uncompleteTodo(state, action.payload)
    case DELETE_TODO: return deleteTodo(state, action.payload)
    case EDIT_TODO: return editTodo(state, action.payload)
    case SEARCH_UNDONE: return undoneTodo(state, action.payload)
    case SEARCH_UNDONE:return{
      ...state,
      todos: state.todos.filter(el=> el.completed === false )
  }
    default: return state;
  }
};


export default todoReducer;
