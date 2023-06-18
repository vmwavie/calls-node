import * as dotenv from 'dotenv';
import express from 'express';
import router from './routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT!}`);
});
