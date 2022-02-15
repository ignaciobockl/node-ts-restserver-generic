import User from "../models/user.model";


export const isValidId = async( id:number ) => {
    const _id = Number(id);
    if ( _id === undefined || _id.toString() === 'NaN' || typeof(_id) !== 'number' ) {
        throw new Error('An id of type number was expected.');
    }
}


/**
 *  User validators
 */
export const existUserById = async(id: number) => {
    const exist = await User.findByPk(id);
    if (!exist) { throw new Error('There is no user with the entered id.') }
}

export const stateUser = async(_id: number) => {
    const user = await User.findOne({where: { id: _id, state: true }});
    if ( !user ) { throw new Error('The user is deleted.') }
    // if (user.state === false) { throw new Error('The user is deleted.') }
}