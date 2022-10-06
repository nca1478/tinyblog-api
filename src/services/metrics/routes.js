// Helpers
import { showValErrors } from '../../middlewares/showValErrors'
import { verifyToken } from '../../helpers/jwtHandler'

class MetricRouter {
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

        // Update Blog Num Visits
        this.router.put('/', this.controller.updateVisits.bind(this.controller))
    }

    setRoutes() {
        return this.router
    }
}

export default MetricRouter
