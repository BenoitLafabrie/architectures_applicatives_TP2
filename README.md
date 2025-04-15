# Application de Liste de Tâches Évoluée

Cette application permet de gérer une liste de tâches avec des fonctionnalités avancées telles que le regroupement par catégories et l'affichage des tâches avec des couleurs spécifiques en fonction de leur catégorie.

## Fonctionnalités

- **Ajout de tâches** : Ajoutez des tâches avec une description et une catégorie.
- **Catégories** : Regroupez les tâches par catégories (travail, maison, divers).
- **Affichage coloré** : Affichez les tâches avec une couleur spécifique en fonction de leur catégorie.
- **Singleton** : Utilisation du pattern Singleton pour garantir une seule instance du modèle de tâches.
- **Héritage et abstraction** : Utilisation de l'héritage et de l'abstraction pour gérer les rendus spécifiques des tâches.

## Structure du Projet

Le projet est organisé en utilisant le modèle MVC (Model-View-Controller) et comprend les fichiers suivants :

- `index.html` : Page principale de l'application.
- `style.css` : Fichier de style pour la mise en forme de la page.
- `model.js` : Modèle représentant la structure des tâches et gérant la logique métier.
- `view.js` : Vue affichant la liste des tâches et le formulaire d'ajout.
- `controller.js` : Contrôleur gérant les interactions entre le modèle et la vue.

## Installation

1. Clonez le repository :
   ```bash
   git clone <URL_DU_REPOSITORY>
   ```
2. Ouvrez `index.html` dans un navigateur web.

## Utilisation

1. Ajout de tâches : Utilisez le formulaire pour ajouter une nouvelle tâche. Entrez une description et sélectionnez une catégorie (travail, maison, divers).

2.Affichage des tâches : Les tâches ajoutées seront affichées dans la liste avec une couleur spécifique en fonction de leur catégorie.

## Technologies Utilisées

HTML : Structure de la page.
CSS : Mise en forme de la page.
JavaScript : Logique de l'application (modèle, vue, contrôleur).
