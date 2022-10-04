class PostService {
    constructor(dependenciesData) {
        this.error = new Error()

        if (!dependenciesData.post) {
            this.error.dependencyError = 'Post Model is undefined'
            throw this.error.dependencyError
        } else {
            this.post = dependenciesData.post
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
}

export default PostService
