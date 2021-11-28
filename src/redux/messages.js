import { messagesDownScroll } from "../utils/MessagesScrool";

const initialState = {
  message: [],
  loading: false,
  messageText: "",
  filter: "",
};

// отправка сообщения в чате

export const handleAddMessage = (myId, messageText, contactId) => {
  return (dispatch) => {
    dispatch({
      type: "message/send/start",
    });
    fetch("https://api.intocode.ru:8001/api/messages", {
      method: "POST",
      body: JSON.stringify({
        myId: `${myId}`,
        type: "text",
        contactId: `${contactId}`,
        content: messageText,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/send/success",
          payload: json,
        });
      });
    messagesDownScroll();
  };
};

// получаем список сообщение для чата

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
        messagesDownScroll();
      });
  };
};

// фильтруем сообщения

export const filterMessage = (message) => {
  return {
    type: "message/filter",
    payload: message,
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
    case "message/send/start":
      return {
        ...state,
      };
    case "message/send/success":
      return {
        ...state,
        loading: false,
        message: [...state.message, action.payload],
      };
    case "message/filter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default message;
