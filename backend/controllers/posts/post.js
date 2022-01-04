// User module is here
const Posts = require("../../Models/UserPost");
// Error handler
const CatchAsyncError = require("../../Middlewares/CatchAsyncError");
const ErrorHandler = require("../../Utils/ErrorHandler");

exports.fetchallPost = CatchAsyncError(async (req, res, next) => {
  const posts = await Posts.find({});
  res.status(200).json({
    success: true,
    posts,
  });
});
