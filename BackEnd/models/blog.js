import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:{
    type: String,
    required: true,
  }, 
  body: String,
  author: String,
  isEmployee: Boolean,
  },
  {timestamps: true}
);

const Article = mongoose.model('Article', blogSchema);

export default Article;