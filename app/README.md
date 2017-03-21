# Code Generator: ijdoc2js
node.js app to automatically generate template codes for tijapi fromt the IMAGEJ API Documentation

## 1. Principle

The tool **ijdoc2js** (_ImageJ Documentation to JavaScript_) automatically creates the skeleton of JS code (name of functions/methods, documentation, etc.) from the HTML documentation of ImageJ.

## 2. Algorithm

**ijdoc2js** read the config file contains in **settings.js** which contains all the paths (url) of the classes used by ImageJ and a _flag_ (**process**) allowing to generate (or not) the code skeleton depending of its state:

- 0: Closed. Certaines classes ne présentent aucun intérêt pour tijapi.
- 1: Generation in progress. Cela permet de tester le code de la "moulinette". On peut le relancer plusieurs fois si on n'est pas content du résultat. En production, ne devrait être relancé qu'une seule fois.
- 2: The code is **définitively** created (and over) and is ready for implementation. At this point, il n'est plus possible de re-générer du code et d'ailleurs, il ne faut pas remettre le _flag_ à 1 car une nouvelle génération de code écraserait le code écrit par le développeur pour l'implantation des méthodes.

⊕ This system allows to create code _à la carte_ depending of the needs rather than creating hundreds of classes (exactly 331) whose most of them are useless in tijapi.
⊖ The disadvantage of this method is the modification of the file **settings.js** by hand ... et donc de ne pas oublier de remettre le _flag_ à l'état 2 quand on est satisfait de la création automatique de code.


