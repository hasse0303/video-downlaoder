const express = require('express');
const vdo = require('video-downloader-pro');
const app = express();

const cors = require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.get('/', (req,res) =>{
  vdo(req.query.link).then((data) => {
    res.send(data)
  })
})

const PORT = process.env.PORT || 8888
app.listen(PORT, (req, res) => {
  console.log("RUNNIG" + PORT);
});
