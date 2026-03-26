const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    content:
    {
        type:String,
    },
    title:
    {
      type:String
    },
    author:
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        index:true,
    }
});

module.exports = mongoose.model("Posts", postSchema);