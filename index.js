const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/input",(req,res)=>{
    console.log(req.body)
    res.send("request is handled")
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})