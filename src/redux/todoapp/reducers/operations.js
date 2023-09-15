import { ADD_TODO, DELETE_ALL, REMOVE_TODO } from "../actions";

const initialState = [
  {
    id: 1,
    todo: "install NodeJS",
    completed: false,
  },
  {
    id: 2,
    todo: "install Angular CLI",
    completed: false,
  },
  {
    id: 3,
    todo: "create new app",
    completed: false,
  },
  {
    id: 4,
    todo: "serve app",
    completed: false,
  },
  {
    id: 5,
    todo: "develop app",
    completed: false,
  },
  {
    id: 6,
    todo: "deploy app",
    completed: true,
  },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    default:
      return state;
  }
};
