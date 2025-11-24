import {Router} from 'express'
import { isAuth } from '../middlewares/user.midlleware.js';
import { getCurrentUser } from '../controllers/auth.controller.js';

const router = Router();

router.route('/currentUser').get(isAuth,getCurrentUser)


export default router;