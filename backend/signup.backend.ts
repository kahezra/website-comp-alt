import express from 'express'
import mysql from 'mysql'
import bcrypt from 'bcrypt'

const signupRouter = express.Router();

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wca",
});

conn.connect();

signupRouter.post('/', (req, res) => {
    const username : string = req.body.username;
    const email : string = req.body.email;
    const password : string = req.body.password;
    const confirmPassword : string = req.body.confirmPassword;

    if(password === confirmPassword) {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, (err, hash) => {
            conn.query("INSERT INTO `user` (username, email, password_hash) VALUES ("+`'${username}',`+`'${email}',`+`'${hash}'`+")", (error, result) => {
                if(error) throw error;
                console.log("worked")
                res.json( {
                    message: 'success',
                    data: {
                        username,email
                    }
                } )
            });
        });  
        
        
    }
})

signupRouter.get('/', (req,res) => {
    res.send("hello from /signup!")
})

export {signupRouter};