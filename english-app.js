const questions = [
    {
        question: "They _________ happy to meet you.",
        options: ["is", "are", "be"],
        correct: 1
    },
    {
        question: "Zara is __________ than Kate.",
        options: ["taller", "tall", "the tallest"],
        correct: 0
    },
    {
        question: "We're listening __________ the teacher.",
        options: ["to", "at", "on"],
        correct: 0
    },
    {
        question: "Can you _________ me where the shop is?",
        options: ["say", "tell", "speak"],
        correct: 1
    },
    {
        question: "What ___________ tonight?",
        options: ["do you do", "will you do", "are you doing"],
        correct: 2
    },
    {
        question: "I'm thirsty, I ___________ a glass of juice.",
        options: ["would like", "like", "would like to"],
        correct: 0
    },
    {
        question: "Do you want to buy ___________ milk?",
        options: ["a", "any", "some"],
        correct: 1
    },
    {
        question: "She doesn't get ___________ mail.",
        options: ["some", "any", "a"],
        correct: 1
    },
    {
        question: "I'm sick. I _______ see a doctor.",
        options: ["should to", "shouldn't", "should"],
        correct: 2
    },
    {
        question: "You _____ be hungry after such a long journey.",
        options: ["must", "should", "going"],
        correct: 0
    },
    {
        question: "You _____ brush your teeth twice a day.",
        options: ["maybe", "would", "should"],
        correct: 2
    },
    {
        question: "Mary is not very ___________ with the news.",
        options: ["pleased", "pleasing", "pleasant"],
        correct: 0
    },
    {
        question: "What's happened to her? She cut _______ with a knife.",
        options: ["her", "herself", "hers"],
        correct: 1
    },
    {
        question: "There were 2 oranges. Kate ate an orange, Jane ate ________.",
        options: ["another", "other", "the other"],
        correct: 2
    },
    {
        question: "Jane dropped _______ university when she was 21.",
        options: ["out of", "out", "off"],
        correct: 0
    },
    {
        question: "The cake _____ delicious! Can I have another piece?",
        options: ["is tasting", "tastes", "taste"],
        correct: 1
    },
    {
        question: "The window _____ broken by the kids yesterday.",
        options: ["had been", "has been", "was"],
        correct: 2
    },
    {
        question: "The documents _____ signed by the manager yesterday.",
        options: ["were", "have been", "had been"],
        correct: 0
    },
    {
        question: "Last winter all the floors in the building …",
        options: ["have been repaired", "were repaired", "were being repaired"],
        correct: 1
    },
    {
        question: "She _____ already left when I arrived.",
        options: ["has", "have", "had"],
        correct: 2
    },
    {
        question: "When I was young, I _____ play football every weekend.",
        options: ["used to", "am used to", "use to"],
        correct: 0
    },
    {
        question: "This book is __________ than that one.",
        options: ["interesting", "the most interesting", "more interesting"],
        correct: 2
    },
    {
        question: "_____ you speak Spanish?",
        options: ["Are", "Does", "Do"],
        correct: 2
    },
    {
        question: "I don't mind _____ for a few minutes.",
        options: ["waiting", "wait", "to wait"],
        correct: 0
    },
    {
        question: "She suggested _____ to the cinema instead of staying home.",
        options: ["go", "going", "to go"],
        correct: 1
    },
    {
        question: "I'm really looking forward ______ that book.",
        options: ["reading", "to read", "to reading"],
        correct: 2
    },
    {
        question: "If I _____ enough money, I would buy a new car.",
        options: ["had", "have", "will have"],
        correct: 0
    },
    {
        question: "This book _____ by millions of people.",
        options: ["reads", "is read", "has read"],
        correct: 1
    },
    {
        question: "We won't help you because you have to figure it _______ yourself.",
        options: ["out", "in", "up"],
        correct: 0
    },
    {
        question: "Natalia works at the bank, _______?",
        options: ["isn't she", "does she", "doesn't she"],
        correct: 2
    },
    {
        question: "– I don't like swimming. – _____ do I.",
        options: ["So", "Neither", "Either"],
        correct: 1
    },
    {
        question: "_______ have you been waiting for her?",
        options: ["How many", "How long", "How much"],
        correct: 1
    },
    {
        question: "I've been waiting for you _____ two hours!",
        options: ["for", "since", "during"],
        correct: 0
    },
    {
        question: "She's been learning English _____ she was a child.",
        options: ["for", "during", "since"],
        correct: 2
    },
    {
        question: "She is _____ intelligent than her brother.",
        options: ["more", "most", "much"],
        correct: 0
    },
    {
        question: "When my wife came home yesterday, I ______________ TV.",
        options: ["watched", "was watching", "have watched"],
        correct: 1
    },
    {
        question: "If it __________ tomorrow, I'll stay home.",
        options: ["will rain", "rained", "rains"],
        correct: 2
    },
    {
        question: "The meeting _____ postponed if the boss doesn't come.",
        options: ["will be", "is", "will have been"],
        correct: 0
    },
    {
        question: "Mary's story was ____________ Tom's story.",
        options: ["more funnier than", "funnier than", "the funniest"],
        correct: 1
    },
    {
        question: "She drives _____ carefully than her brother.",
        options: ["most", "much", "more"],
        correct: 2
    },
    {
        question: "She _____ speak three languages fluently.",
        options: ["can", "must", "will"],
        correct: 0
    },
    {
        question: "When I was a child, I _____ run very fast.",
        options: ["might", "could", "can"],
        correct: 1
    },
    {
        question: "_____ I open the window? It's too hot here.",
        options: ["Shall", "Must", "Would"],
        correct: 0
    },
    {
        question: "_____ you help me with this suitcase?",
        options: ["Shall", "Must", "Could"],
        correct: 2
    },
    {
        question: "I _____ find my keys anywhere. Have you seen them?",
        options: ["mustn't", "can't", "shouldn't"],
        correct: 1
    },
    {
        question: "It's a secret. You _____ tell anyone.",
        options: ["mustn't", "don't have to", "couldn't"],
        correct: 0
    },
    {
        question: "You _____ eat so much sugar. It's bad for you.",
        options: ["don't have to", "shouldn't", "mustn't"],
        correct: 1
    },
    {
        question: "You _____ wear a seatbelt in the car — it's the law.",
        options: ["can", "should", "must"],
        correct: 2
    },
    {
        question: "By the time you arrive, I _____ dinner.",
        options: ["will finish", "will have finished", "finish"],
        correct: 1
    },
    {
        question: "You _____ go to bed now. You look tired.",
        options: ["have to", "must", "should"],
        correct: 2
    },
    {
        question: "Is this the person ___________ daughter is a famous designer?",
        options: ["whose", "who", "which"],
        correct: 0
    },
    {
        question: "This is the most beautiful painting _____ I've ever seen.",
        options: ["which", "that", "who"],
        correct: 1
    },
    {
        question: "She's the woman _____ helped me find my keys.",
        options: ["who", "which", "whom"],
        correct: 0
    },
    {
        question: "This is the hotel _____ we stayed last summer.",
        options: ["which", "that", "where"],
        correct: 2
    },
    {
        question: "I'm not sure where _____ last night.",
        options: ["did he go", "he went", "has he gone"],
        correct: 1
    },
    {
        question: "She asked me where I _____ from.",
        options: ["come", "came", "coming"],
        correct: 1
    },
    {
        question: "Nick said he ________ need a week to make the situation clear.",
        options: ["would", "will", "shall"],
        correct: 0
    },
    {
        question: "The director wanted to know how the TV ______ stolen.",
        options: ["has been", "was", "had been"],
        correct: 2
    },
    {
        question: "If I _____ you, I would apologize immediately.",
        options: ["was", "am", "were"],
        correct: 2
    },
    {
        question: "If he _____ harder, he would have passed the exam.",
        options: ["studied", "would have studied", "had studied"],
        correct: 2
    }
];

let userData = {};

function startTest() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!firstName || !lastName || !age || !phone || !email) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }
    
    userData.firstName = firstName;
    userData.lastName = lastName;
    userData.age = age;
    userData.phone = phone;
    userData.email = email;
    
    document.getElementById('userForm').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';
    
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${q.question}`;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index}`;
            input.value = optIndex;
            input.id = `q${index}_${optIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `q${index}_${optIndex}`;
            label.textContent = option;
            
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        container.appendChild(questionDiv);
    });
}

function submitTest() {
    const answers = [];
    let correctCount = 0;
    let allAnswered = true;
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            allAnswered = false;
        } else {
            const answerIndex = parseInt(selected.value);
            const isCorrect = answerIndex === q.correct;
            if (isCorrect) correctCount++;
            
            answers.push({
                question: q.question,
                selected: q.options[answerIndex],
                correct: q.options[q.correct],
                isCorrect: isCorrect
            });
        }
    });
    
    if (!allAnswered) {
        alert('Пожалуйста, ответьте на все вопросы');
        return;
    }
    
    userData.answers = answers;
    userData.score = correctCount;
    userData.totalQuestions = questions.length;
    
    sendToEmail();
}

function sendToEmail() {
    // Calculate level
    const percentage = Math.round((userData.score / userData.totalQuestions) * 100);
    let level = '';
    if (percentage >= 90) {
        level = 'Продвинутый (C1-C2)';
    } else if (percentage >= 75) {
        level = 'Выше среднего (B2)';
    } else if (percentage >= 60) {
        level = 'Средний (B1)';
    } else if (percentage >= 40) {
        level = 'Ниже среднего (A2)';
    } else {
        level = 'Начальный (A1)';
    }
    
    // Prepare email content
    let emailBody = `РЕЗУЛЬТАТЫ ТЕСТА ПО АНГЛИЙСКОМУ ЯЗЫКУ\n\n`;
    emailBody += `Имя: ${userData.firstName} ${userData.lastName}\n`;
    emailBody += `Возраст: ${userData.age}\n`;
    emailBody += `Телефон: ${userData.phone}\n`;
    emailBody += `Email: ${userData.email}\n`;
    emailBody += `Дата: ${new Date().toLocaleDateString('ru-RU')} ${new Date().toLocaleTimeString('ru-RU')}\n\n`;
    emailBody += `РЕЗУЛЬТАТ: ${userData.score} из ${userData.totalQuestions} (${percentage}%)\n`;
    emailBody += `УРОВЕНЬ: ${level}\n\n`;
    emailBody += `ПОДРОБНЫЕ ОТВЕТЫ:\n\n`;
    
    userData.answers.forEach((answer, index) => {
        const status = answer.isCorrect ? '✓ ПРАВИЛЬНО' : '✗ НЕПРАВИЛЬНО';
        emailBody += `${index + 1}. ${answer.question}\n`;
        emailBody += `   Ответ: ${answer.selected}\n`;
        if (!answer.isCorrect) {
            emailBody += `   Правильный ответ: ${answer.correct}\n`;
        }
        emailBody += `   ${status}\n\n`;
    });
    
    // Send via FormSubmit
    const formData = new FormData();
    formData.append('email', 'my.credo2018@gmail.com');
    formData.append('subject', `Результаты теста - ${userData.firstName} ${userData.lastName}`);
    formData.append('message', emailBody);
    formData.append('_captcha', 'false');
    
    fetch('https://formsubmit.co/ajax/my.credo2018@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        showResults();
    })
    .catch(error => {
        console.error('Error:', error);
        showResults();
    });
}

function showResults() {
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    const percentage = Math.round((userData.score / userData.totalQuestions) * 100);
    
    let level = '';
    if (percentage >= 90) {
        level = 'Продвинутый (C1-C2)';
    } else if (percentage >= 75) {
        level = 'Выше среднего (B2)';
    } else if (percentage >= 60) {
        level = 'Средний (B1)';
    } else if (percentage >= 40) {
        level = 'Ниже среднего (A2)';
    } else {
        level = 'Начальный (A1)';
    }
    
    document.getElementById('resultsContent').innerHTML = `
        <p><strong>${userData.firstName} ${userData.lastName}</strong>, спасибо за прохождение теста!</p>
        <div class="result-total">
            <div>Ваш результат:</div>
            <strong>${userData.score} / ${userData.totalQuestions}</strong>
            <div style="margin-top: 1rem; font-size: 1.2rem;">${percentage}%</div>
            <div style="margin-top: 0.5rem; font-size: 1rem;">Уровень: ${level}</div>
        </div>
        <p style="margin-top: 1.5rem;">Ваши результаты отправлены преподавателю. Вы получите обратную связь в ближайшее время.</p>
    `;
}
