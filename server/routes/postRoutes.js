const express=require("express");
const { verifyToken } =require("../middlewares/verifyToken");
const { createPost, getAllPosts, getmyPosts } = require("../controllers/postController");
const router=express.Router();


router.post("/post/create", verifyToken, createPost );
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getmyPosts);

module.exports = router;