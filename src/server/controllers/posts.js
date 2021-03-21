import Post from '../models/post';

export const updatePost = async (req, res) => {
  const { _id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json('Title and/or description can not be empty value');
    return;
  }
  try {
    const post = await Post.findById(_id).exec();
    if (post.title !== title) post.title = title;
    if (post.description !== description) post.description = description;
    const savedPost = await post.save();
    res.json({ post: savedPost });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getPosts = async (req, res) => {
  const { _id } = req.params;
  try {
    const docs = _id
      ? await Post.findById(_id).exec()
      : await Post.find().exec();
    res.json({ posts: _id ? [docs] : docs });
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const savedPost = await new Post(post).save();
    res.status(201).json({ post: savedPost });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deletePost = (req, res) => {
  const { _id } = req.params;
  Post.deleteOne({ _id }, (error, message) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      res.status(200).json({ message });
    }
  });
};
