import {combineReducers} from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  USER_FETCH_SUCCEEDED,
} from './actions';
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true,
        }),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}
function list(state = [], action) {
  switch (action.type) {
    case USER_FETCH_SUCCEEDED:
      return [...state, ...action.user];
    default:
      return state;
  }
}
//通过combineReducers将多个reducer合并成一个rootReducer
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  list,
});

export default todoApp;
