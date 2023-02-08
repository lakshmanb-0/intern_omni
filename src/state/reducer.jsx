export const initialState = {
  tasks: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Task": {
      return {
        tasks: [
          ...state.tasks,
          { category: "Incomplete", task: action.payload },
        ],
      };
    }

    case "Completed_Task": {
      return {
        tasks: state.tasks.map((item) => {
          if (item.task === action.payload) {
            return {
              ...item,
              category: "Completed",
            };
          }
          return item;
        }),
      };
    }

    case "Incomplete_Task": {
      return {
        tasks: state.tasks.map((item) => {
          if (item.task === action.payload) {
            return {
              ...item,
              category: "Incomplete",
            };
          }
          return item;
        }),
      };
    }

    case "Delete_Task": {
      return {
        tasks: state.tasks.filter((item) => item.task !== action.payload),
      };
    }

    default:
      return state;
  }
};
