const initialState = {
  containers: [],
};

export default function createreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CONTAINER":
      return {
        ...state,
        containers: [...state.containers, action.payload],
      };
      case "DELETE_CONTAINER":
        const newContainers = state.containers.filter((container) => container.number !== action.payload)
        return { ...state, containers: newContainers };
        case "SET_CONTAINERS":
          return {
            ...state,
            containers: action.payload,
          };  
    default:
      return state;
  }
}