import express from "express"; // 1. importing express
const router = express.Router(); // 2. creating router

import * as blogController from "../app/controllers/blogController.js"; // importing everything from the blogController.js file

// Create Route

router.post("/create-blog", blogController.createBlog);

// Read Route

router.get("/read-blog", blogController.readBlog);

// Update Route

router.put("/update-blog", blogController.updateBlog);

// Delete Route

router.delete("/delete-blog", blogController.deleteBlog);

export default router;
