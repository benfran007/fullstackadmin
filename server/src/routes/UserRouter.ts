import * as express from 'express';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

const router = express.Router();

const userService = new UserService();
/* Return a list of users */
router.get('/', async function (req, res) {
    const users: User[] = await userService.getAllUsers();
    res.send(users);
});

router.get('/create', async function (req, res) {
    const user: User = await userService.createUser();
    res.send(user);
});

/* Return user with given id */
router.get('/:id', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const id = req.params.id;
    const user: User = await userService.getUser(id);
    res.send(user);
});

export = router;
