import {Router} from 'express'
import {otpVerified, resetPassword, sendOTP, userSignIn, userSignOut, userSignUp } from '../controllers/user.controller.js'

const router = Router()


router.route('/signup').post(userSignUp)
router.route('/signin').post(userSignIn)
router.route('/signout').post(userSignOut)
router.route('/send-otp').post(sendOTP)
router.route('/verify-otp').post(otpVerified)
router.route('/reset-password').post(resetPassword)

export default router;