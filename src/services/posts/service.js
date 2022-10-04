// Queries
import { queryPostsList, queryPostById, querySearchPosts } from './queries'

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

    async searchPosts(search) {
        const query = querySearchPosts(search, this.user)
        return await this.post.findAll(query)
    }

    async findPosts(userId, paginationData) {
        const query = queryPostsList(userId, this.user, paginationData)
        return await this.post.findAndCountAll(query)
    }

    async findPostById(postId) {
        const query = queryPostById(postId, this.user)
        return this.post.findOne(query)
    }

    async updatePost(id, data) {
        try {
            const postResponse = await this.post.update({ ...data }, { where: { id } })
            return postResponse
        } catch (err) {
            throw err
        }
    }

    async publishPost(id, status) {
        try {
            let result = await this.post.update({ published: status }, { where: { id } })
            return result
        } catch (err) {
            throw err
        }
    }

    async deletePost(id) {
        try {
            let result = await this.post.update({ active: false }, { where: { id } })
            return result
        } catch (err) {
            throw err
        }
    }
}

export default PostService
