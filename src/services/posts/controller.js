// Helpers
import { responseError, responseGET, responsePOST } from '../../helpers/response'
import { paginate } from '../../helpers/pagination'

// Service Class
import PostService from './service'

class PostController extends PostService {
    constructor(dependenciesData) {
        super(dependenciesData)
        this.error = new Error()
    }

    async create(req, res) {
        try {
            const data = {
                userId: req.user.id,
                title: req.body.title,
                summary: req.body.summary,
                body: req.body.body,
            }
            const result = await this.createPost(data)
            const response = responsePOST({
                msg: 'Post creado exitosamente.',
                post: result,
            })
            return res.status(201).json(response)
        } catch (err) {
            const error = responseError([err])
            res.status(500).json(error)
        }
    }

    async findAll(req, res) {
        const page = req.query.page ? req.query.page : 1
        const limit = req.query.limit ? req.query.limit : 4

        try {
            const userId = req.user.id
            const paginationData = paginate(page, limit)
            const result = await this.findPosts(userId, paginationData)
            const response = responseGET(paginationData.pagination, result)
            return res.status(200).json(response)
        } catch (err) {
            const error = responseError([err])
            res.status(500).json(error)
        }
    }
}

export default PostController
