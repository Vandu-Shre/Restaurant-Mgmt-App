import "reflect-metadata";
import express from "express";
import session from "express-session";
import passport from "passport";
import { AppDataSource } from "./data-source";
import "./passport";
import authRouter from './routes/auth';
import menuRouter from './routes/menu';
import orderRouter from './routes/order';

const app = express();
const port = 3000;
  
// TypeORM init
AppDataSource.initialize()
    .then(() => console.log("Data Source initialized"))
    .catch(err => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session middleware
app.use(session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: false,
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// Mount the router at /auth
app.use('/auth', authRouter);
app.use('/menu', menuRouter);
app.use('/order', orderRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});