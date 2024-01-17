# Création d'un blog en React et Nodejs

## 1-La base de données:


## 2-La maquette:


## 3-Mise en place du projet node:
1- Création du dossier "exo-final" .   
2- Dans ce dossier, créer un dossier: `back`.   
3- A la racine du projet, créer un fichier .gitignore, pour que gitHub ignore les fichiers et dossiers trop sensibles.

### **- Dans le dossier `back`:**

- Installation dans le terminal du vscode
```bash
npm init -y
npm install nodemon -D
npm i dotenv mysql2 express bcrypt cors
```
- Dans le fichier `package.json`:   
On va ajouter ceci: 
```json
  "main": "src/app.js",
  "type": "module",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
```
- Ensuite on créé l'arborescence du dossier `back`.  
![](./back/public/assets/images/arborescence.png)
    

## Dans le dossier client 
on met un .env et un .gitignore