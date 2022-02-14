import { Router } from 'express';
import { check } from 'express-validator';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controllers';

import { existUserById, stateUser } from '../helpers/database-validators';

import { validateFields } from '../middlewares/validate-field';


const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get([
        check('id').custom(existUserById),
        check('id').custom(stateUser),
        validateFields
    ],getUserById)
    .put(updateUser)
    .delete(deleteUser);


export default router;