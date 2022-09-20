export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
}

export const removePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  }).then(response => response.json())
}

export const createPost = (post) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post)
  }).then(response => response.json())
}