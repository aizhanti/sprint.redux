const { createStore } = require("redux");
const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
  switch ((action.type, action.payload)) {
    case "POST":
      return { ...state, projects: [...state.projects, action.payload] };
    case "PATCH":
      return state;
    case "PUT":
      return state;
    case "DELETE":
      return state;
    case "GET":
      if (action.payload) {
        for (const project of state.projects) {
          console.log('project:', project)
          if (project.id === action.payload) {
            return project;
          }
        }
      }
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

// reducer();

module.exports = store;
