import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],  //Array of strings
    selectedFile: String, // to convert image into a string
    likeCount :{
        type: String,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}); //This is our schema

// To convert it into a model
const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;