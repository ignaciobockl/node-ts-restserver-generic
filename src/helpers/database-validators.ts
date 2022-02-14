import User from "../models/user.model";


/**
 *  User validators
 */
export const existUserById = async(id: number) => {
    const exist = await User.findByPk(id);
    if (!exist) { throw new Error('There is no user with the entered id.') }
}

export const stateUser = async(id: number) => {
    const user = await User.findByPk(id);

    console.log(user.state)
    // if (user.state === false) { throw new Error('The user is deleted.') }
}