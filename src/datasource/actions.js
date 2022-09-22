/* * action 类型 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';

/* * 其它的常量 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/* * action 创建函数 */

export function addTodo(text) {
  return {type: ADD_TODO, text};
}

export function completeTodo(index) {
  return {type: COMPLETE_TODO, index};
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter};
}

export function fetchData(payload) {
  return {type: USER_FETCH_REQUESTED, payload};
}
