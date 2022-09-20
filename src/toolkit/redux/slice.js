import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function(_, { rejectWithValue}) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

      if (!response.ok) {
        throw new Error("Server Error")
      }

      const data = await response.json()

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async function(post, { rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post)
      })

      if (!response.ok) {
        throw new Error('Can\'t add post. Server Error')
      }

      const data = await response.json()
      dispatch(addPost(data))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async function(id, { rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error('Can\'t delete post. Server Error')
      }

      dispatch(removePost(id))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const slice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload)
    },
    removePost(state, action) {
      state.posts = state.posts.filter((item) => item.id !== action.payload.id)
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [createPost.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const { addPost, removePost } = slice.actions;

export default slice.reducer