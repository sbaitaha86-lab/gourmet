# 🍽️ Digital Menu & Ordering Platform (MERN Stack)

## 📌 Description du projet

Ce projet consiste à développer une **application web de menus digitaux pour restaurants**, basée sur la stack **MERN (MongoDB, Express, React, Node.js)**.

L’objectif est de permettre aux restaurants de :

* Créer et gérer leurs menus en ligne
* Générer un **QR Code unique** à placer sur chaque table
* Permettre aux clients de **scanner le QR code**, consulter le menu et **passer commande directement depuis leur téléphone**
* Centraliser et gérer toutes les commandes côté restaurateur (prix, statut, détails)

L’application vise à **digitaliser l’expérience client**, réduire les coûts d’impression et améliorer la rapidité et la précision des commandes.

---

## 🧠 Fonctionnalités principales

### 🔐 Côté Admin (Plateforme principale)

* Authentification sécurisée (Admin)
* Création et gestion des restaurants
* Ajout, modification et suppression des menus
* Génération automatique de QR Codes par restaurant / table
* Visualisation globale des commandes
* Gestion des utilisateurs restaurateurs

### 🏪 Côté Restaurateur

* Tableau de bord dédié
* Gestion du menu (catégories, plats, prix, descriptions, images)
* Réception des commandes en temps réel
* Suivi des commandes (en attente, en cours, terminée)
* Visualisation du chiffre d’affaires

### 📱 Côté Client (via QR Code)

* Accès instantané au menu sans inscription
* Interface mobile-first
* Consultation des catégories et plats
* Ajout au panier
* Passage de commande
* Récapitulatif de commande avec total

---

## 🛠️ Stack technique

### Front-end

* **React.js**
* React Router
* Axios
* CSS moderne
* Responsive Design (Mobile First)

### Back-end

* **Node.js**
* **Express.js**
* JWT pour l’authentification
* REST API

### Base de données

* **MongoDB**
* Mongoose (ODM)

### Autres outils

* QR Code Generator
* Cloud Storage pour images (ex: Cloudinary)
* Git & GitHub

---

## 🗂️ Architecture du projet

```
root/
│
├── client/                # Front-end React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── App.js
│
├── server/                # Back-end Node.js / Express
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── README.md
└── package.json
```

---

## 🧩 Modèles de données (exemple)

### Restaurant

* name
* address
* logo
* qrCode
* createdAt

### Menu

* restaurantId
* category
* items[]

### Item

* name
* description
* price
* image

### Order

* restaurantId
* tableNumber
* items
* totalPrice
* status
* createdAt

---

## 🚀 Objectifs du projet

* Digitaliser les menus des restaurants
* Améliorer l’expérience client
* Optimiser la gestion des commandes
* Créer une solution scalable pour plusieurs restaurants
* Base solide pour une future version SaaS

---

## 🔮 Évolutions futures possibles

* Paiement en ligne (Stripe, PayPal)
* Notifications en temps réel (WebSockets)
* Gestion multi-tables
* Statistiques avancées
* Application mobile (React Native)
* Mode multi-langue

---

## 🧑‍💻 Auteur

Projet développé avec la stack **MERN** dans une logique professionnelle et scalable.

---

## 📄 Licence

Ce projet est sous licence MIT.
