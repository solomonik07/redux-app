export const PUT_DATA = "PUT_DATA"
export const LOAD_DATA = "LOAD_DATA"
export const ADD_DATA = "ADD_DATA"
export const CREATE_DATA = "CREATE_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const REMOVE_DATA = "REMOVE_DATA"
export const REQUEST_FAILED = "REQUEST_FAILED"

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  }
}
export const loadData = () => {
  return {
    type: LOAD_DATA,
  }
}

export const addData = (newPost) => {
  return {
    type: ADD_DATA,
    payload: newPost,
  }
}
export const createData = (newPost) => {
  return {
    type: CREATE_DATA,
    payload: newPost,
  }
}

export const deleteData = (item) => {
  return {
    type: DELETE_DATA,
    payload: item,
  }
}
export const removeData = (item) => {
  return {
    type: REMOVE_DATA,
    payload: item,
  }
}

export const catchError = (error) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}

