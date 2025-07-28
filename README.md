# Gestion de Produits (Express.js + MongoDB)

Une API RESTful pour la gestion de produits, construite avec Node.js, Express.js et MongoDB. Cette API permet de créer, lire, mettre à jour et supprimer des produits.

## Fonctionnalités

- Créer un nouveau produit
- Obtenir tous les produits
- Obtenir un produit spécifique par ID
- Mettre à jour un produit
- Changer le statut de stock d'un produit
- Supprimer un produit

## Stack Technologique

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (Authentification)

## Prérequis

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (pour tester l'API)

## Installation

1. Cloner le dépôt :

    ```bash
    git clone [votre-lien-git]
    cd gestion_produit
    ```

2. Installer les dépendances :

    ```bash
    npm install
    ```

3. Configurer l'environnement :
   - Créer un fichier `.env` à la racine
   - Ajouter vos variables d'environnement (ex: `MONGO_URI`, `JWT_SECRET`)

4. Démarrer le serveur :

    ```bash
    npm start
    # ou pour le mode développement
    npm run dev
    ```

5. Le serveur tourne sur :

    ```bash
    http://localhost:3000
    ```

---

## Référence API

### Créer un produit
- **Méthode**: `POST`
- **URL**: `/`
- **Body**: `raw` → `JSON`

```json
{
  "name": "Produit A",
  "description": "Description du produit",
  "price": 29.99,
  "inStock": true
}
