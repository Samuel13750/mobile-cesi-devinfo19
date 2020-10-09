 
 # 20201009

 ## Obtention de la liste des articles.
 {this.state.list.map(e => <Text style={styles.tdl2}>{e}</Text>)}


 ## Reste à faire
 - Lors de onPress : valider le TextIntput.
                     "Vider" le texte du textInput.
- Supprimer un article par slide -> suppression.
- Sauvegarde de la list avec asyncStorage


**Evolutions**
- Ajouter une base de données.
- Ajouter des images à l'article.
- Créer des rayons pour chacun des articles.
- Rechercher un magasin à proximité.
- Saisie de l'article commande vocal. "Ajouter" - Nom de l'article - "A la liste des courses
- Avoir la possibilité de plusieurs listes de courses en fonction d'une personne / d'un type de courses - alimentaire / bricolage / jardinage...
 
 
 
 # 20201008
 
 ## **mise en forme**
http://paletton.com/#uid=10h0u0kltl6uL0Xq4aYgSvjcmXT

Récupération de la valeur du inputText dans article.
Le tableau se charge des valeurs saisie dans inputText.

 
 # 20201007

## **création du trigramme**
skc com.skc.app
doc https://medium.com/@devesu/how-to-change-bundle-identifier-of-ios-app-and-package-name-of-android-app-within-react-native-app-4fbdd6679aa2


## **commit du projet dans le gitub**
depuis le dossier racine du projet
git init
git remote add origin https://github.com/Samuel13750/mobile-cesi-devinfo19.git
git add .
git commit -m "commit du 07/10/2020"
git push -u origin master

## **initialisation du projet**
liste des courses nommée app_lc
npx react-native init app_lc --template react-native-template-typescript
