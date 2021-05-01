export const publish = async ({ title, description, image }, { token }) => {
  const body = new FormData();
  body.append('title', title);
  body.append('description', description);
  body.append('image', image[0]);

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error);
    }
    const data = await response.json();
    return data.post;
  } catch (error) {
    throw new Error(error);
  }
};
