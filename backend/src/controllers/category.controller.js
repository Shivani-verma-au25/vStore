import { Category } from "../models/category.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const { productName } = req.body;
    console.log(productName);
    
    if (!productName.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });
    }

    const existing = await Category.findOne({ productName });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Category already exists" });
    }

    const category = await Category.create({productName});
    return res.status(201).json({ success: true, message: 'Category created', category });

  } catch (error) {

    console.log("Error in creating categoies",error);
    return res.status(500).json({
      success: false,
      message: "Failed to create categories",
    });
  }
});



// get all categoies
export const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
