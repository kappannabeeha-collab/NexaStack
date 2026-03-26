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
postSchema.index({title:1, content:1});

module.exports = mongoose.model("Posts", postSchema);