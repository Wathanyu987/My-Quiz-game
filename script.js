const questions = {
    easy: [
        {
            question: "คอมพิวเตอร์คืออะไร?",
            choices: ["เครื่องมือสำหรับพิมพ์งาน", "เครื่องมือที่ใช้ประมวลผลข้อมูล", "เครื่องมือสำหรับฟังเพลง", "เครื่องมือสำหรับถ่ายรูป"],
            answer: 1,
            info: "คอมพิวเตอร์เป็นอุปกรณ์อิเล็กทรอนิกส์ที่สามารถรับข้อมูล ประมวลผลข้อมูล จัดเก็บข้อมูล และแสดงผลข้อมูลตามชุดคำสั่งที่กำหนดไว้"
        },
        {
            question: "ซอฟต์แวร์ (Software) หมายถึงอะไร?",
            choices: ["ส่วนประกอบทางกายภาพของคอมพิวเตอร์", "โปรแกรมหรือชุดคำสั่งที่ใช้ควบคุมคอมพิวเตอร์", "หน่วยความจำของคอมพิวเตอร์", "หน้าจอของคอมพิวเตอร์"],
            answer: 1,
            info: "ซอฟต์แวร์คือส่วนที่จับต้องไม่ได้ของระบบคอมพิวเตอร์ ประกอบด้วยโปรแกรม ชุดคำสั่ง และข้อมูลที่ใช้ควบคุมการทำงานของฮาร์ดแวร์"
        },
        {
            question: "อินเทอร์เน็ตคืออะไร?",
            choices: ["เครือข่ายคอมพิวเตอร์ที่เชื่อมต่อทั่วโลก", "โปรแกรมเล่นเกม", "ฮาร์ดแวร์ของคอมพิวเตอร์", "ระบบปฏิบัติการ"],
            answer: 0,
            info: "อินเทอร์เน็ตคือเครือข่ายคอมพิวเตอร์ขนาดใหญ่ที่เชื่อมโยงเครือข่ายย่อย ๆ ทั่วโลกเข้าด้วยกัน ทำให้สามารถสื่อสารและแลกเปลี่ยนข้อมูลระหว่างกันได้"
        },
        {
            question: "ชื่อกฎหมายที่เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลในประเทศไทยคืออะไร?",
            choices: ["พ.ร.บ.คอมพิวเตอร์", "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล", "พ.ร.บ.ลิขสิทธิ์", "พ.ร.บ.ความมั่นคงไซเบอร์"],
            answer: 1,
            info: "พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) มีวัตถุประสงค์เพื่อคุ้มครองข้อมูลส่วนบุคคลและกำหนดสิทธิของเจ้าของข้อมูล"
        },
        {
            question: "การละเมิดลิขสิทธิ์ซอฟต์แวร์หมายถึงอะไร?",
            choices: ["การใช้ซอฟต์แวร์อย่างถูกกฎหมาย", "การใช้ซอฟต์แวร์โดยไม่ได้รับอนุญาต", "การซื้อซอฟต์แวร์จากร้านค้า", "การอัปเดตซอฟต์แวร์"],
            answer: 1,
            info: "การละเมิดลิขสิทธิ์ซอฟต์แวร์คือการทำซ้ำ ดัดแปลง เผยแพร่ หรือใช้งานซอฟต์แวร์โดยไม่ได้รับอนุญาตจากเจ้าของลิขสิทธิ์ ซึ่งเป็นการกระทำที่ผิดกฎหมาย"
        },
        {
            question: "ไวรัสคอมพิวเตอร์คืออะไร?",
            choices: ["โปรแกรมที่ช่วยเพิ่มความเร็วคอมพิวเตอร์", "โปรแกรมที่ทำลายหรือก่อกวนระบบคอมพิวเตอร์", "โปรแกรมเล่นเกม", "โปรแกรมป้องกันไวรัส"],
            answer: 1,
            info: "ไวรัสคอมพิวเตอร์เป็นโปรแกรมประสงค์ร้ายที่สามารถแพร่กระจายไปยังคอมพิวเตอร์เครื่องอื่น ๆ และก่อให้เกิดความเสียหายต่อระบบหรือข้อมูลได้"
        },
        {
            question: "ระบบปฏิบัติการ (Operating System) คืออะไร?",
            choices: ["โปรแกรมที่ใช้เล่นเกม", "โปรแกรมที่ควบคุมการทำงานของคอมพิวเตอร์", "โปรแกรมสำหรับพิมพ์งาน", "โปรแกรมสำหรับท่องอินเทอร์เน็ต"],
            answer: 1,
            info: "ระบบปฏิบัติการเป็นซอฟต์แวร์ที่ทำหน้าที่เป็นตัวกลางระหว่างผู้ใช้กับฮาร์ดแวร์ของคอมพิวเตอร์ โดยจัดการทรัพยากรต่าง ๆ ของระบบ"
        },
        {
            question: "การฟิชชิ่ง (Phishing) คืออะไร?",
            choices: ["การส่งอีเมลหลอกลวงเพื่อขโมยข้อมูลส่วนตัว", "การดาวน์โหลดซอฟต์แวร์", "การสำรองข้อมูล", "การอัปเดตระบบ"],
            answer: 0,
            info: "การฟิชชิ่งคือการหลอกลวงทางอินเทอร์เน็ต โดยผู้ไม่หวังดีจะพยายามหลอกให้เหยื่อเปิดเผยข้อมูลส่วนตัว เช่น รหัสผ่าน ข้อมูลบัตรเครดิต ผ่านทางอีเมลหรือเว็บไซต์ปลอม"
        },
        {
            question: "ฮาร์ดแวร์ (Hardware) คืออะไร?",
            choices: ["โปรแกรมคอมพิวเตอร์", "ส่วนประกอบทางกายภาพของคอมพิวเตอร์", "ระบบปฏิบัติการ", "เครือข่ายอินเทอร์เน็ต"],
            answer: 1,
            info: "ฮาร์ดแวร์คือส่วนประกอบทางกายภาพของคอมพิวเตอร์ เช่น จอภาพ คีย์บอร์ด เมาส์ หน่วยประมวลผลกลาง (CPU) และหน่วยความจำ"
        },
        {
            question: "ใครเป็นผู้ควบคุมกฎหมายคอมพิวเตอร์ในประเทศไทย?",
            choices: ["กระทรวงศึกษาธิการ", "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม", "กระทรวงสาธารณสุข", "กระทรวงแรงงาน"],
            answer: 1,
            info: "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม (MDES) เป็นหน่วยงานหลักที่รับผิดชอบในการดูแลและบังคับใช้กฎหมายที่เกี่ยวข้องกับคอมพิวเตอร์และเทคโนโลยีดิจิทัลในประเทศไทย"
        }
    ]
};

const MESSAGES = {
    correctFeedback: "✅ ถูกต้อง!",
    wrongFeedback: "❌ ผิด!",
    timeUpFeedback: "หมดเวลา!",
    questionNumber: (level, current, total) => `ระดับ: ${level} ข้อที่ ${current} / ${total}`
};

const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const winScreen = document.getElementById("win-screen");
const btnStartGame = document.getElementById("btn-start-game");
const btnPlayAgain = document.getElementById("btn-play-again");
const btnBackToStartFromWin = document.getElementById("btn-back-to-start-from-win");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const feedbackTextEl = document.getElementById("feedback-text");
const infoTextEl = document.getElementById("info-text");
const timeLeftEl = document.getElementById("time-left");

let currentLevel = "easy";
let currentQuestionIndex = 0;
const timePerQuestion = 15;
let timerStartTime = 0;
let timerAnimationFrameId = null;
let isGameActive = true;

btnStartGame.addEventListener("click", () => {
    startGame();
});

btnPlayAgain.addEventListener("click", () => {
    startGame();
});

btnBackToStartFromWin.addEventListener("click", () => {
    showScreen("start");
});

choicesEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice-btn") && isGameActive) {
        const buttons = Array.from(choicesEl.children);
        const selectedIndex = buttons.indexOf(event.target);
        selectAnswer(selectedIndex);
    }
});

function startGame() {
    currentQuestionIndex = 0;
    currentLevel = "easy";
    isGameActive = true;
    showScreen("game");
    loadQuestion();
    startTimer();
}

function showScreen(screenName) {
    startScreen.classList.add("hidden");
    gameContainer.classList.add("hidden");
    winScreen.classList.add("hidden");

    if (screenName === "start") {
        startScreen.classList.remove("hidden");
    } else if (screenName === "game") {
        gameContainer.classList.remove("hidden");
    } else if (screenName === "win") {
        winScreen.classList.remove("hidden");
    }
}

function loadQuestion() {
    const currentQuestionsSet = questions[currentLevel];

    if (currentQuestionIndex >= currentQuestionsSet.length) {
        stopTimer();
        isGameActive = false;
        showScreen("win");
        return;
    }

    const currentQuestion = currentQuestionsSet[currentQuestionIndex];
    questionNumberEl.textContent = MESSAGES.questionNumber("ง่าย", currentQuestionIndex + 1, currentQuestionsSet.length);
    questionTextEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice;
        btn.disabled = false;
        choicesEl.appendChild(btn);
    });

    feedbackTextEl.textContent = "";
    infoTextEl.textContent = "";
    feedbackTextEl.classList.remove("correct", "wrong");
    timeLeftEl.textContent = timePerQuestion;
}

function selectAnswer(selectedIndex) {
    if (!isGameActive) return;
    stopTimer();

    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    const buttons = choicesEl.querySelectorAll(".choice-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === currentQuestion.answer) {
            btn.classList.add("correct");
        }
        if (idx === selectedIndex && idx !== currentQuestion.answer) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === currentQuestion.answer) {
        feedbackTextEl.textContent = MESSAGES.correctFeedback;
        infoTextEl.textContent = currentQuestion.info;
        feedbackTextEl.classList.add("correct");

        currentQuestionIndex++;
        setTimeout(() => {
            if (isGameActive) {
                 loadQuestion();
                 startTimer();
            }
        }, 3000);
    } else {
        feedbackTextEl.textContent = MESSAGES.wrongFeedback + " คำตอบที่ถูกต้องคือ: " + currentQuestion.choices[currentQuestion.answer];
        infoTextEl.textContent = currentQuestion.info;
        feedbackTextEl.classList.add("wrong");
        isGameActive = false;
        disableChoices();

        setTimeout(() => {
            if (confirm("คุณแพ้แล้ว! เริ่มเกมใหม่หรือไม่?")) {
                startGame();
            } else {
                showScreen("start");
            }
        }, 3000);
    }
}

function startTimer() {
    timerStartTime = performance.now();
    cancelAnimationFrame(timerAnimationFrameId);
    
    function animateTimer(currentTime) {
        const elapsedTime = (currentTime - timerStartTime) / 1000;
        const timeLeft = Math.max(0, timePerQuestion - Math.floor(elapsedTime));
        timeLeftEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            stopTimer();
            feedbackTextEl.textContent = MESSAGES.timeUpFeedback + " คำตอบที่ถูกต้องคือ: " + questions[currentLevel][currentQuestionIndex].choices[questions[currentLevel][currentQuestionIndex].answer];
            infoTextEl.textContent = questions[currentLevel][currentQuestionIndex].info;
            feedbackTextEl.classList.add("wrong");
            isGameActive = false;
            disableChoices();

            setTimeout(() => {
                if (confirm("คุณแพ้แล้ว! เริ่มเกมใหม่หรือไม่?")) {
                    startGame();
                } else {
                    showScreen("start");
                }
            }, 3000);
            return;
        }
        timerAnimationFrameId = requestAnimationFrame(animateTimer);
    }
    timerAnimationFrameId = requestAnimationFrame(animateTimer);
}

function stopTimer() {
    cancelAnimationFrame(timerAnimationFrameId);
}

function disableChoices() {
    const buttons = choicesEl.querySelectorAll(".choice-btn");
    buttons.forEach(btn => btn.disabled = true);
}

window.onload = () => {
    showScreen("start");
};