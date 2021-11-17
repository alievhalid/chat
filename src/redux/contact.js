const initialState = {
    contact: [],
    loading: false,
}

export const loadContact = () => {
    return (dispatch) => {
        dispatch({
            type: 'contact/load/start'
        })
        fetch('https://api.intocode.ru:8001/api/contacts')
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: 'contact/load/success',
                payload: json
            })
        })
    }
}

const contact = (state = initialState, action) => {
    switch (action.type) {
        case 'contact/load/start':
            return {
                ...state,
                loading: true
            }
            case 'contact/load/success':
                return {
                    ...state,
                    contact: action.payload,
                    loading: false
                }

            default: 
            return state
    }
}

export default contact