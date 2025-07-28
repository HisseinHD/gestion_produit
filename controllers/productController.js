const Product = require('../models/productModel');

// Créer un produit
exports.createProduct = async (req, res) => {
    try {
        const { productName, price, stockStatus } = req.body;
        const newProduct = new Product({ productName, price, stockStatus });
        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer un produit par ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: 'ID invalide' });
    }
};

// Modifier un produit (sauf stockStatus)
exports.updateProduct = async (req, res) => {
    try {
        const updates = { ...req.body };
        delete updates.stockStatus;

        const updated = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!updated) return res.status(404).json({ message: 'Produit non trouvé' });

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Récupérer tous les produits
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products);
        
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Modifier uniquement le stockStatus
exports.updateStockStatus = async (req, res) => {
    const allowedStatus = ['en stock', 'petite stock', 'pas en stock'];
    const newStatus = req.params.status;

    if (!allowedStatus.includes(newStatus)) {
        return res.status(400).json({ message: 'Statut non valide' });
    }

    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            { stockStatus: newStatus },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Produit non trouvé' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Produit non trouvé' });
        res.json({ message: 'Produit supprimé' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
