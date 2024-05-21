import Post from "../models/post.js";

export const getPost = async (req, res) => {
	const posts = await Post.find({});

	res.status(200).json({
		posts,
	});
};

export const createPost = async (req, res) => {
	res.json({
		message: "Post created",
	});
};

export const updatePost = async (req, res) => {
	const { id } = req.params;

	const post = await Post.findByIdAndUpdate(id, { ...req.body, isRead: true }, { new: true });

	res.status(200).json({
		post,
	});
};
