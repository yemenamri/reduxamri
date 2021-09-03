import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  searchKeyword: searchReducer,
  //searchDone: searchReducer,
  //searchUndone: searchReducer,
});


export default rootReducer;
