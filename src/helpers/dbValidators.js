// Models
import User from '../services/users/model'

const userExistsByEmail = async (email = '') => {
    const userExists = await User.findOne({ where: { email } })
    if (userExists) {
        throw new Error(`El email ${email} ya existe`)
    }
}

module.exports = {
    userExistsByEmail,
}
