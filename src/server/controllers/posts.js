import fs from 'fs';
import Post from '../models/post';

export const updatePost = async (req, res) => {
  const { _id } = req.params;
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json('Title and/or description can not be empty value(s)');
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
  console.log({ file: req.file, text: post });
  const { userId } = req.user;
  try {
    const savedPost = await new Post({
      ...post,
      userId,
      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    }).save();
    res.status(201).json({ post: savedPost });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deletePost = (req, res) => {
  const { _id } = req.params;
  Post.findById(_id, (findError, post) => {
    if (findError) {
      res.status(404).json({ error: findError });
      return;
    }

    const [, filename] = post.image.split('/images/');
    fs.unlink(`tmp/images/${filename}`, unlinkError => {
      if (unlinkError) {
        res.status(500).json({ error: unlinkError });
        return;
      }

      Post.deleteOne({ _id }, (deleteError, message) => {
        if (deleteError) {
          res.status(400).json({ error: deleteError });
          return;
        }

        res.status(200).json({ message });
      });
    });
  });
};
