export const login = async ({ email, password }) => {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const data = await response.json()
    return data.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const signup = async ({ email, password, username, displayname }) => {
  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, username, displayname }),
    })
    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const data = await response.json()
    return data.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getUserInfo = async ({ userId, token }) => {
  const url = `/api/users/profiles/${userId}`
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  })
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
    return data.users[0]
  } catch (error) {
    throw new Error(error.message)
  }
}
