import { Request, Response } from "express";

import User from "../models/user.model";


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
    // if ( !user ) { return res.status(404).json({ ok: false, errorMsg: `There is no user with id: ${ id }.` }) }

    return res.json({
        ok: true,
        user
    });

}

export const createUser = async ( req: Request, res: Response ): Promise<Response> => {

    const { name } = req.body;

    return res.json({
        msg: 'createUser',
        name
    });

}

export const updateUser = async ( req: Request, res: Response ): Promise<Response> => {

    const id = req.params.id;
    const { name } = req.body

    return res.json({
        msg: 'updateUser',
        id
    });


}

export const deleteUser = async ( req: Request, res: Response ): Promise<Response> => {

    const id = req.params.id;

    return res.json({
        msg: 'deleteUser',
        id
    });

}