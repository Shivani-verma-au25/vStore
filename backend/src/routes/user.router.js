import {Router} from 'express'
import { getProfile, loginUser, logoutUser, regiterUser } from '../controllers/user.controller.js';
import { ProtectedRoute } from '../middlewares/user.midlleware.js';


const router = Router();

router.route('/register').post(regiterUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)



// check user in login or not 
// protected routes
router.route('/get-profile').get( ProtectedRoute , getProfile)
router.route('/check').get( ProtectedRoute ,(req ,res) => {
   try {
        res.status(200).json({
            success : true ,
            message : `${req.user.name} is logged in`,
            user : req.user
        })
   } catch (error) {
    console.log("error in check user");
    return res.status(500).json({
        success : false ,
        message : "Error in check out"
    })
   }
})


// admin protected routes


export default router;