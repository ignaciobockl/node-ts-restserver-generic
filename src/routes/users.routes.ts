import { Router } from 'express';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controllers';


const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);


export default router;