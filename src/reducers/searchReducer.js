import { SEARCH_KEYWORD,SEARCH_DONE,SEARCH_UNDONE } from '../actions/action-types';

const searchReducer = (state = '', action) => {
  switch(action.type) {
    case SEARCH_KEYWORD: return action.payload
    case SEARCH_DONE: return action.payload
    case SEARCH_UNDONE: return action.payload
    default: return state;
  }
};

export default searchReducer;
