const { User } = require("../models");

const userIdFromPhone = async (phone) => { 
    try {
        const user = await User.findOne({
            where: {
                phone
            }
        })
        return user.get('id')
    } catch (error) {
        throw error
    }
}

module.exports = {
    userIdFromPhone
};
