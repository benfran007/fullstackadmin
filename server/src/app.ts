import * as express from 'express';
import * as cors from 'cors';
import * as dbconnect from './utils/db';
import * as router from './routes/Router';
const app = express();
const port = 8000;
dbconnect;

app.use(cors());
app.use(express.json());

app.use('/', router);
app.listen(port, () => {
    console.log(`Site Wide Warning app listening on port ${port}`);
});

export default app;
