const initialState = {
  contact: [],
  loading: false,
  filter: "",
  profile_id: "5f2ea3801f986a01cefc8bcd",
  contactId: '',
};

export const setContactId = (contactId) => {
  return {
    type: 'select/contact/id',
    payload: contactId
  }
}

export const loadContact = () => {
  return (dispatch) => {
    dispatch({
      type: "contact/load/start",
    });
    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "contact/load/success",
          payload: json,
        });
      });
  };
};

export const setFilterText = (text) => {
  return {
    type: "filter/set",
    payload: text,
  };
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "contact/load/start":
      return {
        ...state,
        loading: true,
      };
    case "contact/load/success":
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    case "filter/set":
      return {
        ...state,
        filter: action.payload,
      };
    case "select/contact/id":
      return {
        ...state,
         contactId: action.payload
      }

    default:
      return state;
  }
};

export default contact;
