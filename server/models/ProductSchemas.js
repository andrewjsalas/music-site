const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true },
    image_url: { type: String, required: true },
    price: { type: Number, required: true },
    category_id: { type: Number, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
});

// Category Schema 
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
});

// Tag Schema
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

// File Schema
const fileSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    file_url: { type: String, required: true },
    file_size: { type: Number, required: true },
    file_format: { type: String, required: true },
});

// Create models
const Product = mongoose.model('Product', productSchema);
const Category = mongoose.model('Category', categorySchema);
const Tag = mongoose.model('Tag', tagSchema);
const File = mongoose.model('File', fileSchema);

module.exports = { Product, Category, Tag, File };
