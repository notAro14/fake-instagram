export const createComment = async ({ postId, content, token }) => {
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ postId, content }),
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const { comment } = await response.json()
    return {
      hearts: comment.hearts.length,
      commentId: comment._id,
      content: comment.content,
      postId: comment.postId,
      userId: comment.userId,
      createdAt: comment.createdAt,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getAllCommentsForAPost = async ({ postId, token }) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)

  const url = `/api/comments/${postId}`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const { comments } = await response.json()
    return comments.map(
      ({ value: { content, createdAt, hearts, _id, user } }) => ({
        content,
        commentId: _id,
        createdAt,
        hearts: hearts.length,
        user: {
          userId: user._id,
          name: user.displayname,
        },
      })
    )
  } catch (error) {
    throw new Error(error.message)
  }
}

export const likeAComment = async ({ commentId, token }) => {
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${token}`)

  const url = `/api/comments/${commentId}`
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers,
    })

    if (!response.ok) {
      const { error } = await response.json()
      throw new Error(error)
    }
    const { comment, action } = await response.json()
    return {
      hearts: comment.hearts.length,
      commentId: comment._id,
      content: comment.content,
      postId: comment.postId,
      userId: comment.userId,
      createdAt: comment.createdAt,
      action,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}
