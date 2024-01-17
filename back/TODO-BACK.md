# A FAIRE:

## Tâche du jour:
- faire liens url images de la bdd 
- middlewarre de sécurisation des routes (regarder pour le jeton: `jsonwebtoken`)

## TODO:
- pb connexion pour connexion avec un pseudo non valide (erreur car ne peut lire le bcrypt.compare(password, user[0].password) voir si on peut chagner ça avec les if et vérification des username avant le hash)

- Pour l'admin:  
    - routes CRUD articles   
    - routes RUD users   
    - routes CRUD categories   
    - routes CRUD pictures   
    - routes CRUD comments   (verifier et confirmer le commentaire et le mettre en ligne)
    - routes CRUD role   
    - routes CRUD articles_categories   
   
- Pour membre:
  - routes create commentaires
  - ajout d'infos supplémentaires
  - changement thème (light, dark)
  - changement password
  

## DONE:
- MCD, MLD, MPD (images)
- connexion BDD, mysql2
- inscription et connexion
- cors intégré
- lien vers react vite
- afffichage de route articles et users
