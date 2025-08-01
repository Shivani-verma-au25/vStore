import {Router} from 'express'
import { createCategory, getAllCategories } from '../controllers/category.controller.js';
import { isAdmin } from '../middlewares/admin.middleware.js';
import { ProtectedRoute } from '../middlewares/user.midlleware.js';
const router = Router()



router.route('/create').post(ProtectedRoute,isAdmin ,createCategory)
router.route('/get-category').get(ProtectedRoute ,isAdmin ,getAllCategories)




export default router;