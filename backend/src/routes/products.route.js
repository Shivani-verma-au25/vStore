import {Router} from 'express'
import { ProtectedRoute  } from '../middlewares/user.midlleware.js';
import {isAdmin} from '../middlewares/admin.middleware.js'
import { createProduct, deleteProduct, getProducts, updateProducts } from '../controllers/product.controller.js';

const router = Router();


router.route('/create-product').post(ProtectedRoute , isAdmin , createProduct)
router.route('/get-allproducts').get(ProtectedRoute , isAdmin , getProducts)
router.route('/updateproduct/:id').put(ProtectedRoute , isAdmin , updateProducts)
router.route('/delete/:id').delete(ProtectedRoute , isAdmin , deleteProduct)

export default router;