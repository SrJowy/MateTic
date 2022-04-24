const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const data = {
    host: '127.0.0.1',
    port: '8889',
    user: 'root',
    password: 'password',
    database: 'matetic',
    insecureAuth : true
}

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded( {extended: true} ));

app.listen(5000, ()=>{
    console.log("Listening to port 5000");
})

app.post("/api/checkData", (req, res) => {
    const mail = req.body.email;
    const password = req.body.pass;
    
    var connection = mysql.createConnection(data);
    const select = "SELECT nomb_ap, contra, rol FROM usuario WHERE correo = ?";
    const vars = [mail]
    connection.query(select, vars, (error, result) => {
        if (error) console.log(error)
        else {
            if (bcrypt.compareSync(password, result[0].contra)) {
                res.send({email: mail, nomb: result[0].nomb_ap, rol: result[0].rol, session: true})
            } else {
                res.send({email: mail, session: false})
            }
        }
    });
    connection.end();

});

const catchId = (f, connection) => {
    return new Promise((resolve, reject) => {
        const select = "SELECT id_foro FROM foro WHERE titulo = '" + f + "';";
        connection.query(select, (err, result, fields) => {
            if (err) {
                return reject(error);
            } else {
                resolve(result[0].id_foro);
            }
        });
    });
}

app.post("/api/sendNewDiscussion", async (req, res) => {
    const title = req.body.discussionTitle;
    const text = req.body.discussionText;
    const foro = req.body.foro;
    const username = req.body.name;
    var connection = mysql.createConnection(data);
    var id = -1;

    while (id == -1) id = await catchId(foro, connection);
    
    const insert = `INSERT INTO discusion (titulo, mensaje, correo, foro) VALUES (?,?,?,?)`
    let vars = [title, text, username, id]

    connection.query(insert, vars, (er, re, fi) => {
        if (er) console.log(er);
        else res.send({text: 'Se ha añadido tu respuesta'})
    })
    connection.end();
})

app.post("/api/getEntries", async (req, res) => {
    const foro = req.body.foro;
    var id = -1;
    var connection = mysql.createConnection(data);

    while (id == -1) id = await catchId(foro, connection);

    const select = "SELECT titulo, mensaje, correo FROM discusion WHERE foro = " + id + ";";
    connection.query(select, (er, re, fi) => {
        if (er) console.log(er);
        else res.send(re)
    })
    connection.end();
})

const catchDiscussionId = (t, connection) => {
    return new Promise((resolve, reject) => {
        const select = "SELECT id_discusion FROM discusion WHERE titulo = '" + t + "';";
        connection.query(select, (err, result, fields) => {
            if (err) {
                return reject(err);
            } else {
                resolve(result[0].id_discusion);
            }
        });
    });
}

app.post("/api/getResponses", async (req, res) => {
    const title = req.body.title;
    var id = -1;
    var connection = mysql.createConnection(data);
    while (id == -1) id = await catchDiscussionId(title, connection);

    const select = "SELECT mensaje, correo FROM aporte WHERE id_discusion = ?;";
    const vars = [id];
    connection.query(select, vars, (er, re, fi) => {
        if (er) console.log(er);
        else res.send(re);
    })
    connection.end();
})

app.post("/api/sendNewEntry", async (req, res) => {
    const title = req.body.disc_title;
    const name = req.body.name;
    const text = req.body.discussionText;
    var id = -1;
    var connection = mysql.createConnection(data);

    while (id == -1) id = await catchDiscussionId(title, connection);

    const insert = "INSERT INTO aporte (mensaje, id_discusion, correo) VALUES (?,?,?);";
    const vars = [text, id, name];
    connection.query(insert, vars, (er, re, fi) => {
        if (er) console.log(er);
        else res.send({text: "Se ha añadido tu aporte"});
    })
    connection.end();
});

app.post("/api/getInfoLesson", (req, res) => {
    const title = req.body.title;
    const lesson = req.body.lesson;

    var connection = mysql.createConnection(data);

    const select = "SELECT contenido FROM apartado WHERE nombre_apartado = ? AND tema = ?;";
    const vars = [lesson, title];
    connection.query(select, vars, (er, re, fi) => {
        if (er) console.log(er);
        else res.send(re);
    })
    connection.end();
});