import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { connectDB } from "./connect.js";
import todoRouter from "./routes/todo.js";
import postRouter from "./routes/post.js";

const posts = [
	{
		title: "Post 1",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc euismod, ultrices nunc id, aliquam mauris. Sed euismod, nunc id aliquam mauris.",
	},
	{
		title: "Post 2",
		content:
			"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam euismod, nunc id aliquam mauris.",
	},
	{
		title: "Post 3",
		content:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nunc id aliquam mauris.",
	},
];

const app = express();
app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);
app.use("/posts", postRouter);

app.listen(3000, async () => {
	try {
		await connectDB(process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD));
	} catch (error) {
		console.log("Error connecting to MongoDB", error);
	}
});
