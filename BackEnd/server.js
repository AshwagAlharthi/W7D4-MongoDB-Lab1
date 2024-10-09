import express from "express";
import mongoose from "mongoose";
import Article from "./models/blog.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const port = 7073;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("I am Connected");
}

// post
app.post('/addArticle',(req,res)=>{
  const article = new Article({
    title : req.body.title,
    body: req.body.body,
    author: req.body.author,
    isEmployee: req.body.isEmployee,
  }) 
  article.save()
  .then((result)=>{
    res.send(result);
  })
})

// get all
app.get('/addArticle', (req,res)=>{
  Article.find()
  .then((result)=>{
    res.send(result);
  }
  )
  .catch(()=>{
    res.send("error");
  })
})

// update 
app.patch('/addArticle/:id',(req,res)=>{
  const {id} = req.params
  Article.findByIdAndUpdate(id, req.body, {new: true, runValidators:true})
  .then((result)=>{
    res.send(result);
  }
  )
  .catch(()=>{
    res.send("error");
  })
})

// delete
app.delete('/addArticle/:id',(req,res)=>{
  const {id} = req.params
  Article.findByIdAndDelete(id)

  .then((result)=>{
    res.send(result);
  })
  .catch(()=>{
    res.send("Error");
  });
})

// get by id
app.get('/addArticle/:id',(req,res)=>{
  const {id} = req.params
  Article.findById(id)

  .then((result)=>{
    res.send(result);
  })
  .catch(()=>{
    res.send("Error");
  });
})


// listen
app.listen(port, () => {});