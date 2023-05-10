import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index';

const app = express();
app.use(cors());
//this is great solution if we want to use the static middlewre from express that returns for us any file at images.
// app.use(express.static(path.join(__dirname, '../assets/images')));
// Example of import and use the routes module as middleware
app.use('/', routes);
dotenv.config();

const port = process.env.PORT;

app.listen(port, (): void => {
  console.log(`Server started on port: ${port}`);
});

const add5 = (value: number) => value + 5;
export default add5;
