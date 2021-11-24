const initialState = {
  contact: [],
  loading: false,
  filter: "",
  profile_id: "5f2ea3801f986a01cefc8bcd",
  contactId: "",
  profileOpen: false
};

// получаем id контакта на которого кликнули
export const setContactId = (contactId) => {
  return {
    type: "select/contact/id",
    payload: contactId,
  };
};

// информация о открытие/закрытие профиля

export const openProfile = (profile) => {
  return {
    type: 'profile/open',
    payload: !profile
  }
}

// получаем список контактов

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

// фильтруем контакты

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
        contactId: action.payload,
      };
    case "profile/open":
      return {
        ...state,
        profileOpen: action.payload,
      }

    default:
      return state;
  }
};

export default contact;
