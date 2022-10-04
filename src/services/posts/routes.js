// Helpers
import { showValErrors } from '../../middlewares/showValErrors'
import { verifyToken } from '../../helpers/jwtHandler'

// Validate Data
import { createPostValidation } from './validateData'

class PostRouter {
    constructor(router, controller) {
        this.error = new Error()

        if (!router) {
            this.error.dependencyError = 'Express Router is undefined'
            throw this.error.dependencyError
        } else {
            this.router = router
        }

        if (!controller) {
            this.error.dependencyError = 'Controller is undefined'
            throw this.error.dependencyError
        } else {
            this.controller = controller
        }

        // Create New Post
        this.router.post(
            '/',
            [verifyToken, createPostValidation(), showValErrors],
            this.controller.create.bind(this.controller),
        )
    }

    setRoutes() {
        return this.router
    }
}

export default PostRouter
