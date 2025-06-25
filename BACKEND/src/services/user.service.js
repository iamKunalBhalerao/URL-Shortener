import { findUrlByUserId } from "../dao/user.dao.js"

export const findUrlofUser = async (userId) => {
    try{
        return await findUrlByUserId(userId)
    }catch(err){throw err}
}