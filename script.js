// BASE DE DONNÉES COMPLÈTE DES QUESTIONS
const allQuestions = [
    // THÈME : GÉNÉRALITÉS (10 questions)
    {
        id: 1,
        question: "À partir de quelle superficie un établissement CTS est-il soumis à la réglementation ?",
        answers: [
            "À partir de 16 m²",
            "À partir de 25 m²",
            "À partir de 50 m²",
            "À partir de 100 m²"
        ],
        correctAnswer: 0,
        level: "student",
        theme: "general",
        hint: "Consultez l'article CTS 1, paragraphe 2",
        explanation: "Selon l'article CTS 1 §2, la réglementation s'applique aux établissements destinés à être clos, possédant une couverture souple, d'une superficie supérieure ou égale à 16 m².",
        reference: "Article CTS 1 §2 : 'Les dispositions du présent règlement s'appliquent aux établissements [...] d'une superficie supérieure ou égale à 16 m².'",
        visualAid: `
            <div class="schema">
                <strong>📐 Surface minimale : 16 m²</strong><br>
                • Chapiteaux, tentes, structures<br>
                • Établissements itinérants<br>
                • Couverture souple<br>
                • Destinés à être clos
            </div>
            <div class="example">
                <strong>📝 Exemple :</strong><br>
                Une tente de 4m x 4m = 16 m² → Règlement applicable<br>
                Une tente de 3m x 3m = 9 m² → Règlement non applicable
            </div>
        `
    },
    {
        id: 2,
        question: "Quelle est la distance minimale entre deux établissements CTS pour qu'ils soient considérés comme distincts ?",
        answers: [
            "3 mètres",
            "5 mètres",
            "8 mètres",
            "10 mètres"
        ],
        correctAnswer: 2,
        level: "student",
        theme: "general",
        hint: "Article CTS 1, paragraphe 6",
        explanation: "L'article CTS 1 §6 précise que les établissements distants de 8 m au moins sont considérés comme distincts.",
        reference: "Article CTS 1 §6 : 'Les établissements distants entre eux de 8 m au moins sont considérés comme autant d'établissements distincts.'",
        visualAid: `
            <div class="schema">
                <strong>📏 Distance entre établissements :</strong><br>
                • 8 m minimum pour établissements distincts<br>
                • 5 m pour établissements de 16-50 m²<br>
                • Mesuré entre les enveloppes
            </div>
        `
    },
    {
        id: 3,
        question: "Qui délivre le registre de sécurité d'un établissement CTS ?",
        answers: [
            "Le maire de la commune",
            "Le préfet du département",
            "Le fabricant",
            "L'organisme de vérification technique"
        ],
        correctAnswer: 1,
        level: "pro",
        theme: "general",
        hint: "Article CTS 3, paragraphe 1",
        explanation: "Le registre de sécurité est délivré par le préfet du département (ou le préfet de Police pour Paris) après avis de la commission consultative départementale.",
        reference: "Article CTS 3 §1 : 'Le registre de sécurité est délivré par le préfet du département [...] après avis de la commission consultative départementale de sécurité et d'accessibilité.'",
        visualAid: `
            <div class="schema">
                <strong>📋 Procédure d'obtention :</strong><br>
                1. Demande par le propriétaire/fabricant<br>
                2. Vérification par organisme agréé CTS<br>
                3. Transmission au préfet<br>
                4. Délivrance du registre
            </div>
        `
    },
    // Ajouter les autres questions ici (id 4 à 40)...
    // Pour économiser de l'espace, je mets seulement quelques exemples
    {
        id: 4,
        question: "Quels types d'établissements ne sont pas visés par la réglementation CTS ?",
        answers: [
            "Les chapiteaux de cirque",
            "Les campings et manèges forains",
            "Les structures gonflables",
            "Les tentes de réception"
        ],
        correctAnswer: 1,
        level: "student",
        theme: "general",
        hint: "Article CTS 1, paragraphe 5",
        explanation: "L'article CTS 1 §5 exclut spécifiquement les campings et les manèges forains du champ d'application.",
        reference: "Article CTS 1 §5 : 'Les campings et les manèges forains ne sont pas visés par le présent type.'",
        visualAid: `
            <div class="schema">
                <strong>🚫 Exclusions :</strong><br>
                ✅ Campings (règlement spécifique)<br>
                ✅ Manèges forains<br>
                ❌ Chapiteaux de cirque (inclus)<br>
                ❌ Tentes événementielles (incluses)
            </div>
        `
    },
    {
        id: 5,
        question: "Pour les établissements de 16 à 50 m², quelles dispositions s'appliquent ?",
        answers: [
            "Toutes les dispositions du CTS",
            "Seules les dispositions de base",
            "Aucune disposition",
            "Uniquement les dispositions électriques"
        ],
        correctAnswer: 1,
        level: "pro",
        theme: "general",
        hint: "Article CTS 1, paragraphe 3",
        explanation: "Ces établissements ne sont soumis qu'aux dispositions de base spécifiées à l'article CTS 1 §3.",
        reference: "Article CTS 1 §3 : 'Les établissements d'une superficie supérieure ou égale à 16 m² mais inférieure à 50 m² sont soumis aux seules dispositions des paragraphes 1 et 6 du présent article...'",
        visualAid: `
            <div class="schema">
                <strong>📊 Règlementation par superficie :</strong><br>
                • < 16 m² : Hors champ (sauf si cumul ≥ 16 m²)<br>
                • 16-50 m² : Dispositions de base<br>
                • ≥ 50 m² : Règlement complet
            </div>
        `
    },
    // ... Continuer avec toutes les autres questions
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

// PRÉPARER LES QUESTIONS DU QUIZ
function prepareQuizQuestions() {
    // Filtrer les questions selon les critères
    let filteredQuestions = allQuestions.filter(q => 
        selectedThemes.includes(q.theme) && 
        q.level === selectedLevel
    );
    
    // Si pas assez de questions pour le niveau, ajouter des questions d'autres niveaux
    if (filteredQuestions.length < selectedQuestionsCount) {
        // Ajouter des questions du niveau inférieur
        let lowerLevel = selectedLevel === "expert" ? "pro" : "student";
        let lowerQuestions = allQuestions.filter(q => 
            selectedThemes.includes(q.theme) && 
            q.level === lowerLevel
        );
        
        // Ajouter des questions du niveau supérieur
        let upperLevel = selectedLevel === "student" ? "pro" : "expert";
        let upperQuestions = allQuestions.filter(q => 
            selectedThemes.includes(q.theme) && 
            q.level === upperLevel
        );
        
        // Mélanger et ajouter
        filteredQuestions = [
            ...filteredQuestions,
            ...lowerQuestions.slice(0, Math.min(5, lowerQuestions.length)),
            ...upperQuestions.slice(0, Math.min(5, upperQuestions.length))
        ];
    }
    
    // Mélanger les questions
    filteredQuestions = shuffleArray(filteredQuestions);
    
    // Prendre le nombre demandé
    quizQuestions = filteredQuestions.slice(0, selectedQuestionsCount);
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
    document.getElementById('scorePercentage').textContent = `${Math.round((correctAnswers / quizQuestions.length) * 100)}%`;
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