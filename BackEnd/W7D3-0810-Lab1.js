import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = 7073;

// 08/10 Lab
app.get('/article',(req,res)=>{
  const article = new Article ({
    title:"hello world",
    body:"this is the body",
  })

  article.save()

  .then((result)=>{
    res.send(result);
  })
})


main();
app.get("/user", (req, res) => {
  res.send("Ashwag Alharthi");
});

// array
let usersInfo = [];

// post
app.post("/userInfo", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const username = {id:usersInfo.length + 1, name, email, password };
  usersInfo.push(username);
  res.json(username);
});

// patch
app.patch('/userInfo/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, password } = req.body;
    const user = usersInfo.find(u => u.id === userId);

    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// delete
app.delete("/userInfo/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const deletedUser = usersInfo.find(u => u.id === userId);
    const usersInfo = usersInfo.filter(u => u.id !== userId);
    res.json(deletedUser);
});

// get
app.get("/userInfo", (req, res) => {
  res.json(usersInfo);
});

// test get
app.get("/age", (req, res) => {
  res.send("25");
});


// listen
app.listen(port, () => {});