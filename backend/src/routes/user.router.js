import {Router} from 'express'
import {userSignIn, userSignOut, userSignUp } from '../controllers/user.controller.js'

const router = Router()


router.route('/signup').post(userSignUp)
router.route('/signin').post(userSignIn)
router.route('/signout').post(userSignOut)

export default router;