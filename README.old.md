# ReacTodo

# Créer une application en React

Plusieurs approches sont possibles (https://fr.legacy.reactjs.org/docs/getting-started.html)
Possibilité de passer par le tutoriel (https://fr.legacy.reactjs.org/tutorial/tutorial.html)

# Approche NPX
En utilisant la commande simple

npx create-react-app hello-app \
cd hello-app \
npm install && npm start

# Sujet :

## Idée / Marché = Quelles fonctionnalités ?

Ajouter / Supprimer une tache
Afficher liste / (Possibilité de filtrer)
Valider une tache
Changer ordre
Sauvegarder pour plus tard
Formulaire édition / ajout picto
(Date limite + Information si dépassé)

## Implémentation technique (= Attendus du projet 1) :

Projet personnel à rendre pour le Dimanche 24 mars minuit, en m'envoyant par mail (laurent.provenat@univ-amu.fr) le lien Github de votre projet.

- La liste des Taches (avec ordre) est stockée dans le localStorage ; elle est chargée au lancement de l'application
- Chaque Tache est composée des champs suivants : Title (string), isChecked (boolean)
- L'application est composée d'un Header et d'un Footer
- Le Header affiche la progression, à savoir le nombre de Taches restantes (isChecked = false) Vs le nombre total.
- Le Footer contient un input pour la recherche rapide et un bouton pour ajouter une tache
- La recherche rapide masque les taches qui ne contiennent pas ces caractères dans le champ Title
- Le bouton ajouter affiche une pop-up (Modal) avec un champ texte et un bouton pour valider l'ajout ; la popup se ferme après ajout dans la liste des Taches
- Pour chaque Tache, il est possible de changer l'ordre ; une flèche vers le haut permet d'inverser l'ordre avec la précédente ; une flèche vers le bas permet d'inverser l'ordre avec la suivante
- Pour chaque Tache, une case à cocher (située à gauche) permet de valider la tache en cours, et donc de passer son isChecked à true

## Options : 

- La Tache contient aussi une Category (parmi liste de pictogrammes possibles)
- La recherche rapide n'est active qu'à partir de 3 caractères ; dans ce cas, la progression du Header est opacifiée
- La liste des Taches est sauvegardée manuellement (bouton en bas à gauche) ; lors du chargement de l'application, l'utilisateur est invité à charger les taches depuis le LocalStorage ou repartir de zéro

## Conseils :

- Privilégiez YARN à NPM => "yarn add ...", "yarn install && yarn run start"
- Si problème de build, supprimez le dossier 'node_modules'
- Initialisez votre dépot GIT au plus vite ; n'oubliez pas d'ajouter le dossier "node_modules" dans votre fichier '.gitignore'
- Faites des commits réguliers sur des versions stables
- Pensez SOLID et donc ne négligez pas la conception des classes avec hierarchie et passage des paramètres
- A mettre dans le LocalStorage (pensez aux crochets autour des valeurs) :

var tasks = "title":"1.Idée","isChecked":true},{"title":"2.Marché","isChecked":true},{"title":"3.Wireframe","isChecked":true},{"title":"4.Design","isChecked":true},{"title":"5.Landingpage","isChecked":true},{"title":"6.Développement","isChecked":false},{"title":"7.Publish","isChecked":false},{"title":"8.Pub","isChecked":false},{"title":"9.Feedback","isChecked":false; localStorage.setItem('tasks',JSON.stringify(tasks));

var tasks = [
  {"title":"1.Idée","isChecked":true},
  {"title":"2.Marché","isChecked":true},
  {"title":"3.Wireframe","isChecked":true},
  {"title":"4.Design","isChecked":true},
  {"title":"5.Landingpage","isChecked":true},
  {"title":"6.Développement","isChecked":false},
  {"title":"7.Publish","isChecked":false},
  {"title":"8.Pub","isChecked":false},
  {"title":"9.Feedback","isChecked":false}
];

localStorage.setItem('tasks',JSON.stringify(tasks));