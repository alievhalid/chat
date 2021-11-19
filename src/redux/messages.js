const initialState = {
  message: [],
  loading: false,
};

export const loadMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: "message/load/start",
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/load/success",
          payload: json,
        });
      });
  };
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case "message/load/start":
      return {
        ...state,
        loading: true,
      };
    case "message/load/success":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default message;
