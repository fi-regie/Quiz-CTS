// BASE DE DONNÉES COMPLÈTE DES QUESTIONS (40 QUESTIONS)
const allQuestions = [
    // THÈME : GÉNÉRALITÉS
    {
        id: 1,
        question: "À partir de quelle superficie un établissement CTS est-il soumis à la réglementation ?",
        answers: ["À partir de 16 m²", "À partir de 25 m²", "À partir de 50 m²", "À partir de 100 m²"],
        correctAnswer: 0,
        level: "student",
        theme: "general",
        hint: "Consultez l'article CTS 1, paragraphe 2",
        explanation: "Selon l'article CTS 1 §2, la réglementation s'applique aux établissements destinés à être clos, possédant une couverture souple, d'une superficie supérieure ou égale à 16 m².",
        reference: "Article CTS 1 §2 : 'Les dispositions du présent règlement s'appliquent aux établissements [...] d'une superficie supérieure ou égale à 16 m².'",
        visualAid: `<div class="schema"><strong>📐 Surface minimale : 16 m²</strong><br>• Chapiteaux, tentes, structures<br>• Établissements itinérants<br>• Couverture souple<br>• Destinés à être clos</div><div class="example"><strong>📝 Exemple :</strong><br>Une tente de 4m x 4m = 16 m² → Règlement applicable<br>Une tente de 3m x 3m = 9 m² → Règlement non applicable</div>`
    },
    {
        id: 2,
        question: "Quelle est la distance minimale entre deux établissements CTS pour qu'ils soient considérés comme distincts ?",
        answers: ["3 mètres", "5 mètres", "8 mètres", "10 mètres"],
        correctAnswer: 2,
        level: "student",
        theme: "general",
        hint: "Article CTS 1, paragraphe 6",
        explanation: "L'article CTS 1 §6 précise que les établissements distants de 8 m au moins sont considérés comme distincts.",
        reference: "Article CTS 1 §6 : 'Les établissements distants entre eux de 8 m au moins sont considérés comme autant d'établissements distincts.'",
        visualAid: `<div class="schema"><strong>📏 Distance entre établissements :</strong><br>• 8 m minimum pour établissements distincts<br>• 5 m pour établissements de 16-50 m²<br>• Mesuré entre les enveloppes</div>`
    },
    {
        id: 3,
        question: "Qui délivre le registre de sécurité d'un établissement CTS ?",
        answers: ["Le maire de la commune", "Le préfet du département", "Le fabricant", "L'organisme de vérification technique"],
        correctAnswer: 1,
        level: "pro",
        theme: "general",
        hint: "Article CTS 3, paragraphe 1",
        explanation: "Le registre de sécurité est délivré par le préfet du département (ou le préfet de Police pour Paris) après avis de la commission consultative départementale.",
        reference: "Article CTS 3 §1 : 'Le registre de sécurité est délivré par le préfet du département [...] après avis de la commission consultative départementale de sécurité et d'accessibilité.'",
        visualAid: `<div class="schema"><strong>📋 Procédure d'obtention :</strong><br>1. Demande par le propriétaire/fabricant<br>2. Vérification par organisme agréé CTS<br>3. Transmission au préfet<br>4. Délivrance du registre</div>`
    },
    {
        id: 4,
        question: "Quels types d'établissements ne sont pas visés par la réglementation CTS ?",
        answers: ["Les chapiteaux de cirque", "Les campings et manèges forains", "Les structures gonflables", "Les tentes de réception"],
        correctAnswer: 1,
        level: "student",
        theme: "general",
        hint: "Article CTS 1, paragraphe 5",
        explanation: "L'article CTS 1 §5 exclut spécifiquement les campings et les manèges forains du champ d'application.",
        reference: "Article CTS 1 §5 : 'Les campings et les manèges forains ne sont pas visés par le présent type.'",
        visualAid: `<div class="schema"><strong>🚫 Exclusions :</strong><br>✅ Campings (règlement spécifique)<br>✅ Manèges forains<br>❌ Chapiteaux de cirque (inclus)<br>❌ Tentes événementielles (incluses)</div>`
    },
    {
        id: 5,
        question: "Pour les établissements de 16 à 50 m², quelles dispositions s'appliquent ?",
        answers: ["Toutes les dispositions du CTS", "Seules les dispositions de base", "Aucune disposition", "Uniquement les dispositions électriques"],
        correctAnswer: 1,
        level: "pro",
        theme: "general",
        hint: "Article CTS 1, paragraphe 3",
        explanation: "Ces établissements ne sont soumis qu'aux dispositions de base spécifiées à l'article CTS 1 §3.",
        reference: "Article CTS 1 §3 : 'Les établissements d'une superficie supérieure ou égale à 16 m² mais inférieure à 50 m² sont soumis aux seules dispositions des paragraphes 1 et 6 du présent article...'",
        visualAid: `<div class="schema"><strong>📊 Règlementation par superficie :</strong><br>• < 16 m² : Hors champ (sauf si cumul ≥ 16 m²)<br>• 16-50 m² : Dispositions de base<br>• ≥ 50 m² : Règlement complet</div>`
    },
    {
        id: 6,
        question: "Quelle pression dynamique de base doit être considérée pour le calcul de stabilité au vent ?",
        answers: ["0,25 KN/m²", "0,47 KN/m²", "0,75 KN/m²", "1,00 KN/m²"],
        correctAnswer: 1,
        level: "pro",
        theme: "construction",
        hint: "Article CTS 7, paragraphe 1",
        explanation: "L'article CTS 7 §1 impose une pression dynamique de base de 0,47 KN/m² correspondant à un vent normal.",
        reference: "Article CTS 7 §1 : 'Tous les établissements doivent être conçus et installés pour rester stables sous les effets simultanés d'un vent normal correspondant à une pression dynamique de base de 0,47 KN par mètre carré.'",
        visualAid: `<div class="schema"><strong>💨 Calcul de résistance au vent :</strong><br>Pression de base : 0,47 KN/m²<br>Coefficient dynamique : 1,25<br>Hauteur : prise en compte<br>Site : normal (ks = 1)</div><div class="example"><strong>📝 Exemple pour 100 m² :</strong><br>Force = 0,47 × 100 = 47 KN<br>≈ 4 700 kg de poussée au vent</div>`
    },
    {
        id: 7,
        question: "À quelle vitesse de vent faut-il évacuer le public d'un établissement CTS ?",
        answers: ["60 km/h", "80 km/h", "100 km/h", "120 km/h"],
        correctAnswer: 2,
        level: "pro",
        theme: "construction",
        hint: "Article CTS 7, paragraphe 2",
        explanation: "L'article CTS 7 §2 prévoit l'évacuation lorsque le vent dépasse 100 km/h.",
        reference: "Article CTS 7 §2 : 'L'établissement doit être évacué [...] si le vent normal dépasse 100 km/h.'",
        visualAid: `<div class="schema"><strong>🌪️ Critères d'évacuation :</strong><br>✅ Vent > 100 km/h<br>✅ Neige > 4 cm non déblayée<br>✅ Circonstances exceptionnelles<br>⚠️ Anémomètre obligatoire pour surveillance</div>`
    },
    {
        id: 8,
        question: "Quelle catégorie de matériaux est exigée pour la couverture des CTS ?",
        answers: ["M0", "M1", "M2", "M3"],
        correctAnswer: 2,
        level: "student",
        theme: "construction",
        hint: "Article CTS 8, paragraphe 2",
        explanation: "La couverture, la double couverture et la ceinture doivent être en matériaux de catégorie M2.",
        reference: "Article CTS 8 §2 : 'La couverture, la double couverture intérieure éventuelle et la ceinture de l'établissement doivent être réalisées en matériaux de catégorie M2.'",
        visualAid: `<div class="schema"><strong>🔥 Classification M2 :</strong><br>• Non inflammable<br>• Pas de gouttes enflammées<br>• Propagation limitée<br>• Marquage NF obligatoire</div><div class="example"><strong>✅ Matériaux acceptés :</strong><br>• Toiles polyester enduites PVC<br>• Membranes polyester/PVC<br>• Toiles classées M2 avec marquage</div>`
    },
    {
        id: 9,
        question: "Que doit-on faire des câbles de contreventement situés à moins de 2 mètres du sol ?",
        answers: ["Les supprimer", "Les signaler et les protéger", "Les peindre en rouge", "Les renforcer"],
        correctAnswer: 1,
        level: "pro",
        theme: "construction",
        hint: "Article CTS 8, paragraphe 4",
        explanation: "Les câbles à moins de 2 m doivent être protégés et signalés pour éviter les accidents.",
        reference: "Article CTS 8 §4 : 'Toutes dispositions doivent être prises pour que les câbles de contreventement situés à une hauteur inférieure à 2 mètres [...] ne puissent pas constituer un risque pour les personnes.'",
        visualAid: `<div class="schema"><strong>⚠️ Protection des câbles :</strong><br>Hauteur < 2 m → Protection obligatoire<br>Options :<br>• Gaines de protection<br>• Signalisation visible<br>• Balisage lumineux nocturne</div>`
    },
    {
        id: 10,
        question: "Quelle est la composition du numéro d'identification d'un CTS ?",
        answers: ["Uniquement le département", "Type, département, année et numéro de série", "Uniquement le type et l'année", "Le nom du propriétaire"],
        correctAnswer: 1,
        level: "expert",
        theme: "construction",
        hint: "Article CTS 9, paragraphe 1",
        explanation: "Le numéro comprend : lettre du type (C/T/S/SE), numéro de département, année et numéro de série.",
        reference: "Article CTS 9 §1 : 'Le numéro d'identification comprend : une lettre : C pour chapiteau, T pour tente, S pour structure et SE pour structure à étage ; 2 ou 3 chiffres correspondant au numéro du département ; 4 chiffres correspondant à l'année de délivrance ; 3 chiffres correspondant au numéro de série.'",
        visualAid: `<div class="schema"><strong>🔢 Format du numéro :</strong><br>S - 972 - 2009 - 002<br><br>S = Structure<br>972 = Martinique<br>2009 = Année<br>002 = Numéro de série</div>`
    },
    {
        id: 11,
        question: "Quelle norme doit respecter l'installation électrique d'un CTS ?",
        answers: ["NF C 14-100", "NF C 15-100", "NF C 16-100", "NF C 17-100"],
        correctAnswer: 1,
        level: "student",
        theme: "electricity",
        hint: "Article CTS 16, paragraphe 2",
        explanation: "Les installations doivent être conformes à la norme NF C 15-100.",
        reference: "Article CTS 16 §2 : 'Les installations électriques doivent être conformes aux normes homologuées les concernant et notamment à la norme NF C 15-100.'",
        visualAid: `<div class="schema"><strong>⚡ Norme NF C 15-100 :</strong><br>• Installations basse tension<br>• Protection différentielle obligatoire<br>• Schémas de liaison à la terre<br>• Dispositifs de protection</div>`
    },
    {
        id: 12,
        question: "Comment doivent être protégés les circuits des installations ajoutées par les utilisateurs ?",
        answers: ["Par des fusibles", "Par des disjoncteurs différentiels haute sensibilité", "Par des parafoudres", "Par des sectionneurs"],
        correctAnswer: 1,
        level: "pro",
        theme: "electricity",
        hint: "Article CTS 18, paragraphe 1",
        explanation: "Les circuits doivent être protégés par des dispositifs à courant différentiel-résiduel à haute sensibilité (30 mA).",
        reference: "Article CTS 18 §1 : 'Les circuits alimentés à partir de ces tableaux doivent être protégés dans tous les cas par des dispositifs de protection à courant différentiel-résiduel à haute sensibilité.'",
        visualAid: `<div class="schema"><strong>🔒 Protection différentielle :</strong><br>• Haute sensibilité : 30 mA<br>• Obligatoire pour tous circuits<br>• Dispositif type S pour amont<br>• Test mensuel recommandé</div>`
    },
    {
        id: 13,
        question: "À quelle hauteur minimale doivent être placés les appareils d'éclairage ?",
        answers: ["2,00 m", "2,25 m", "2,50 m", "2,75 m"],
        correctAnswer: 1,
        level: "student",
        theme: "electricity",
        hint: "Article CTS 21, paragraphe 1",
        explanation: "La partie inférieure des appareils d'éclairage doit être à au moins 2,25 m du sol.",
        reference: "Article CTS 21 §1 : 'Les appareils d'éclairage ne doivent pas faire obstacle à la circulation du public ; leur partie inférieure doit être placée à une hauteur minimale de 2,25 mètres au-dessus des emplacements accessibles au public.'",
        visualAid: `<div class="schema"><strong>📏 Hauteur des luminaires :</strong><br>┌───────────────┐<br>│               │<br>│   Luminaire   │<br>│               │<br>└───────────────┘<br>│<br>│ 2,25 m minimum<br>│<br>┌───────────────┐<br>│    Sol        │<br>└───────────────┘</div>`
    },
    {
        id: 14,
        question: "Combien de circuits minimum pour l'éclairage normal ?",
        answers: ["1 circuit", "2 circuits", "3 circuits", "4 circuits"],
        correctAnswer: 1,
        level: "pro",
        theme: "electricity",
        hint: "Article CTS 21, paragraphe 2",
        explanation: "L'éclairage normal doit être alimenté par au moins deux circuits protégés sélectivement.",
        reference: "Article CTS 21 §2 : 'L'installation de l'éclairage normal doit être alimentée par au moins deux circuits protégés sélectivement contre les surintensités et contre les contacts indirects.'",
        visualAid: `<div class="schema"><strong>🔌 Circuits d'éclairage :</strong><br>Tableau principal<br>├── Circuit 1 (Nord/Est)<br>└── Circuit 2 (Sud/Ouest)<br><br>• Sélectivité des protections<br>• Redondance en cas de panne</div>`
    },
    {
        id: 15,
        question: "Quelle norme pour les guirlandes électriques ?",
        answers: ["NF EN 60598-1", "NF EN 60598-2-20", "NF EN 61347", "NF EN 62031"],
        correctAnswer: 1,
        level: "expert",
        theme: "electricity",
        hint: "Article CTS 19, paragraphe 2",
        explanation: "Les guirlandes électriques doivent répondre à la norme NF EN 60598-2-20.",
        reference: "Article CTS 19 §2 : 'Les guirlandes électriques doivent répondre aux dispositions de la norme NF EN 60598-2-20.'",
        visualAid: `<div class="schema"><strong>✨ Norme guirlandes :</strong><br>NF EN 60598-2-20 :<br>• Protection contre les chocs<br>• Résistance mécanique<br>• Température admissible<br>• Marquage CE obligatoire</div>`
    },
    {
        id: 16,
        question: "Quel flux lumineux minimal pour l'éclairage d'ambiance ?",
        answers: ["3 lumens/m²", "5 lumens/m²", "7 lumens/m²", "10 lumens/m²"],
        correctAnswer: 1,
        level: "student",
        theme: "safety",
        hint: "Article CTS 22, paragraphe 2",
        explanation: "L'éclairage d'ambiance doit fournir 5 lumens/m² minimum sur la surface des circulations.",
        reference: "Article CTS 22 §2 : 'L'éclairage d'ambiance doit être basé sur un flux lumineux minimal de cinq lumens par mètre carré calculé en fonction de la surface des circulations.'",
        visualAid: `<div class="schema"><strong>💡 Calcul du flux lumineux :</strong><br>Surface circulation : 100 m²<br>Flux nécessaire : 5 × 100 = 500 lm<br><br>Exemple :<br>10 blocs de 50 lm = 500 lm</div>`
    },
    {
        id: 17,
        question: "Quelle autonomie minimale pour la source de sécurité ?",
        answers: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"],
        correctAnswer: 2,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 24, paragraphe 2",
        explanation: "La source de sécurité (groupe ou batteries) doit assurer une autonomie minimale d'une heure.",
        reference: "Article CTS 24 §2 : 'La source de sécurité (groupe électrogène ou source centralisée constituée d'une batterie d'accumulateurs) doit assurer une autonomie minimale d'une heure.'",
        visualAid: `<div class="schema"><strong>🔋 Autonomie sécurité :</strong><br>Durée : 1 heure minimum<br>Options :<br>• Groupes électrogènes<br>• Batteries d'accumulateurs<br>• Chargeur automatique</div>`
    },
    {
        id: 18,
        question: "Quel type d'extincteur est exigé à chaque sortie ?",
        answers: ["Extincteur à CO2 2 kg", "Extincteur à poudre 6 kg", "Extincteur à eau pulvérisée 6 L", "Extincteur à mousse 9 L"],
        correctAnswer: 2,
        level: "student",
        theme: "safety",
        hint: "Article CTS 26, paragraphe 1",
        explanation: "Un extincteur portatif à eau pulvérisée de 6 L minimum par sortie.",
        reference: "Article CTS 26 §1 : 'La défense contre l'incendie doit être assurée : par des extincteurs portatifs à eau pulvérisée, de 6 litres minimum, bien visibles, facilement accessibles et rapidement décrochables, à raison d'un appareil par sortie.'",
        visualAid: `<div class="schema"><strong>🧯 Extincteurs obligatoires :</strong><br>Par sortie : 1 extincteur eau 6L<br>Risques particuliers : extincteurs adaptés<br>Signalisation : visible<br>Accessibilité : facile</div><div class="example"><strong>✅ Installation :</strong><br>• Hauteur 1 à 1,30 m<br>• Pas d'obstacle devant<br>• Signalisation permanente<br>• Vérification annuelle</div>`
    },
    {
        id: 19,
        question: "À partir de quel effectif faut-il un système de sonorisation pour l'alarme ?",
        answers: ["300 personnes", "500 personnes", "700 personnes", "1000 personnes"],
        correctAnswer: 2,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 28, paragraphe 2",
        explanation: "Pour plus de 700 personnes, l'alarme doit être diffusée par un système de sonorisation permettant une diffusion verbale audible de tout point.",
        reference: "Article CTS 28 §2 : 'Dans les établissements recevant plus de 700 personnes, la diffusion de l'alarme générale doit être obtenue à partir d'un système de sonorisation permettant une diffusion verbale audible de tout point de l'établissement.'",
        visualAid: `<div class="schema"><strong>📢 Système d'alarme :</strong><br>< 700 personnes : moyen sonore simple<br>> 700 personnes : sonorisation obligatoire<br>Options :<br>• Système fixe avec secours<br>• Mégaphone autonome</div>`
    },
    {
        id: 20,
        question: "Combien d'agents de sécurité pour un établissement de 3000 personnes avec espace scénique ?",
        answers: ["1 agent", "2 agents", "3 agents", "4 agents"],
        correctAnswer: 2,
        level: "expert",
        theme: "safety",
        hint: "Article CTS 27, paragraphe 1-c",
        explanation: "Pour plus de 2500 personnes avec espace scénique : minimum 3 agents de sécurité incendie.",
        reference: "Article CTS 27 §1-c : 'Etablissements recevant plus de 2 500 personnes et comportant un espace scénique : par des agents de sécurité incendie fournis par l'organisateur avec un minimum de trois.'",
        visualAid: `<div class="schema"><strong>👷 Effectifs sécurité :</strong><br>• ≤ 2500 pers : 1-2 agents<br>• > 2500 pers sans scène : 2 agents min<br>• > 2500 pers avec scène : 3 agents min<br>• +1 agent par 2500 pers supplémentaires</div>`
    },
    // 20 questions supplémentaires pour atteindre 40
    {
        id: 21,
        question: "Quelle est la fréquence de la vérification périodique des établissements CTS ?",
        answers: ["Annuelle", "Tous les 2 ans", "Tous les 3 ans", "Tous les 5 ans"],
        correctAnswer: 1,
        level: "pro",
        theme: "general",
        hint: "Article CTS 34, paragraphe 1",
        explanation: "Vérification technique tous les 2 ans par un organisme agréé CTS.",
        reference: "Article CTS 34 §1 : 'Des vérifications techniques et documentaires sont effectuées tous les deux ans par un organisme agréé de vérification technique CTS.'",
        visualAid: null
    },
    {
        id: 22,
        question: "Quelle distance minimale entre un CTS et un bâtiment à risques particuliers ?",
        answers: ["4 mètres", "6 mètres", "8 mètres", "10 mètres"],
        correctAnswer: 2,
        level: "expert",
        theme: "construction",
        hint: "Article CTS 39",
        explanation: "Distance minimale de 8 mètres pour un établissement à risques particuliers.",
        reference: "Article CTS 39 : 'l'établissement doit être implanté à plus de : huit mètres d'un autre bâtiment ou d'une autre structure si l'un au moins des deux établissements est à risques particuliers.'",
        visualAid: null
    },
    {
        id: 23,
        question: "Quelle est la largeur minimale des circulations entre rangées de sièges ?",
        answers: ["0,90 m", "1,00 m", "1,20 m", "1,40 m"],
        correctAnswer: 2,
        level: "student",
        theme: "construction",
        hint: "Article CTS 11, paragraphe 2",
        explanation: "Les circulations doivent avoir une largeur minimale de 1,20 m.",
        reference: "Article CTS 11 §2 : 'Les sièges doivent être disposés de manière à former des ensembles desservis par des circulations ayant une largeur minimale de 1,20 mètre.'",
        visualAid: null
    },
    {
        id: 24,
        question: "Quelle catégorie de matériaux pour les décors scéniques ?",
        answers: ["M0", "M1", "M2", "M3"],
        correctAnswer: 1,
        level: "pro",
        theme: "construction",
        hint: "Article CTS 13, paragraphe 1",
        explanation: "Les décors pour aménagements scéniques doivent être en matériaux de catégorie M1.",
        reference: "Article CTS 13 §1 : 'Les décors pour aménagements scéniques doivent être réalisés en matériaux de catégorie M 1.'",
        visualAid: null
    },
    {
        id: 25,
        question: "Quelle est la capacité maximale de stockage de gaz par emplacement ?",
        answers: ["100 kg", "150 kg", "210 kg", "300 kg"],
        correctAnswer: 2,
        level: "expert",
        theme: "safety",
        hint: "Article CTS 15, paragraphe 5",
        explanation: "Le stockage est limité à 210 kg par emplacement, avec distance de 10 m entre emplacements.",
        reference: "Article CTS 15 §5 : 'Il doit être situé à une distance minimale de 3 mètres de l'établissement et il est limité à 210 kilogrammes par emplacement.'",
        visualAid: null
    },
    {
        id: 26,
        question: "Quel délai maximal pour la mise en service d'un groupe électrogène de secours ?",
        answers: ["5 secondes", "10 secondes", "15 secondes", "30 secondes"],
        correctAnswer: 2,
        level: "expert",
        theme: "electricity",
        hint: "Article CTS 24, paragraphe 5",
        explanation: "Le groupe doit pouvoir prendre en charge les circuits en moins de 15 secondes.",
        reference: "Article CTS 24 §5 : 'celui-ci peut être arrêté en position d'attente sous réserve de pouvoir prendre automatiquement en charge la totalité des circuits dans un délai maximal de 15 secondes.'",
        visualAid: null
    },
    {
        id: 27,
        question: "Quelle doit être la première action lors du déclenchement de l'alarme ?",
        answers: ["Évacuer immédiatement", "Appeler les pompiers", "Arrêter la diffusion sonore", "Allumer l'éclairage de sécurité"],
        correctAnswer: 2,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 28, paragraphe 3",
        explanation: "L'alarme doit être précédée de l'arrêt de la diffusion sonore et, si possible, du rétablissement de l'éclairage normal.",
        reference: "Article CTS 28 §3 : 'Le fonctionnement de l'alarme générale doit être précédé de l'arrêt de la diffusion sonore et, dans la mesure du possible, du rétablissement de l'éclairage normal.'",
        visualAid: null
    },
    {
        id: 28,
        question: "Quand faut-il une liaison téléphonique avec les sapeurs-pompiers ?",
        answers: ["Toujours", "À partir de 300 personnes", "À partir de 700 personnes", "À partir de 1000 personnes"],
        correctAnswer: 2,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 29, paragraphe 1",
        explanation: "Une liaison téléphonique est exigée pour les établissements de plus de 700 personnes.",
        reference: "Article CTS 29 §1 : 'La liaison avec les sapeurs-pompiers doit être réalisée par téléphone urbain dans les établissements (ou à proximité des établissements) recevant plus de 700 personnes.'",
        visualAid: null
    },
    {
        id: 29,
        question: "Quelle est la fréquence de vérification de l'installation électrique ?",
        answers: ["Tous les 6 mois", "Annuelle", "Tous les 2 ans", "Tous les 3 ans"],
        correctAnswer: 1,
        level: "pro",
        theme: "electricity",
        hint: "Article CTS 35, paragraphe 1",
        explanation: "Vérification annuelle en alternance pour les installations électriques.",
        reference: "Article CTS 35 §1 : 'L'ensemble des installations électriques propres à l'établissement est vérifié annuellement, en alternance, par des personnes ou des organismes agréés et par des techniciens compétents.'",
        visualAid: null
    },
    {
        id: 30,
        question: "Combien de niveaux maximum pour une structure à étage ?",
        answers: ["1 niveau", "2 niveaux", "3 niveaux", "4 niveaux"],
        correctAnswer: 1,
        level: "student",
        theme: "construction",
        hint: "Article CTS 53, paragraphe 1",
        explanation: "Maximum 2 niveaux pour les structures à étage.",
        reference: "Article CTS 53 §1 : 'Les dispositions du présent sous chapitre ne s'appliquent qu'aux établissements itinérants [...] comportant deux niveaux au plus.'",
        visualAid: null
    },
    {
        id: 31,
        question: "Quelle largeur minimale pour les sorties d'un établissement de 100 personnes ?",
        answers: ["0,90 m par sortie", "1,00 m par sortie", "1,40 m par sortie", "1,80 m par sortie"],
        correctAnswer: 2,
        level: "student",
        theme: "construction",
        hint: "Article CTS 10, paragraphe 1",
        explanation: "Pour 50 à 200 personnes : 2 sorties de 1,40 m chacune.",
        reference: "Article CTS 10 §1 : 'De 50 à 200 personnes : par deux sorties ayant chacune une largeur de 1,40 mètre.'",
        visualAid: null
    },
    {
        id: 32,
        question: "Quelle est la durée d'implantation maximale pour les établissements à implantation prolongée ?",
        answers: ["3 mois", "6 mois", "1 an", "2 ans"],
        correctAnswer: 1,
        level: "expert",
        theme: "general",
        hint: "Article CTS 38",
        explanation: "Les établissements implantés plus de 6 mois sont considérés à implantation prolongée.",
        reference: "Article CTS 38 : 'Les dispositions du présent sous-chapitre sont applicables aux établissements clos et itinérants [...] qui sont implantés pour une durée supérieure à six mois.'",
        visualAid: null
    },
    {
        id: 33,
        question: "Quelle est la largeur minimale des circulations principales ?",
        answers: ["Égale à celle des sorties", "1,20 m minimum", "1,80 m minimum", "2,00 m minimum"],
        correctAnswer: 0,
        level: "pro",
        theme: "construction",
        hint: "Article CTS 11, paragraphe 3",
        explanation: "La largeur des circulations principales doit être égale à celle des sorties correspondantes.",
        reference: "Article CTS 11 §3 : 'La largeur de ces circulations doit être égale à celle des sorties correspondantes.'",
        visualAid: null
    },
    {
        id: 34,
        question: "Quelle catégorie de matériaux pour les tentures ?",
        answers: ["M0", "M1", "M2", "M3"],
        correctAnswer: 2,
        level: "student",
        theme: "construction",
        hint: "Article CTS 13, paragraphe 1",
        explanation: "Les tentures doivent être réalisées en matériaux de catégorie M2.",
        reference: "Article CTS 13 §1 : 'Les tentures doivent être réalisées en matériaux de catégorie M2.'",
        visualAid: null
    },
    {
        id: 35,
        question: "Quelle est la puissance utile totale maximum pour un générateur accolé à la paroi ?",
        answers: ["50 kW", "70 kW", "100 kW", "150 kW"],
        correctAnswer: 1,
        level: "expert",
        theme: "construction",
        hint: "Article CTS 15, paragraphe 1",
        explanation: "Si la puissance utile totale ne dépasse pas 70 kW, le générateur peut être accolé à la paroi.",
        reference: "Article CTS 15 §1 : 'Si la puissance utile totale installée ne dépasse pas 70 kW, le ou les appareils peuvent être accolés à la paroi extérieure de l'établissement.'",
        visualAid: null
    },
    {
        id: 36,
        question: "Quelle distance minimale entre le stockage de gaz et l'établissement ?",
        answers: ["1 mètre", "3 mètres", "5 mètres", "10 mètres"],
        correctAnswer: 1,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 15, paragraphe 5",
        explanation: "Le stockage de gaz doit être à 3 mètres minimum de l'établissement.",
        reference: "Article CTS 15 §5 : 'Il doit être situé à une distance minimale de 3 mètres de l'établissement.'",
        visualAid: null
    },
    {
        id: 37,
        question: "Quelle norme pour les blocs autonomes d'éclairage de sécurité ?",
        answers: ["NF C 71-700", "NF C 71-800", "NF C 71-900", "NF C 71-1000"],
        correctAnswer: 1,
        level: "expert",
        theme: "electricity",
        hint: "Article CTS 23, paragraphe 1",
        explanation: "Les blocs doivent être conformes à la norme NF C 71-800.",
        reference: "Article CTS 23 §1 : 'L'éclairage de sécurité par blocs autonomes doit être réalisé par des appareils conformes à la norme de la série NF C 71-800.'",
        visualAid: null
    },
    {
        id: 38,
        question: "Quelle est la composition minimale du service de sécurité pour 800 personnes ?",
        answers: ["1 personne instruite", "2 agents de sécurité", "3 agents de sécurité", "4 agents de sécurité"],
        correctAnswer: 0,
        level: "pro",
        theme: "safety",
        hint: "Article CTS 27, paragraphe 1-a",
        explanation: "Pour jusqu'à 2500 personnes : personnes instruites en sécurité incendie.",
        reference: "Article CTS 27 §1-a : 'Etablissements recevant 2 500 personnes au plus : par des personnes instruites en sécurité incendie et fournies par l'organisateur.'",
        visualAid: null
    },
    {
        id: 39,
        question: "Quel est le contenu minimal du rapport de vérification périodique ?",
        answers: ["Un simple constat", "Les éléments des annexes VI ou VII", "Une liste d'observations", "Un avis favorable ou défavorable"],
        correctAnswer: 1,
        level: "expert",
        theme: "general",
        hint: "Article CTS 36, paragraphe 1",
        explanation: "Le rapport doit comprendre au minimum les éléments mentionnés dans les annexes VI ou VII.",
        reference: "Article CTS 36 §1 : 'Le rapport de vérification périodique doit comprendre au minimum les éléments mentionnés dans les annexes VI ou VII.'",
        visualAid: null
    },
    {
        id: 40,
        question: "Quelle est la superficie minimale pour les petits établissements ?",
        answers: ["8 m²", "16 m²", "25 m²", "50 m²"],
        correctAnswer: 1,
        level: "student",
        theme: "general",
        hint: "Article CTS 37",
        explanation: "Tout établissement visé à l'article CTS 1 §3 doit respecter les dispositions de l'article CTS 37.",
        reference: "Article CTS 37 : 'Tout établissement visé à l'article CTS 1 (§3) doit respecter l'ensemble des dispositions suivantes...'",
        visualAid: null
    }
];

// VARIABLES GLOBALES
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let correctAnswers = 0;
let startTime = Date.now();
let timerInterval;
let timePerQuestion = [];
let currentQuestionStartTime = Date.now();

// CONFIGURATION
let selectedQuestionsCount = 30;
let selectedLevel = "pro";
let selectedThemes = ["general", "construction", "electricity", "safety"];

// INITIALISATION
function initConfig() {
    // Sélection par défaut
    document.querySelector('.question-option[data-questions="30"]').classList.add('selected');
    document.querySelector('.level-option.pro').classList.add('selected');
    
    // Événements pour le sélecteur de questions
    document.querySelectorAll('.question-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.question-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            selectedQuestionsCount = parseInt(this.dataset.questions);
            updateStartButton();
        });
    });
    
    // Événements pour le sélecteur de niveau
    document.querySelectorAll('.level-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.level-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            selectedLevel = this.dataset.level;
            updateStartButton();
        });
    });
    
    // Événements pour le sélecteur de thèmes
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            const theme = this.dataset.theme;
            
            if (this.classList.contains('selected')) {
                if (!selectedThemes.includes(theme)) {
                    selectedThemes.push(theme);
                }
            } else {
                selectedThemes = selectedThemes.filter(t => t !== theme);
            }
            
            updateStartButton();
        });
    });
}

// METTRE À JOUR LE BOUTON START
function updateStartButton() {
    const startBtn = document.getElementById('startBtn');
    if (selectedThemes.length === 0) {
        startBtn.disabled = true;
        startBtn.title = "Sélectionnez au moins un thème";
    } else {
        startBtn.disabled = false;
        startBtn.title = "Cliquez pour démarrer le quiz";
    }
}

// DÉMARRER LE QUIZ
function startQuiz() {
    // Préparer les questions selon la configuration
    prepareQuizQuestions();
    
    // Si pas de questions disponibles
    if (quizQuestions.length === 0) {
        alert(`Aucune question disponible pour la configuration sélectionnée.\n\nNiveau: ${selectedLevel}\nThèmes: ${selectedThemes.join(', ')}\n\nVeuillez modifier votre sélection.`);
        return;
    }
    
    // Si moins de questions que demandé, ajuster l'affichage
    if (quizQuestions.length < selectedQuestionsCount) {
        document.getElementById('questionsLeft').textContent = quizQuestions.length;
        document.getElementById('totalQuestions').textContent = quizQuestions.length;
    }
    
    // Initialiser les variables
    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    correctAnswers = 0;
    timePerQuestion = new Array(quizQuestions.length).fill(0);
    startTime = Date.now();
    
    // Changer d'écran
    document.getElementById('configScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Charger la première question
    loadQuestion();
    startTimer();
    updateStats();
    updateProgress();
}

// PRÉPARER LES QUESTIONS DU QUIZ - VERSION CORRIGÉE
function prepareQuizQuestions() {
    // 1. D'abord, filtrer les questions par thèmes sélectionnés
    let filteredQuestions = allQuestions.filter(q => 
        selectedThemes.includes(q.theme)
    );
    
    // 2. Si on a assez de questions pour le niveau demandé, on les prend
    let levelQuestions = filteredQuestions.filter(q => q.level === selectedLevel);
    
    if (levelQuestions.length >= selectedQuestionsCount) {
        // Assez de questions du niveau demandé
        filteredQuestions = levelQuestions;
    } else {
        // Pas assez, on prend des questions des autres niveaux
        // Priorité : 1. Niveau demandé, 2. Pro, 3. Student, 4. Expert
        let allLevelQuestions = [];
        
        // Ajouter par ordre de priorité
        allLevelQuestions.push(...levelQuestions); // Niveau demandé
        
        if (selectedLevel !== "pro") {
            let proQuestions = filteredQuestions.filter(q => q.level === "pro");
            allLevelQuestions.push(...proQuestions);
        }
        
        if (selectedLevel !== "student") {
            let studentQuestions = filteredQuestions.filter(q => q.level === "student");
            allLevelQuestions.push(...studentQuestions);
        }
        
        if (selectedLevel !== "expert") {
            let expertQuestions = filteredQuestions.filter(q => q.level === "expert");
            allLevelQuestions.push(...expertQuestions);
        }
        
        // Éviter les doublons
        const uniqueQuestions = [];
        const seenIds = new Set();
        
        for (const question of allLevelQuestions) {
            if (!seenIds.has(question.id)) {
                seenIds.add(question.id);
                uniqueQuestions.push(question);
            }
        }
        
        filteredQuestions = uniqueQuestions;
    }
    
    // 3. Mélanger les questions
    filteredQuestions = shuffleArray(filteredQuestions);
    
    // 4. Prendre le nombre demandé (ou le maximum disponible)
    const maxQuestions = Math.min(filteredQuestions.length, selectedQuestionsCount);
    quizQuestions = filteredQuestions.slice(0, maxQuestions);
    
    // 5. Log pour debug
    console.log(`Questions préparées: ${quizQuestions.length} (demandé: ${selectedQuestionsCount})`);
    console.log(`Répartition par niveau:`, quizQuestions.reduce((acc, q) => {
        acc[q.level] = (acc[q.level] || 0) + 1;
        return acc;
    }, {}));
}

// MÉLANGE DES QUESTIONS
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// CHARGER LA QUESTION
function loadQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = quizQuestions[currentQuestionIndex];
    
    // Déterminer la classe CSS pour le niveau
    const levelClass = `level-${question.level}`;
    const levelText = question.level === "student" ? "Étudiant" : 
                     question.level === "pro" ? "Professionnel" : "Expert";
    
    // Déterminer le texte du thème
    const themeText = question.theme === "general" ? "Généralités" :
                    question.theme === "construction" ? "Construction" :
                    question.theme === "electricity" ? "Électricité" : "Sécurité";
    
    // Créer le HTML de la question
    quizContent.innerHTML = `
        <div class="question-container active">
            <div class="question-header">
                <div class="question-number">${currentQuestionIndex + 1}</div>
                <div class="question-info">
                    <div class="question-theme">${themeText}</div>
                    <div class="question-level ${levelClass}">${levelText}</div>
                </div>
            </div>
            
            <div class="question-text">${question.question}</div>
            
            <div class="answers-grid">
                ${question.answers.map((answer, index) => `
                    <button class="answer-btn ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}"
                            onclick="selectAnswer(${index})"
                            data-index="${index}">
                        ${answer}
                    </button>
                `).join('')}
            </div>
            
            <div class="hint-container" id="hintContainer">
                <div class="hint-title">💡 Indice</div>
                <div class="hint-content">${question.hint}</div>
            </div>
            
            ${question.visualAid ? `
            <div class="visual-aid" id="visualAid">
                <div class="visual-title">📐 Aide visuelle</div>
                <div class="visual-content">${question.visualAid}</div>
            </div>
            ` : ''}
            
            <div class="explanation-container" id="explanationContainer">
                <div class="explanation-title">📚 Explication détaillée</div>
                <div class="explanation-content">${question.explanation}</div>
                <div class="reference">${question.reference}</div>
            </div>
        </div>
    `;
    
    // Si une réponse a déjà été donnée, montrer le résultat
    if (userAnswers[currentQuestionIndex] !== null) {
        showQuestionResult();
    }
    
    // Mettre à jour les boutons de navigation
    updateNavigationButtons();
    
    // Mettre à jour les statistiques
    updateStats();
    
    // Enregistrer le temps de début
    currentQuestionStartTime = Date.now();
}

// SÉLECTIONNER UNE RÉPONSE
function selectAnswer(answerIndex) {
    const question = quizQuestions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Calculer le temps passé sur cette question
    timePerQuestion[currentQuestionIndex] = Math.floor((Date.now() - currentQuestionStartTime) / 1000);
    
    // Vérifier si la réponse est correcte
    const isCorrect = (answerIndex === question.correctAnswer);
    
    // Mettre à jour le compteur de bonnes réponses
    if (isCorrect) {
        correctAnswers++;
    }
    
    // Afficher le résultat
    showQuestionResult();
    
    // Mettre à jour les statistiques
    updateStats();
    
    // Mettre à jour la progression
    updateProgress();
}

// AFFICHER LE RÉSULTAT DE LA QUESTION
function showQuestionResult() {
    const question = quizQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const userAnswer = userAnswers[currentQuestionIndex];
    
    // Mettre à jour toutes les boutons
    answerButtons.forEach((btn, index) => {
        // Ajouter la classe selected à la réponse de l'utilisateur
        if (index === userAnswer) {
            btn.classList.add('selected');
        }
        
        // Marquer les bonnes/mauvaises réponses
        if (index === question.correctAnswer) {
            btn.classList.add('correct');
        } else if (index === userAnswer && index !== question.correctAnswer) {
            btn.classList.add('incorrect');
        }
        
        // Désactiver les boutons
        btn.onclick = null;
        btn.style.cursor = 'default';
    });
    
    // Afficher l'explication
    const explanationContainer = document.getElementById('explanationContainer');
    explanationContainer.style.display = 'block';
    
    // Afficher l'indice
    const hintContainer = document.getElementById('hintContainer');
    hintContainer.style.display = 'block';
    
    // Afficher l'aide visuelle si elle existe
    const visualAid = document.getElementById('visualAid');
    if (visualAid) {
        visualAid.style.display = 'block';
    }
}

// AFFICHER L'INDICE
function showHint() {
    const hintContainer = document.getElementById('hintContainer');
    if (hintContainer.style.display === 'block') {
        hintContainer.style.display = 'none';
    } else {
        hintContainer.style.display = 'block';
    }
}

// AFFICHER L'AIDE VISUELLE
function showVisualAid() {
    const visualAid = document.getElementById('visualAid');
    if (visualAid) {
        if (visualAid.style.display === 'block') {
            visualAid.style.display = 'none';
        } else {
            visualAid.style.display = 'block';
        }
    }
}

// AFFICHER LA RÉPONSE
function showAnswer() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Si pas encore répondu, sélectionner la bonne réponse
    if (userAnswers[currentQuestionIndex] === null) {
        selectAnswer(question.correctAnswer);
    }
    
    // Afficher l'explication
    const explanationContainer = document.getElementById('explanationContainer');
    explanationContainer.style.display = 'block';
    
    // Afficher l'indice
    const hintContainer = document.getElementById('hintContainer');
    hintContainer.style.display = 'block';
    
    // Afficher l'aide visuelle si elle existe
    const visualAid = document.getElementById('visualAid');
    if (visualAid) {
        visualAid.style.display = 'block';
    }
}

// QUESTION SUIVANTE
function nextQuestion() {
    // Calculer le temps pour la question actuelle
    if (userAnswers[currentQuestionIndex] === null) {
        timePerQuestion[currentQuestionIndex] = Math.floor((Date.now() - currentQuestionStartTime) / 1000);
    }
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// QUESTION PRÉCÉDENTE
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Calculer le temps pour la question actuelle
        if (userAnswers[currentQuestionIndex] === null) {
            timePerQuestion[currentQuestionIndex] = Math.floor((Date.now() - currentQuestionStartTime) / 1000);
        }
        
        currentQuestionIndex--;
        loadQuestion();
    }
}

// METTRE À JOUR LES STATISTIQUES
function updateStats() {
    const answered = userAnswers.filter(a => a !== null).length;
    
    document.getElementById('currentQuestion').textContent = `${currentQuestionIndex + 1}/${quizQuestions.length}`;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('scorePercentage').textContent = `${Math.round((correctAnswers / Math.max(1, answered)) * 100)}%`;
    document.getElementById('questionsLeft').textContent = quizQuestions.length - answered;
}

// METTRE À JOUR LA PROGRESSION
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
}

// METTRE À JOUR LES BOUTONS DE NAVIGATION
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = 'Terminer le quiz →';
    } else {
        nextBtn.textContent = 'Question suivante →';
    }
}

// TIMER
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// TERMINER LE QUIZ
function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calculer les résultats
    const totalCorrect = correctAnswers;
    const totalIncorrect = quizQuestions.length - totalCorrect;
    const percentage = Math.round((totalCorrect / quizQuestions.length) * 100);
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const totalTimeSeconds = timePerQuestion.reduce((a, b) => a + b, 0);
    const avgTime = Math.round(totalTimeSeconds / quizQuestions.length);
    
    // Afficher l'écran des résultats
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    // Mettre à jour les valeurs
    document.getElementById('finalScore').textContent = `${percentage}%`;
    document.getElementById('totalCorrect').textContent = totalCorrect;
    document.getElementById('totalIncorrect').textContent = totalIncorrect;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    document.getElementById('totalTime').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Évaluation selon le niveau
    const evaluationText = document.getElementById('evaluationText');
    let evaluation = "";
    let adviceItems = [];
    
    if (selectedLevel === "student") {
        if (percentage >= 80) {
            evaluation = "🎓 EXCELLENT pour un étudiant ! Vous maîtrisez les bases de la réglementation CTS.";
            adviceItems = [
                "Passez au niveau Professionnel pour approfondir",
                "Consultez les annexes du règlement",
                "Participez à des formations pratiques"
            ];
        } else if (percentage >= 60) {
            evaluation = "📚 BON DÉBUT ! Vous avez assimilé les notions fondamentales.";
            adviceItems = [
                "Revoyez les articles CTS 1 à 10",
                "Étudiez les schémas d'évacuation",
                "Refaites le quiz avec les explications"
            ];
        } else {
            evaluation = "💪 CONTINUEZ ! La réglementation s'apprend progressivement.";
            adviceItems = [
                "Commencez par lire le sommaire du CTS",
                "Focalisez-vous sur les définitions",
                "Utilisez les aides visuelles"
            ];
        }
    } else if (selectedLevel === "pro") {
        if (percentage >= 85) {
            evaluation = "🏆 EXCELLENCE PROFESSIONNELLE ! Vos connaissances sont opérationnelles.";
            adviceItems = [
                "Passez au niveau Expert pour le perfectionnement",
                "Formez vos collègues",
                "Participez à des commissions de sécurité"
            ];
        } else if (percentage >= 70) {
            evaluation = "👍 TRÈS BON NIVEAU PROFESSIONNEL !";
            adviceItems = [
                "Approfondissez les cas pratiques complexes",
                "Consultez les jurisprudences",
                "Actualisez vos connaissances annuellement"
            ];
        } else {
            evaluation = "🔧 DES POINTS À PERFECTIONNER pour la pratique professionnelle.";
            adviceItems = [
                "Revoyez les procédures opérationnelles",
                "Étudiez les retours d'expérience",
                "Participez à des formations continues"
            ];
        }
    } else { // expert
        if (percentage >= 90) {
            evaluation = "🎖️ EXPERT CONFIRMÉ ! Vous maîtrisez tous les aspects du CTS.";
            adviceItems = [
                "Envisagez la formation de formateurs",
                "Contribuez à l'évolution de la réglementation",
                "Partagez votre expertise"
            ];
        } else if (percentage >= 75) {
            evaluation = "🧠 BON NIVEAU D'EXPERTISE avec quelques subtilités à perfectionner.";
            adviceItems = [
                "Analysez les dossiers complexes",
                "Étudiez les dérogations exceptionnelles",
                "Consultez la doctrine ministérielle"
            ];
        } else {
            evaluation = "🎯 L'EXPERTISE DEMANDE UNE VEILLE CONSTANTE.";
            adviceItems = [
                "Revoyez les jurisprudences récentes",
                "Consultez les instructions techniques",
                "Participez aux groupes de travail"
            ];
        }
    }
    
    // Analyse par thème
    const themeStats = {};
    userAnswers.forEach((answer, index) => {
        const question = quizQuestions[index];
        const theme = question.theme;
        const isCorrect = (answer === question.correctAnswer);
        
        if (!themeStats[theme]) {
            themeStats[theme] = { total: 0, correct: 0 };
        }
        
        themeStats[theme].total++;
        if (isCorrect) themeStats[theme].correct++;
    });
    
    // Ajouter des conseils par thème
    Object.entries(themeStats).forEach(([theme, stats]) => {
        const percentageTheme = Math.round((stats.correct / stats.total) * 100);
        if (percentageTheme < 70) {
            const themeName = theme === "general" ? "Généralités" :
                            theme === "construction" ? "Construction" :
                            theme === "electricity" ? "Électricité" : "Sécurité";
            
            adviceItems.push(`📖 Renforcez vos connaissances en <strong>${themeName}</strong> (${percentageTheme}% de réussite)`);
        }
    });
    
    evaluationText.innerHTML = evaluation;
    
    // Ajouter les conseils
    const adviceList = document.getElementById('adviceList');
    adviceList.innerHTML = '';
    
    adviceItems.forEach(advice => {
        const li = document.createElement('li');
        li.innerHTML = `✅ ${advice}`;
        adviceList.appendChild(li);
    });
    
    // Ajouter un conseil sur le temps si nécessaire
    if (avgTime < 15) {
        const li = document.createElement('li');
        li.innerHTML = `⏱️ Prenez plus de temps pour analyser chaque situation`;
        adviceList.appendChild(li);
    }
}

// RECOMMENCER LE QUIZ
function restartQuiz() {
    // Retour à l'écran de configuration
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('configScreen').style.display = 'block';
    
    // Réinitialiser la configuration par défaut
    selectedQuestionsCount = 30;
    selectedLevel = "pro";
    selectedThemes = ["general", "construction", "electricity", "safety"];
    
    // Réinitialiser la sélection visuelle
    document.querySelectorAll('.question-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('.question-option[data-questions="30"]').classList.add('selected');
    
    document.querySelectorAll('.level-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('.level-option.pro').classList.add('selected');
    
    document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.theme-option').forEach(o => o.classList.add('selected'));
    
    updateStartButton();
}

// NAVIGATION CLAVIER
document.addEventListener('keydown', (e) => {
    // Ignorer si on est sur l'écran de configuration
    if (document.getElementById('configScreen').style.display !== 'none') return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (currentQuestionIndex > 0) previousQuestion();
            break;
        case 'ArrowRight':
            if (currentQuestionIndex < quizQuestions.length - 1) nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const answerIndex = parseInt(e.key) - 1;
            if (answerIndex >= 0 && answerIndex < 4 && userAnswers[currentQuestionIndex] === null) {
                selectAnswer(answerIndex);
            }
            break;
        case 'h':
        case 'H':
            showHint();
            break;
        case 'v':
        case 'V':
            showVisualAid();
            break;
        case 'a':
        case 'A':
            showAnswer();
            break;
        case 'Enter':
            if (currentQuestionIndex === quizQuestions.length - 1) {
                finishQuiz();
            } else {
                nextQuestion();
            }
            break;
    }
});

// DÉMARRER LA CONFIGURATION
window.onload = initConfig;
