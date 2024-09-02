const express=require("express");
const { verifyToken } =require("../middlewares/verifyToken");
const { createPost, getAllPosts, getmyPosts, deletePosts, searchPosts, addToFavourite, removeFromFavourite, getFavourites, getPostsByDateRange } = require("../controllers/postController");
const router=express.Router();


router.post("/post/create", verifyToken, createPost );
router.get("/post/getAll", getAllPosts);
router.get("/post/myPosts", verifyToken, getmyPosts);
router.delete("/post/delete/:id", verifyToken, deletePosts);
router.get("/post/search", searchPosts);
router.put("/post/addToFavourites/:postId",verifyToken,  addToFavourite);
router.put("/post/removeFromFavourites/:postId", verifyToken, removeFromFavourite);
router.get("/post/favourites", verifyToken, getFavourites);
router.get("/post/getPostsByDateRange", verifyToken, getPostsByDateRange)

module.exports = router;