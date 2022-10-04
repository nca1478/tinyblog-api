// Dependencies
import { check, oneOf } from 'express-validator'

/**
 * Validate body request of create user endpoint (POST /posts)
 * @return	{Array}		Rules of validation (express-validator)
 */

const createPostValidation = () => {
    return [
        check('title').exists().withMessage('El título es requerido'),
        check('summary').exists().withMessage('El resumen es requerido'),
        check('body').exists().withMessage('El cuerpo es requerido'),
    ]
}

export { createPostValidation }
