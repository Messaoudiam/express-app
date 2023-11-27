/* Étape 1 : Crée un fichier javascript pour contenir tout le code de ton application. Appelons-le app.js. Dans ce fichier, importe express : */
const express = require('express');


/*Étape 2 : Crée une application en appelant le module express. La convention est de l'appeler app : */
const app = express();


/* Étape 3 : Crée une constante pour stocker le numéro du port sur lequel ton serveur sera disponible.
Pour cet exemple, utilisons le port 5000. */
const port = 5000;


/*Quand quelqu'un fait une requête GET vers la racine de notre serveur, nous voulons envoyer comme réponse "Welcome to Express".
Donc en partant de app.METHOD(PATH, HANDLER) :
app.get("/", (req, res) => {
    res.send("Welcome to Express");
  });*/

const handler = (req, res) => {};
app.get("/search", handler);


/* Étape 4 : Maintenant, tu dois écouter les connexions entrantes. Pour cela, utilise app.listen. */
app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });


  /*Étape 5 : Utilise ton terminal (assure-toi que tu es dans le bon répertoire) et exécute node app.js

➡️ Tu devrais voir Server is listening on 5000. */


/*Étape 6 : Maintenant, va dans ton navigateur et accède à localhost:5000 ; Tu devrais voir "Cannot GET /".
➡️ Cette erreur est normale, nous avons créé le serveur, mais nous n'avons pas encore de routes. Tu vas devoir ajouter plus de code dans ton application et recharger le serveur (ce qui signifie l'arrêter en utilisant Ctrl+C et exécuter à nouveau la commande node).*/