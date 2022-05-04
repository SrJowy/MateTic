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
    const select = "SELECT nomb_ap, contra, rol, colegio FROM usuario WHERE correo = ?";
    const vars = [mail]
    connection.query(select, vars, (error, result) => {
        if (error) console.log(error)
        else {
            if (bcrypt.compareSync(password, result[0].contra)) {
                res.send({email: mail, nomb: result[0].nomb_ap, rol: result[0].rol, col: result[0].colegio, session: true})
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
        else res.send({text: 'Se ha creado tu discusión'})
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
    });
    connection.end();
});


app.post("/api/setMail", (req, res) => {
    const newMail = req.body.mail;
    const actMail = req.body.actMail;
    var connection = mysql.createConnection(data);

    const update = "UPDATE usuario SET correo = ? WHERE correo = ?;";
    const vars = [newMail, actMail];
    connection.query(update, vars, (er, re, fi) => {
        if (re.changedRows == 0) {
            res.send({success: false, message: "El correo registrado ya existe"});
        } else {
            res.send({success: true, message: "El correo se ha registrado correctamente"});
        }
    })

})

app.post("/api/setPassword", (req, res) => {
    const mail = req.body.mail;
    const password = req.body.password;
    var connection = mysql.createConnection(data);

    const hash = bcrypt.hashSync(password, 1);
    const update = "UPDATE usuario SET contra = ? WHERE correo = ?;";
    const vars = [hash, mail];
    connection.query(update, vars, (er,re, fi) => {
        res.send({message: "La contraseña se ha actualizado correctamente"});
    });
})

app.post("/api/getExercise", (req, res) => {

    const lesson = req.body.lesson;

    var connection = mysql.createConnection(data);

    const select = "SELECT id_ejercicio,contenido FROM ejercicio WHERE apartado = ?";
    const vars = [lesson];
    connection.query(select, vars, (er, re, fi) => {
        if (er) console.log(er);
        else res.send(re);
    });
    connection.end();
});

app.post("/api/createUser", (req, res) => {
    const mail = req.body.mail;
    const name = req.body.name;
    const password = req.body.password;
    const colegio = req.body.colegio;
    const rol = req.body.rol;

    const hash = bcrypt.hashSync(password, 1);
    var connection = mysql.createConnection(data);

    const insert = "INSERT INTO usuario VALUES (?,?,?,?,?)";
    const vars = [mail, name, hash, colegio, rol];
    connection.query(insert, vars, (er, re, fi) => {
        if (er) console.log(er);
        else {
            res.send({message: "Se ha creado el usuario correctamente"});
        }
    });
    connection.end();
});

app.post("/api/getMarks", (req, res) => {
    const mail = req.body.mail;

    const connection = mysql.createConnection(data);
    const select = "SELECT correcto, apartado, fecha_hora FROM realizacion_ejercicio NATURAL JOIN ejercicio WHERE correo = ?;";
    const vars = [mail];
    connection.query(select, vars, (er, re, fi) => {
        if (er) console.log(er);
        else {
            res.send(re);
        }
    });
})

app.post("/api/correctExercise", (req, res) => {
    const lesson = req.body.lesson;
    const responses = req.body.responses;
    const id = req.body.id;
    const mail = req.body.mail;
    var correct = false;
    if (lesson === "Funciones polinomicas") {
        for (val in responses) {
            if (val == "o1" && responses[val] === "3") {
                correct = true;
            } else if (val == "o2" && responses[val] === "cuadraticaNoX") {
                correct = true;
            } else if (val == "o3" && responses[val] === "02") {
                correct = true;
            } else if (val == "o41" && responses[val] === "00") {
                correct = true;
            } else if (val == "o43" && responses[val] === "10") {
                correct = true;
            } else if (val == "o5" && responses[val] === "f1") {
                correct = true;
            } else if (val == "o6" && responses[val] === "f4") {
                correct = true;
            } else {
                correct = false;
                break;
            }
        }
    } else if (lesson === "Dominio y recorrido") {
        for (val in responses) {
            if (val == "o1" && responses[val] === "R--3") {
                correct = true;
            } else if (val == "o2" && responses[val] === "R") {
                correct = true;
            } else if (val == "o3" && responses[val] === "-1") {
                correct = true;
            } else {
                correct = false;
                break;
            }
        }
    } else if (lesson === "Operaciones con funciones") {
        for (val in responses) {
            if (val == "o1" && responses[val] === "x2+2x-3") {
                correct = true;
            } else if (val == "o2" && responses[val] === "-x2+1") {
                correct = true;
            } else if (val == "o3" && responses[val] === "x3+x2-2x-1") {
                correct = true;
            } else if (val == "o4" && responses[val] === "x+2") {
                correct = true;
            } else if (val == "o5" && responses[val] === "x2-x-2") {
                correct = true;
            } else if (val == "o6" && responses[val] === "x+1") {
                correct = true;
            } else {
                correct = false;
                break;
            }
        }
    } else if (lesson === "Continuidad") {
        for (val in responses) {
            if (val == "o1" && responses[val] === "b") {
                correct = true;
            } else if (val == "o2" && responses[val] === "c") {
                correct = true;
            } else if (val == "o3" && responses[val] === "a") {
                correct = true;
            } else {
                correct = false;
                break;
            }
        }
    }

    const connection = mysql.createConnection(data);
    const insert = "INSERT INTO realizacion_ejercicio (correcto, correo, id_ejercicio) VALUES (?,?,?);";
    const vars = [correct, mail, id];
    connection.query(insert, vars, (er, re, fi) => {
        if (er) console.log(er)
        else {
            correct ? res.send({correct: true, message: "Ejercicio realizado correctamente"}) : res.send({correct: false, message: "Se han encontrado fallos"})
        }
    })
    connection.end();
});