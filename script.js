document.addEventListener('DOMContentLoaded', () => {
    // 從搜尋結果 [9] 和 [2] 選取的範例題目
    const questions = [
        {
            question: "Which of the following are valid String declarations inside a method?",
            options: ["String name = null;", "var name = \"Brian\";", "String name = new String(\"Brian\");", "var name = 'Brian';"],
            correctAnswer: ["String name = null;", "var name = \"Brian\";", "String name = new String(\"Brian\");"], // 注意：這題是多選，但範例做成單選，取第一個作為答案範例
            correctAnswerIndex: 0, // 假設單選題，取 A 作為代表答案索引 (原題多選)
            explanation: "A, B, and C are valid ways to declare a String. 'var' infers the type. 'D' uses single quotes, which denotes a char, not a String. 'E' is invalid syntax.",
            topic: "Working with Java data types"
        },
        {
            question: "Which code can convert the following String into a Boolean object? String isCorporateCustomer = \"false\";",
            options: ["Boolean.getBoolean(isCorporateCustomer);", "Boolean.valueOf(isCorporateCustomer);", "Boolean.parseBoolean(isCorporateCustomer);", "Object.parseBoolean(isCorporateCustomer);"],
            correctAnswer: "Boolean.valueOf(isCorporateCustomer);",
            correctAnswerIndex: 1,
            explanation: "Boolean.valueOf(String) returns a Boolean object. Boolean.parseBoolean(String) returns a primitive boolean. Boolean.getBoolean(String) checks system properties.",
            topic: "Working with Java data types"
        },
        {
            question: "i. The equals method check reference equality. ii. The \"==\" invokes the equals method when used to check objects equality. iii. The equals method defined in the Object class. Which of the above is/are true?",
            options: ["Only I", "Only III", "Only I and II", "Only I and III"],
            correctAnswer: "Only III",
            correctAnswerIndex: 1,
            explanation: "By default (in Object class), equals() checks reference equality (like ==). However, many classes override equals() for value equality. '==' *never* invokes equals(). Only statement III is inherently true.",
            topic: "Working with Java data types"
        },
        {
            question: "What type of statement would be used to code the following equation: y = (m*x) + b?",
            options: ["Conditional statement", "Assignment statement", "Assertion statement", "None of above"],
            correctAnswer: "Assignment statement",
            correctAnswerIndex: 1,
            explanation: "The statement assigns the result of the calculation (m*x) + b to the variable y. This is an assignment operation.",
            topic: "Basic Java Syntax" // 自訂分類
        },
        {
            question: "An expression involving byte, int, and literal numbers is promoted to which of these?",
            options: ["int", "long", "byte", "float"],
            correctAnswer: "int",
            correctAnswerIndex: 0,
            explanation: "In Java arithmetic operations, byte, short, and char are automatically promoted to int before the operation is performed.",
            topic: "Working with Java data types"
        }
        // 在此處添加更多問題物件...
    ];

    const quizContent = document.getElementById('quiz-content');
    const quizForm = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('quiz-results');
    const scoreDisplay = document.getElementById('score');
    const detailedResults = document.getElementById('detailed-results');
    const errorAnalysis = document.getElementById('error-analysis');
    const restartBtn = document.getElementById('restart-btn');
    const submitBtn = document.getElementById('submit-btn');

    function loadQuiz() {
        quizContent.innerHTML = ''; // 清空舊內容
        resultsContainer.style.display = 'none'; // 隱藏結果
        quizForm.style.display = 'block'; // 顯示題目表單

        questions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';

            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionBlock.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            q.options.forEach((option, optionIndex) => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question${index}`;
                radio.value = optionIndex;
                radio.required = true; // 確保每題都作答

                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${option}`));
                optionsDiv.appendChild(label);
            });

            questionBlock.appendChild(optionsDiv);
            quizContent.appendChild(questionBlock);
        });
        // 確保提交按鈕可見
        submitBtn.style.display = 'block';
    }

    function calculateResults() {
        let score = 0;
        const userAnswers = [];
        const incorrectTopics = {}; // 用於錯誤分析

        questions.forEach((q, index) => {
            const selectedOption = quizForm.querySelector(`input[name="question${index}"]:checked`);
            const answerIndex = selectedOption ? parseInt(selectedOption.value) : -1; // -1 表示未作答
            const correct = answerIndex === q.correctAnswerIndex;

            if (correct) {
                score++;
            } else {
                // 統計錯誤主題
                const topic = q.topic || "Uncategorized";
                incorrectTopics[topic] = (incorrectTopics[topic] || 0) + 1;
            }

            userAnswers.push({
                question: q.question,
                selected: answerIndex,
                correctIndex: q.correctAnswerIndex,
                correctText: q.options[q.correctAnswerIndex],
                options: q.options,
                isCorrect: correct,
                explanation: q.explanation,
                topic: q.topic || "Uncategorized"
            });
        });

        return { score, userAnswers, incorrectTopics };
    }

    function displayResults(score, userAnswers, incorrectTopics) {
        quizForm.style.display = 'none'; // 隱藏題目
        resultsContainer.style.display = 'block'; // 顯示結果

        const percentage = ((score / questions.length) * 100).toFixed(1);
        scoreDisplay.textContent = `您的分數： ${score} / ${questions.length} (${percentage}%)`;

        // 顯示錯誤分析
        errorAnalysis.innerHTML = ''; // 清空
        const analysisTitle = document.createElement('h4');
        analysisTitle.textContent = '需要加強的領域分析：';
        errorAnalysis.appendChild(analysisTitle);

        if (Object.keys(incorrectTopics).length > 0) {
            const topicList = document.createElement('ul');
            for (const topic in incorrectTopics) {
                const listItem = document.createElement('li');
                listItem.textContent = `${topic}: ${incorrectTopics[topic]} 題錯誤`;
                topicList.appendChild(listItem);
            }
            errorAnalysis.appendChild(topicList);
        } else if (score === questions.length) {
            errorAnalysis.textContent = '恭喜！全部答對！';
        } else {
            errorAnalysis.textContent = '所有作答題目均正確或未分類。';
        }


        detailedResults.innerHTML = ''; // 清空舊的詳細結果
        userAnswers.forEach((answer, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

            resultItem.innerHTML = `
                <p><strong>問題 ${index + 1}:</strong> ${answer.question}</p>
                <p><strong>您的答案:</strong> ${answer.selected !== -1 ? answer.options[answer.selected] : '未作答'}</p>
                <p><strong>正確答案:</strong> ${answer.correctText}</p>
                ${!answer.isCorrect ? `<div class="explanation"><strong>解釋:</strong> ${answer.explanation || '無詳細解釋'}</div>` : ''}
            `;
            detailedResults.appendChild(resultItem);
        });
    }

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 阻止表單預設提交行為
        const { score, userAnswers, incorrectTopics } = calculateResults();
        displayResults(score, userAnswers, incorrectTopics);
    });

    restartBtn.addEventListener('click', loadQuiz);

    // 初始載入測驗
    loadQuiz();
});
