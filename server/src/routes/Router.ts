import * as express from 'express';
const router = express.Router();
import * as indexRouter from './Index';
import * as userRouter from './UserRouter';

router.use('/', indexRouter);
router.use('/user', userRouter);

export = router;
