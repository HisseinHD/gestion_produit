require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connectection reussi à MongoDB'))
.catch((err) => console.error(' Erreur MongoDB:', err));

//Routes
app.use(express.json());
app.use('/api/products', productRoutes);

// Démarrage du serveur
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});