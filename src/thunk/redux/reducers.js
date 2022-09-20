import { PUT_DATA, ADD_DATA, DELETE_DATA, REQUEST_FAILED } from "./actions";

const initialState = {
  data: [],
  status: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case ADD_DATA: {
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    }
    case DELETE_DATA: {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        status: 'rejected',
      }
    }
  }

  return state
}