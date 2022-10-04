// Helpers
import { responseError, responseGET, responsePOST } from '../../helpers/response'

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
}

export default PostController
