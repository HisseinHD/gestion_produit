# Gestion de Produits (Express.js + MongoDB)

Une API RESTful pour la gestion de produits, construite avec Node.js, Express.js et MongoDB. Cette API permet de créer, lire, mettre à jour et supprimer des produits.

## Fonctionnalités

- Créer un nouveau produit
- Obtenir tous les produits
- Obtenir un produit spécifique par ID
- Mettre à jour un produit
- Changer le statut de stock d'un produit
- Supprimer un produit
<img width="287" height="249" alt="Capture d’écran du 2025-07-28 13-14-30" src="https://github.com/user-attachments/assets/4e753ce5-cc9f-441b-b0b8-89313575bb46" />


## Stack Technologique

- Node.js
- Express.js
- MongoDB (via Mongoose)

## Prérequis

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (pour tester l'API)

## Installation

1. Cloner le dépôt :

    ```bash
    git clone git@github.com:HisseinHD/gestion_produit.git
    cd gestion_produit
    ```

2. Installer les dépendances :

    ```bash
    npm install
    ```

3. Configurer l'environnement :
   - Créer un fichier `.env` à la racine
   - Ajouter les variables d'environnement ( `MONGO_URI= mongodb://127.0.0.1:27017/productsDB`, `PORT=5000`)

4. Démarrer le serveur :

    ```bash
    npm start
    # ou pour le mode développement
    npm run dev
    ```

5. Le serveur tourne sur :

    ```bash
    http://localhost:5000
    ```

---
## Pour Teste Directement depuis POSTMAN
### Vous Pouvez cliquer sur le lien ci dessous
https://web.postman.co/workspace/My-Workspace~c696a576-a5b2-4097-8282-998a7d8202ed/request/38643666-1ba6d282-2367-415e-be98-72ce66edecc3?action=share&source=copy-link&creator=38643666
## Référence API

### Créer un produit
- **Méthode**: `POST`
- **URL**: `http://www.localhost:5000/api/products`
- **Body**: `raw` → `JSON`

```json
{
        "productName": "Clavier RGB",
        "price": 55000,
        "stockStatus": "pas en stock"
}
```
## Référence API

### Obtenir tous les produits
- **Méthode**: `GET`
- **URL**: `http://www.localhost:5000/api/products`
- **Réponse réussie**: `200 OK`

**Exemple de réponse :**
```json
[
    {
        "_id": "68833637f58674aa0a4c9ec8",
        "productName": "Clavier mécanique RGB",
        "price": 60000,
        "stockStatus": "en stock"
    },
    {
        "_id": "6883594dbeaddfe9b66762d8",
        "productName": "Clavier RGB",
        "price": 55000,
        "stockStatus": "pas en stock"
    }
]
```
### Obtenir  produit par son ID
- **Méthode**: `GET`
- **URL**: `/api/products/:id`
- **Réponse réussie**: `200 OK`
<img width="755" height="510" alt="Capture d’écran du 2025-07-28 13-12-08" src="https://github.com/user-attachments/assets/c4b89071-e679-426a-b6f7-4ee2194fef82" />

### Supprimer un produit par son ID
- **Méthode**: `DELETE`
- **URL**: `/api/products/:id`
- **Réponse réussie**: `200 OK`
<img width="835" height="465" alt="Capture d’écran du 2025-07-28 13-14-15" src="https://github.com/user-attachments/assets/a75457d4-9855-4bf6-b7c7-f190b76c6ee3" />




