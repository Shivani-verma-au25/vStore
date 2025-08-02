import { Products } from "../models/product.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../models/category.models.js";

//create product

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const { name, description, price, category, stock, images, isFeatured } =
      req.body;

    if (
      [name, description, price, category, stock].some((field) =>
        typeof field === "string"
          ? field.trim() === ""
          : field === undefined || field === null
      )
    ) {
      return res.status(300).json({
        success: false,
        message: "All fields are rquired!",
      });
    }

    const crtgy = await Category.findById(category);

    if (!crtgy) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // images handling still pending

    const product = await Products.create({
      name,
      description,
      price,
      category: crtgy,
      stock,
    });

    const newProduct = await Products.findById(product._id);
    if (!newProduct) {
      return res.status(400).sjon({
        success: false,
        message: "Product is not created",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product created !",
      newProduct,
    });
  } catch (error) {
    console.log("error in creating prodcts", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create Product",
    });
  }
});

// get all products

export const getProducts = asyncHandler(async (req, res) => {
  try {
    const allproducts = await Products.find();
    if (!allproducts) {
      return res.status(400).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All products",
      allproducts,
    });
  } catch (error) {
    console.log("Error find all Products",error);
    return res.status(500).json({
      success : false ,
      message: "Failed to get products"
    })
  }
});


// update products

export const updateProducts = asyncHandler( async(req ,res) => {
  try {
    // product is required to update
    const {id} = req.params;
    console.log("products id" ,id);
    
    const product = await Products.findById(id);
    if (!product) {
      return res.status(300).json({
        success:false,
        message : "products not found"
      })
    }

    // handle image too

    const updateProduct = await Products.findByIdAndUpdate(
      id,
      req.body,
      {new : true ,runValidators: true }
    )

    const updated_Product = await Products.findById(updateProduct._id);
    if (!updated_Product) {
      return res.status(301).json({
        success : false,
        message : "Product not created"
      })
    }

    return res.status(200).json({
      success : true,
      message : "Product created",
      updated_Product
    })

    
  } catch (error) {
    return res.status(500).json({
      success : false,
      message : "Failed to update products"
    })
  }
})


// delete products 

export const deleteProduct = asyncHandler (async (req, res) => {
  try {

    const {id} = req.params;

    const existedProduct = await Products.findById(id)

    if (!existedProduct) {
      return res.status(304).json({
        success:false,
        message : "Product not found"
      })
    }

    await Products.findByIdAndDelete(id);
    return res.status(200).json({
      success : true,
      message : "Product deleted!"
    })
    
  } catch (error) {
    console.log("Error in deleteing product",error);
    return res.status(500).json({
      success : false,
      message : "Failed delete products"
    })
    
  }
})