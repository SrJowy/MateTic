const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded( {extended: true} ));

app.listen(5000, ()=>{
    console.log("Listening to port 5000");
})

app.post("/api/checkData", (req, res) => {
    const username = req.body.userName
    const password = req.body.pass
    if (username == "HOLA" && password == "ADIOS") res.send(true)

});