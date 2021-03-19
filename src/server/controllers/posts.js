import Post from '../models/post';

export const getOnePost = (req, res) => {
  const {
    params: { _id },
  } = req;
  if (!_id) {
    res.status(400).json({
      data: [],
      error: { name: 'InvalidSyntax', message: 'Id is invalid' },
    });
    return;
  }
  Post.findById(_id).then(
    post => {
      res.status(200).json({ data: [post], error: null });
    },
    error => {
      const {
        reason: { name, message },
      } = error;
      res.status(404).json({
        data: [],
        error: { name, message },
      });
    }
  );
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ data: posts, error: null });
  } catch (error) {
    const {
      reason: { name, message },
    } = error;
    res.status(500).json({
      data: [],
      error: {
        name,
        message,
      },
    });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const savedPost = await new Post(post).save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error });
  }
};
