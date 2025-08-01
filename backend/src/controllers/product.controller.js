import { Products } from '../models/product.models.js';
import {asyncHandler} from '../utils/asyncHandler.js'


export const createProduct = asyncHandler( async ( req , res) => {
  try {
    const {name,description,price,category,stock,images,isFeatured} = req.body;
    

    if ([name,description,price,category,stock,isFeatured].some((field) => field.trim() === '')) {
      return res.status(300).json({
        success : false,
        message : "All fields are rquired!"
      })
    }

    // images handling still pending 

    const newProduct = await Products.create({
      name,
      description,
      price,
      // category,

    })


    
  } catch (error) {
    console.log("error in creating prodcts");
    return res.status(500).json({
      success : false,
      message : 'Failed to create Product'
    })
    
  }
})