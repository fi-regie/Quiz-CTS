# 🎯 Quiz CTS - Application Interactive

Application web interactive de quiz sur la réglementation CTS (Chapiteaux, Tentes et Structures) pour les professionnels du spectacle vivant.

## 🚀 Démo en Ligne

**Accédez à l'application** : [https://fi-regie.github.io/Quiz-CTS-Pro/](https://fi-regie.github.io/Quiz-CTS-Pro/)

## 📋 Présentation

Quiz CTS Pro est une application web interactive conçue pour tester et améliorer les connaissances des professionnels du spectacle vivant sur la réglementation CTS. Avec plus de 40 questions triées par niveau et thème, cet outil pédagogique permet une montée en compétence progressive.

## ✨ Fonctionnalités Principales

### 🎮 **Expérience Quiz Interactive**
- **3 niveaux de difficulté** (Étudiant → Professionnel → Expert)
- **4 thèmes couverts** (Généralités, Construction, Électricité, Sécurité)
- **Questions configurables** (10 à 40 questions par session)
- **Mélange aléatoire** des questions pour éviter la routine

### 📊 **Interface Professionnelle**
- **Tableau de bord statistique** en temps réel
- **Barre de progression** visuelle
- **Design responsive** adapté à tous les écrans
- **Navigation clavier** complète (touches 1-4, flèches)

### 🧠 **Outils Pédagogiques**
- **Indices contextuels** pour chaque question
- **Explications détaillées** avec références réglementaires
- **Schémas et aides visuelles** intégrés
- **Analyse de performance** post-quiz
- **Plan d'amélioration personnalisé**

### ⚡ **Fonctionnalités Avancées**
- **Timer intégré** pour suivre le temps passé
- **Navigation libre** entre les questions
- **Réponses immédiates** avec correction
- **Sauvegarde de progression** automatique
- **Mode révision** avec réponses affichées

## 🎯 Objectifs Pédagogiques

### Pour les Étudiants
- Acquérir les bases de la réglementation CTS
- Comprendre les articles fondamentaux (CTS 1 à 10)
- Préparer les certifications initiales

### Pour les Professionnels
- Actualiser les connaissances réglementaires
- Approfondir les cas pratiques complexes
- Se préparer aux commissions de sécurité

### Pour les Experts
- Maîtriser les subtilités réglementaires
- Analyser les situations exceptionnelles
- Former les équipes en interne

## 🛠️ Installation et Utilisation

### Option 1 : Utilisation en Ligne (Recommandé)
1. **Accédez à** : [https://fi-regie.github.io/Quiz-CTS-Pro/](https://fi-regie.github.io/Quiz-CTS-Pro/)
2. **Configurez** votre quiz (niveau, thèmes, nombre de questions)
3. **Commencez** l'entraînement

### Option 2 : Utilisation Locale
```bash
# 1. Téléchargez les fichiers
git clone https://github.com/fi-regie/Quiz-CTS-Pro.git

# 2. Ouvrez le dossier
cd Quiz-CTS-Pro

# 3. Structure des fichiers
Quiz-CTS-Pro/
├── index.html      	# Interface principale
├── style.css      	# Styles et mise en page
└── script.js      	# Logique et questions

# 4. Ouvrez index.html dans votre navigateur
```

### Option 3 : Dépôt GitHub
1. **Visitez** : [https://github.com/fi-regie/Quiz-CTS-Pro](https://github.com/fi-regie/Quiz-CTS-Pro)
2. **Clonez** ou **téléchargez** le dépôt
3. **Exécutez** localement

## 📚 Thèmes Couverts

### 🏗️ **Généralités CTS**
- Champ d'application (superficies, exclusions)
- Registre de sécurité et procédures
- Vérifications périodiques
- Implantations prolongées

### 🔨 **Construction et Stabilité**
- Calculs de résistance au vent
- Catégories de matériaux (M0 à M4)
- Distances de sécurité
- Numéros d'identification

### ⚡ **Installations Électriques**
- Normes applicables (NF C 15-100)
- Protection différentielle
- Hauteur des appareils d'éclairage
- Circuits d'éclairage normal et de sécurité

### 🚨 **Sécurité Incendie et Évacuation**
- Extincteurs obligatoires
- Systèmes d'alarme
- Agents de sécurité incendie
- Éclairage d'ambiance et de sécurité

## 🎮 Comment Utiliser le Quiz

### Étape 1 : Configuration
1. **Sélectionnez le nombre de questions** (10, 20, 30 ou 40)
2. **Choisissez votre niveau** (Étudiant, Professionnel, Expert)
3. **Sélectionnez les thèmes** (un ou plusieurs)
4. **Cliquez sur "Démarrer le quiz"**

### Étape 2 : Répondre aux Questions
- **Lisez attentivement** chaque question
- **Sélectionnez une réponse** parmi les 4 options
- **Utilisez les outils d'aide** si nécessaire :
  - `💡 Indice` : Donne une piste
  - `📐 Schéma` : Affiche une aide visuelle
  - `✅ Voir réponse` : Montre la réponse correcte

### Étape 3 : Navigation
- **Flèche gauche** : Question précédente
- **Flèche droite** : Question suivante
- **Touches 1-4** : Sélection rapide des réponses
- **Entrée** : Question suivante / Terminer

### Étape 4 : Résultats
- **Score final** avec pourcentage
- **Analyse par thème**
- **Conseils personnalisés**
- **Option "Nouveau quiz"**

## 📊 Niveaux de Difficulté

### 🎓 **Niveau Étudiant**
- **Public** : Élèves, stagiaires, nouveaux entrants
- **Objectif** : Assimiler les bases
- **Contenu** : Questions fondamentales, définitions
- **Seuil de réussite** : 60% minimum

### 👷 **Niveau Professionnel**
- **Public** : Régisseurs, exploitants, techniciens
- **Objectif** : Appliquer en situation réelle
- **Contenu** : Cas pratiques, procédures opérationnelles
- **Seuil de réussite** : 70% minimum

### 🧠 **Niveau Expert**
- **Public** : Formateurs, consultants, commissions
- **Objectif** : Maîtriser les subtilités
- **Contenu** : Situations complexes, jurisprudences
- **Seuil de réussite** : 75% minimum

## 🔧 Fonctionnalités Techniques

### Architecture
```javascript
// Structure des questions
{
	id: 1,
	question: "Texte de la question",
	answers: ["A", "B", "C", "D"],
	correctAnswer: 0,
	level: "student|pro|expert",
	theme: "general|construction|electricity|safety",
	hint: "Indice contextuel",
	explanation: "Explication détaillée",
	reference: "Référence réglementaire",
	visualAid: "HTML d'aide visuelle"
}
```

### Technologies Utilisées
- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript Vanilla** : Pas de dépendances externes
- **Responsive Design** : Flexbox et Grid CSS

### Compatibilité
- ✅ **Chrome** 60+
- ✅ **Firefox** 60+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ✅ **Mobile** (iOS/Android)

## 📖 Références Réglementaires

Le quiz couvre l'ensemble de la réglementation CTS :
- **Arrêté du 25 juin 1980** modifié
- **Articles CTS 1 à 53**
- **Sous-chapitres I à V**
- **Normes associées** (NF C 15-100, NF EN 60598-2-20, etc.)

## 🚀 Pour les Formateurs

### Utilisation en Formation
1. **Évaluation initiale** : Test des connaissances de base
2. **Entraînement thématique** : Focus sur des thèmes spécifiques
3. **Préparation aux examens** : Simulation d'épreuves
4. **Évaluation continue** : Suivi des progrès

### Création de Sessions
- **Quiz rapide** : 10 questions pour une vérification rapide
- **Session complète** : 30 questions pour une évaluation approfondie
- **Focus thématique** : Questions sur un seul thème
- **Mix de niveaux** : Progression étudiante → expert

## 📈 Avantages Pédagogiques

### Pour les Apprenants
- **Auto-évaluation** immédiate
- **Apprentissage progressif**
- **Mémorisation active**
- **Identification des lacunes**

### Pour les Organismes de Formation
- **Outil complémentaire** aux cours théoriques
- **Suivi des progrès** des stagiaires
- **Réduction du temps de correction**
- **Standardisation des évaluations**

## 🔄 Mises à Jour

### Version 1.0 (Actuelle)
- 40 questions réparties sur 4 thèmes
- 3 niveaux de difficulté
- Interface complète avec statistiques
- Export des résultats

### Versions Futures (Planifiées)
- **Base de données élargie** (80+ questions)
- **Mode examen chronométré**
- **Certificats de réussite**
- **Tableau des scores**
- **Questions par images/schémas**

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### Ajouter des Questions
1. **Forkez** le dépôt
2. **Ajoutez** de nouvelles questions dans `script.js`
3. **Respectez** le format existant
4. **Soumettez** une Pull Request

### Format des Questions
```javascript
{
	id: 41, // Numéro séquentiel
	question: "Votre nouvelle question ?",
	answers: [
    	"Réponse A",
    	"Réponse B",
    	"Réponse C",
    	"Réponse D"
	],
	correctAnswer: 0, // Index de la réponse correcte
	level: "student", // ou "pro" ou "expert"
	theme: "general", // ou "construction", "electricity", "safety"
	hint: "Article CTS X, paragraphe Y",
	explanation: "Explication détaillée...",
	reference: "Référence exacte...",
	visualAid: "" // Optionnel
}
```

### Standards de Contribution
- Questions basées sur la réglementation officielle
- Explications claires et référencées
- Validation des réponses par des experts
- Respect du niveau de difficulté annoncé

## 📄 Licence

Ce projet est distribué sous licence libre. Voir le fichier `LICENSE` pour plus de détails.

### Droits d'Utilisation
- ✅ **Usage personnel et professionnel**
- ✅ **Intégration dans des formations**
- ✅ **Modification et adaptation**
- ✅ **Distribution non commerciale**

### Restrictions
- ❌ **Usage commercial sans autorisation**
- ❌ **Revendication de paternité**
- ❌ **Modification des références réglementaires**

## 📞 Support et Contact

### Pour les Questions Techniques
- **Dépôt GitHub** : [https://github.com/fi-regie/Quiz-CTS-Pro](https://github.com/fi-regie/Quiz-CTS-Pro)
- **Issues** : Signalez les bugs et suggestions
- **Pull Requests** : Proposez des améliorations

### Pour le Contenu Réglementaire
- **Référence officielle** : [Légifrance - CTS](https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000290033/)
- **Mise à jour** : Consultez régulièrement les modifications

### Contact Direct
- **Email** : philippe.potier-regie@proton.me
- **Sujet** : [Quiz CTS Pro] - Votre question

## ⚠️ Avertissements Importants

### Usage Pédagogique
Cette application est **un outil pédagogique** et ne se substitue pas :
- Aux **textes officiels** publiés au Journal Officiel
- À l'**avis d'experts** certifiés
- Aux **commissions de sécurité** compétentes
- À la **jurisprudence** en vigueur

### Responsabilité
- **Vérifiez toujours** les références réglementaires
- **Consultez les textes officiels** pour les applications concrètes
- **Formez-vous régulièrement** sur les évolutions réglementaires

### Mises à Jour Réglementaires
La réglementation CTS évolue régulièrement. Pour être certain des dispositions en vigueur :
1. Consultez le **Journal Officiel**
2. Vérifiez les **derniers arrêtés**
3. Contactez les **services compétents**

## 🙏 Remerciements

### Contributeurs
- **Philippe Potier** : Conception et développement
- **La communauté des régisseurs** : Retours et validation
- **Les testeurs bêta** : Amélioration de l'expérience utilisateur

### Ressources
- **Ministère de la Culture** : Documentation réglementaire
- **Légifrance** : Accès aux textes officiels
- **Communauté open source** : Inspiration et outils

## 📊 Statistiques du Quiz

### Données Actuelles
- **40 questions** disponibles
- **4 thèmes** couverts
- **3 niveaux** de difficulté
- **100%** des articles fondamentaux couverts

### Objectifs de Développement
- **80 questions** d'ici fin d'année
- **Nouveaux thèmes** (accessibilité, environnement)
- **Mode hors ligne** complet
- **Application mobile** native

## 🔗 Liens Utiles

### Réglementation
- 📚 [Réglementation CTS complète](https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000290033/)
- 📖 [Journal Officiel](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000290033)

### Applications Connexes
- 🏗️ [Simulateur Réglementation ERP](https://fi-regie.github.io/Simulateur-Reglement-Securite-ERP/)
- 📋 [Consultation CTS](https://fi-regie.github.io/reglementation-CTS-/)

### Formation
- 🎓 [Formations réglementaires](https://www.culture.gouv.fr/)
- 📝 [Certifications sécurité](https://www.interieur.gouv.fr/)

---

**Dernière mise à jour** : Novembre 2024  
**Version** : 1.0  
**Contact** : philippe.potier-regie@proton.me  

*Quiz CTS Pro - Par les professionnels, pour les professionnels* 🎭🔧
