import Post from '../models/post';

export const updatePost = async (req, res) => {
  const { _id } = req.params;
  const { title, description } = req.body;
  try {
    const savedPost = await Post.findOneAndUpdate(
      { _id },
      { title, description },
      { new: true }
    ).exec();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res) => {
  const { _id } = req.params;
  try {
    const posts = _id
      ? await Post.findById(_id).exec()
      : await Post.find().exec();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const savedPost = await new Post(post).save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deletePost = (req, res) => {
  const { _id } = req.params;
  Post.deleteOne({ _id }, (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
};
