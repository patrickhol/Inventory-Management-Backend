const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 70
    },
    price: {
      type: Number,
      required: true,
      unique: false
    },
    quantity: {
      type: Number,
      required: true,
      unique: false
    },
    ean: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  },
  { timestamps: true }
)

itemSchema.index({ user: 1, name: 1 }, { unique: true })
export const Item = mongoose.model('item', itemSchema)
