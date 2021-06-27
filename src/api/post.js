export const publish = async ({ title, description, image, token }) => {
  const body = new FormData()
  body.append('title', title)
  body.append('description', description)
  body.append('image', image[0])

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers,
      body,
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const data = await response.json()
    return data.post
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getPosts = async ({ _id, token }) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)

  const url = _id ? `/api/posts/${_id}` : '/api/posts'
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      if (response.status === 403) {
        // refresh token
      }
      const { error } = await response.json()
      throw new Error(error)
    }
    const data = await response.json()
    return data.posts
  } catch (error) {
    throw new Error(error.message)
  }
}

export const likePost = async ({ _id, token }) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)

  const url = `/api/posts/like/${_id}`
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers,
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    return response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}
