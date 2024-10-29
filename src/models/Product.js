import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  iamge: { 
    type: String},
  title: {
     type: String,
      required: true
     },
  description: {
     type: String,
      required: true 
    },
  color: { 
    type: String,
     required: true
     },
  size: {
     type: String,
      required: true
     },
  isAvailable: {
     type: Boolean, 
     default: true 
    },
  status: {
     type: String, 
     enum: ["new", "discount"],
      required: true 
    },
  price: { 
    type: Number, 
    required: true
 },
 createdBy:{
  type: mongoose.Schema.Types.ObjectId, ref: 'User'
 },

  purchaseHistory: [
    {
      userId: { 
      type: mongoose.Schema.Types.ObjectId, ref: "User" },
      purchasePrice: { type: Number },
      purchaseDate: { type: Date, default: Date.now },
    },
  ],
});

export const Product = mongoose.model("Product", productSchema);
