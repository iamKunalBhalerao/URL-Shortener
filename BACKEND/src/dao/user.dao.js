import Url from "../models/url.model.js"

export const findUrlByUserId  = async (userId) => {
    try{

        return await Url.find({user: userId})
    }catch(err){throw err}
}