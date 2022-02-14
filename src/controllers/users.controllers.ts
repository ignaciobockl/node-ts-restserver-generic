import { Request, Response } from "express";


export const getUsers = async ( req: Request, res: Response ): Promise<Response> => {

    return res.json({
        msg: 'getUsers'
    });

}

export const getUserById = async ( req: Request, res: Response ): Promise<Response> => {

    const id = req.params.id;

    return res.json({
        msg: 'getUser',
        id
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