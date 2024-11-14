
import express, {Request} from 'express';
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import indexRouter from './routes/index'

dotenv.config()

const app = express();

const port = process.env.SERVER_HTTP_PORT || 3000;

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app