import Sequelize from 'sequelize'
const Op = Sequelize.Op

const queryPostsList = (userId, user, paginationData) => {
    const { limit, skip } = paginationData
    return {
        where: { userId, active: true },
        order: [['createdAt', 'DESC']],
        attributes: { exclude: ['userId'] },
        distinct: true,
        include: [
            {
                model: user,
                as: 'user',
                attributes: ['id', 'name', 'email', 'role'],
            },
        ],
        limit,
        offset: skip,
    }
}

const queryPostById = (postId, user) => {
    return {
        where: { id: postId, active: true },
        attributes: { exclude: ['userId'] },
        include: [
            {
                model: user,
                as: 'user',
                attributes: ['id', 'name', 'email', 'role'],
            },
        ],
    }
}

export { queryPostsList, queryPostById }
