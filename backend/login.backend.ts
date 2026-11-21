import express from 'express'
import mysql from 'mysql'
import bcrypt from 'bcrypt'

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wca'
});

conn.connect();

const loginRouter = express.Router();

loginRouter.post('/', (req,res) => {
   const {username, password} = req.body;

    conn.query(`SELECT * FROM user WHERE username = '${username}'`
        , (err, result) => {
            const name : string = result[0].username;
            const hash : string = result[0].password_hash;

            bcrypt.compare(password, hash)

            .then((isMatch) => {
                if(isMatch) {
                    req.session.loggedin = true;
                    req.session.username = name;
                    res.json({message: `You are logged in as ${name}!`})
                }else {
                    res.json({message: "Wrong username or password!"})
                }
            }); 
        }
    )

//    res.json({message: "Login successful!"});
})

export {loginRouter}