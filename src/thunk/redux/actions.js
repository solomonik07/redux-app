import {createPost, getPosts, removePost} from "../api/api";

export const PUT_DATA = "PUT_DATA"
export const ADD_DATA = "ADD_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const REQUEST_FAILED = "REQUEST_FAILED"

export const putData = (dataFromServer) => {
  return {
    type: PUT_DATA,
    payload: dataFromServer,
  }
}
export const createData = (newPost) => {
  return {
    type: ADD_DATA,
    payload: newPost,
  }
}
export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  }
}
export const catchError = (error) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}

export const loadData = () => async (dispatch, getState) => {
  try {
    const data = await getPosts()
    dispatch(putData(data))
  }
  catch(error) {
    dispatch(catchError(error))
  }
}
export const addData = (post) => async (dispatch) => {
  try {
    const data = await createPost(post)
    dispatch(createData(data))
  }
  catch(error) {
    dispatch(catchError(error))
  }
}
export const removeData = (item) => async (dispatch) => {
  try {
    await removePost(item.id)
    dispatch(deleteData(item))
  }
  catch(error) {
    dispatch(catchError(error))
  }
}


