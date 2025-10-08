import express from 'express';
import usersRouter from './routes/userRoute.js';
import pinsRouter from './routes/pinRoute.js';
import commentsRouter from './routes/boardRoute.js';
import boardsRouter from './routes/commentRoute.js';
import connectDB from './utils/connectDB.js'

const app = express();

app.use('/users', usersRouter);
app.use('/pins', pinsRouter);
app.use('/comments', commentsRouter);
app.use('/boards', boardsRouter);




app.listen(3000, ()=> {
    connectDB()
    console.log("Server running at port 3000");
    
})