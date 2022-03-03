import * as dotenv from 'dotenv';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

dotenv.config();

mongoose.Promise = global.Promise;

const connection = mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

connection
    .then((db) => {
        console.log('Connected to database');
        return db;
    })
    .catch((err) => {
        console.log(err);
    });

export = connection;
