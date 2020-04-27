const { createStore } = require("redux");
const initialState = { projects: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      console.log("POST", state);
      return { ...state, projects: state.projects.push({ id: 1 }) };
    case "PATCH":
      return state;
    case "PUT":
      return state;
    case "DELETE":
      return state;
    default:
      console.log("state", state);
      return state;
  }
};

const store = createStore(reducer);
module.exports = store;
