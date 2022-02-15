import { Request, Response } from "express";

import User from '../models/user.model';


export const getUsers = async ( req: Request, res: Response ): Promise<Response> => {

    const users = await User.findAll({ where: { state: true } });
    console.log(users)
    if ( users.length === 0 ) { return res.status(400).json({ ok: false, errorMsg: 'There are no users in the database.' }) }

    return res.status(200).json({
        ok: true,
        quantity: users.length,
        users
    });

}

export const getUserById = async ( req: Request, res: Response ): Promise<Response> => {

    const id = req.params.id;

    const user = await User.findByPk(id);

    return res.json({
        ok: true,
        user
    });

}

export const createUser = async ( req: Request, res: Response ): Promise<Response> => {

    const { name, email } = req.body;
    
    const nameValue: string = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const emailValue: string = email.toLowerCase();
    const data = {
        name: nameValue,
        email: emailValue,
        state: true
    }
    console.log(data)

    try {
        // const createUser = new User(data);
        // await createUser.save();

        return res.json({
            ok: true,
            msg: 'User created successfully.',
            user: createUser
        });
        
    } catch (error) {
        return res.status(400).json({ok: false, error});
    }

}

export const updateUser = async ( req: Request, res: Response ): Promise<Response> => {

    const id: number = Number(req.params.id);
    const { name, email } = req.body

    const user = await User.findByPk(id);

    const nameValue: string = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const emailValue: string = email.toLowerCase();

    const data = {
        name: nameValue,
        email
    }

    // email validation
    if ( user?.toJSON().email !== email ) {
        const emailDB = await User.findOne({ where: { email } });
        if ( emailDB ) { return res.status(400).json({ ok: false, error: `The email ${ email} is already registered in the database.` }) }
        else { data.email = emailValue; }
    } else { data.email = user?.toJSON().email; }

    try {
        
        await user?.update(data);

        return res.json({
            ok: true,
            msg: 'The user was successfully modified.',
            data
        });

    } catch (error) {
        return res.status(400).json({ok: false, error});
    }

}

export const deleteUser = async ( req: Request, res: Response ): Promise<Response> => {

    const id = req.params.id;

    const user = await User.findByPk(id);
    const dataFalse = { state: true }
    const dataTrue = { state: false }

    try {
        if (user?.toJSON().state === false ) {
            await user.update(dataFalse);
            return res.status(200).json({ ok: true, msg: 'The user was successfully restored.' });
        } else {
            await user?.update(dataTrue);
            return res.status(200).json({ ok: true, msg: 'The user was successfully deleted.' });
        }
    } catch (error) {
        return res.status(400).json({ok: false, error});
    }

}