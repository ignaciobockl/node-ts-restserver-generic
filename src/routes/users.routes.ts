import { Router } from 'express';
import { check } from 'express-validator';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.controllers';

import { existUserById, stateUser, isValidId, existEmailUser } from '../helpers/database-validators';

import { validateFields } from '../middlewares/validate-field';


const router = Router();

router.route('/')
    .get(getUsers)
    .post([
        check('name', 'The name is required.').not().isEmpty(),
        check('email', 'Email is required.').not().isEmpty(),
        check('email', 'It is not a valid email.').isEmail(),
        check('email').custom( existEmailUser ),
        validateFields
    ], createUser);

router.route('/:id')
    .get([
        check('id').custom(isValidId),
        check('id').custom(existUserById),
        check('id').custom(stateUser),
        validateFields
    ], getUserById)
    .put([
        check('id').custom(isValidId),
        check('id').custom(existUserById),
        validateFields
    ], updateUser)
    .delete([
        check('id').custom(isValidId),
        validateFields
    ], deleteUser);


export default router;