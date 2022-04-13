# Students

Ce projet a ete fait par  

- Amine EL Mehdi
- Hamrani Khaled
- Aboubakar-Siriki Diakite

## Presentation

Ce projet a pour but d'inscrire un étudiant et trier les étudiants dans l'un des 6 groupes, au début, un étudiant récemment inscrit est automatiquement inscrit dans aucun groupe (groupe 0 contient ces étudiants), ensuite l'utilisateur a le choix de choisir le groupe lequel cet étudiant peut-être inscrit dedans.

## Structure

Ce projet est un site du full-stack, pour cela, on a choisi de séparer les cotes client et cote serveur en créant deux dossiers:

- Dossier **client** : Ce dossier contient tous les fichiers et components génères par `Angular`, qui permet de gérer la page d'accueil, page étudiant (liste des étudiants) et page groupe (liste des groupes avec les étudiants qui sont inscrits à ce groupe), et aussi envoyer les requêtes vers le serveur.

- Dossier **serveur**: Ce dossier contient une structure generes par `ExpressJs` qui est un API permet de génerer une structure de gestion de requêtes reçues par le client et ensuite envoyer une réponse, utilisant pour tout cela `NodeJs`.

- Base de données: Au niveau de base donnée, nous avons utilisé `MongoDB` qui est parfait pour gerer les données des etudiants et marche bien avec `NodeJS` grace à `mongoose`.

## Utilisation

Pour utiliser et tester ce projet il faut :

1) Avoir prealablement une base de donnée **Mongodb**, il faut qu'elle soit installé, ensuite vous allez creer un dossier vide pour mettre les donnees, puis vous executez `mongod --dbpath data` ou data est le nom du dossier lequel est notre base donnée (puisque le stockage et le fonctionnement du site est tout local).

2) **Cote client** : Au niveau du cote client, il faut d'abord installer les dépendances necessaires, pour cela `npm install`, ensuite, vous tapez `npm run build` , cette derniere va construire une version de production du cote client.

>N.B): Si vous voulez une version de developpement du cote client, vous devrez effacer le flag `--prod` qui se trouve dans `package.json` du dossier client (ligne 7).

3) **Cote serveur** : Au niveau de serveur, il faut d'abord installer les dépendances necessaires en tapant `npm install`, ensuite, la commande `nodemon`, cela va lancer le cote serveur de projet dans l'adresee [localhost:3000](http://localhost:3000).

