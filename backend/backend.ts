import express from 'express'
import cors from 'cors'
import {signupRouter} from './signup.backend'
import { loginRouter } from './login.backend';
import session from 'express-session'

declare module 'express-session' {
  export interface SessionData {
    loggedin: boolean;
    username: string;
  }
}

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: 'ohoerhe2-438m190d423m09jjk',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production', // True over HTTPS
            maxAge: 1000 * 60 * 60 * 24 // 24 hours
        }
    })
);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

app.get('/', (req,res) => {
    if(req.session.loggedin) {
        res.send("You are logged in, "+req.session.username+"!");
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})