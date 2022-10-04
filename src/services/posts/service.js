// Queries
import { queryPostsList } from './queries'

class PostService {
    constructor(dependenciesData) {
        this.error = new Error()

        if (!dependenciesData.post) {
            this.error.dependencyError = 'Post Model is undefined'
            throw this.error.dependencyError
        } else {
            this.post = dependenciesData.post
        }

        if (!dependenciesData.user) {
            this.error.dependencyError = 'User Model is undefined'
            throw this.error.dependencyError
        } else {
            this.user = dependenciesData.user
        }
    }

    async createPost(data) {
        try {
            const result = await this.post.create(data)
            return result
        } catch (err) {
            throw err
        }
    }

    async findPosts(userId, paginationData) {
        const query = queryPostsList(userId, this.user, paginationData)
        return await this.post.findAndCountAll(query)
    }
}

export default PostService
