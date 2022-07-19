import { initialState } from "./intial-state"; 
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "./actions";
import shortid from "shortid";

function saveStatetoLocalStorage(state) {
    window.localStorage.setItem("imran-todos", JSON.stringify(state));
}

function reducer(state =initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { title } = action.payload;
            const newState = {
                ...state,
                todos: [...state.todos, 
                    {
                    id: shortid(),
                    title,
                    completed: false,
                    important: false
                    }
                ]
            };
            saveStatetoLocalStorage(newState);
            return newState;
        }

        case TOGGLE_COMPLETED: {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            const newState = {
                ...state,
                todos: newTodos
            }
            saveStatetoLocalStorage(newState);
            return newState;
        }

        case DELETE_TODO: {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)

            const newState = {
                ...state,
                todos: newTodos
            }
            
            saveStatetoLocalStorage(newState);
            return newState;
        }

        case TOGGLE_IMPORTANT: {
            
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.important = !todo.important;
                }
                return todo;
            })

            const newState = {
                ...state,
                todos: newTodos
            }
            
            saveStatetoLocalStorage(newState);
            return newState;
        }

        default:
            return state;
    }
}

export default reducer;