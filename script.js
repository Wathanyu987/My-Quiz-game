const questions = {
    easy: [
        {
            question: "อุปกรณ์ใดที่ใช้ในการ 'รับข้อมูลภาพและเสียง' เข้าสู่คอมพิวเตอร์?",
            choices: ["ลำโพง", "กล้องเว็บแคม", "เครื่องพิมพ์", "จอภาพ"], // ลบ 'ก. ' ออก
            answer: 1, // Correct: กล้องเว็บแคม (ข.)
            info: "กล้องเว็บแคม (Webcam) เป็นอุปกรณ์นำเข้าข้อมูลที่ใช้บันทึกภาพและเสียงเข้าสู่คอมพิวเตอร์สำหรับการสนทนาวิดีโอหรือบันทึกภาพ"
        },
        {
            question: "หากต้องการ 'จัดการไฟล์และโฟลเดอร์' บนคอมพิวเตอร์ ควรใช้โปรแกรมใด?",
            choices: ["Microsoft Excel", "โปรแกรม Paint", "File Explorer", "Google Chrome"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: File Explorer (ค.)
            info: "File Explorer (หรือ Windows Explorer ในเวอร์ชันเก่า) เป็นโปรแกรมพื้นฐานในระบบปฏิบัติการ Windows ที่ช่วยให้คุณดู จัดการ และจัดระเบียบไฟล์และโฟลเดอร์ต่างๆ"
        },
        {
            question: "ข้อใดคือ 'หน่วยความจำชั่วคราว' ที่ข้อมูลจะหายไปเมื่อปิดเครื่อง?",
            choices: ["ROM", "Hard Drive", "SSD", "RAM"], // ลบ 'ก. ' ออก
            answer: 3, // Correct: RAM (ง.)
            info: "RAM (Random Access Memory) คือหน่วยความจำหลักที่ใช้เก็บข้อมูลและโปรแกรมที่กำลังทำงานอยู่ชั่วคราว ข้อมูลจะถูกล้างเมื่อปิดเครื่อง"
        },
        {
            question: "ถ้าคอมพิวเตอร์ทำงานช้าลงมาก และมี Pop-up โฆษณาแปลกๆ เด้งขึ้นมาตลอด ควรสงสัยว่าเกิดอะไรขึ้น?",
            choices: ["แบตเตอรี่เสื่อม", "ติดตั้งโปรแกรมป้องกันไวรัส", "ติดไวรัสหรือมัลแวร์", "RAM เต็ม"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: ติดไวรัสหรือมัลแวร์ (ค.)
            info: "อาการเหล่านี้มักเป็นสัญญาณของการติดไวรัสคอมพิวเตอร์ หรือมัลแวร์ ซึ่งเป็นโปรแกรมประสงค์ร้ายที่รบกวนการทำงานของระบบ"
        },
        {
            question: "การกระทำใดถือว่าเป็นการ 'ละเมิดความเป็นส่วนตัว' บนอินเทอร์เน็ต?",
            choices: ["ตั้งรหัสผ่านที่ซับซ้อน", "แชร์ข้อมูลส่วนตัวของผู้อื่นโดยไม่ได้รับอนุญาต", "ใช้ VPN เพื่อเข้าถึงเว็บไซต์", "ออกจากระบบทุกครั้งหลังใช้งาน"], // ลบ 'ก. ' ออก
            answer: 1, // Correct: แชร์ข้อมูลส่วนตัวของผู้อื่นโดยไม่ได้รับอนุญาต (ข.)
            info: "การละเมิดความเป็นส่วนตัวคือการเปิดเผยหรือใช้ข้อมูลส่วนบุคคลของผู้อื่นโดยไม่ได้รับความยินยอม ซึ่งผิดกฎหมายและจริยธรรม"
        },
        {
            question: "ข้อใดคือโปรแกรมสำหรับ 'ประมวลผลคำ' ที่ใช้ในการสร้างเอกสาร?",
            choices: ["Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel", "Adobe Photoshop"], // ลบ 'ก. ' ออก
            answer: 1, // Correct: Microsoft Word (ข.)
            info: "Microsoft Word เป็นโปรแกรมประมวลผลคำที่นิยมใช้ในการสร้าง แก้ไข จัดรูปแบบ และพิมพ์เอกสารต่างๆ"
        },
        {
            question: "อุปกรณ์ใดทำหน้าที่เป็น 'Output Device' (อุปกรณ์แสดงผล) ที่แปลงสัญญาณดิจิทัลเป็นเสียง?",
            choices: ["ไมโครโฟน", "เครื่องสแกน", "ลำโพง", "แฟลชไดรฟ์"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: ลำโพง (ค.)
            info: "ลำโพง (Speaker) เป็นอุปกรณ์แสดงผลที่ใช้สำหรับรับฟังเสียงที่ประมวลผลมาจากคอมพิวเตอร์"
        },
        {
            question: "หากได้รับอีเมลที่น่าสงสัยและขอข้อมูลส่วนตัว ควรกระทำอย่างไร?",
            choices: ["รีบตอบกลับทันทีเพื่อรับรางวัล", "คลิกที่ลิงก์ในอีเมลเพื่อตรวจสอบ", "ลบอีเมลนั้นทิ้งและไม่ตอบกลับ", "ส่งต่อให้เพื่อนเพื่อขอคำแนะนำ"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: ลบอีเมลนั้นทิ้งและไม่ตอบกลับ (ค.)
            info: "อีเมลประเภทนี้มักเป็นการ 'ฟิชชิ่ง' (Phishing) หรือการหลอกลวง ควรลบอีเมลทิ้งและระมัดระวังการให้ข้อมูลส่วนตัวผ่านช่องทางที่ไม่น่าเชื่อถือ"
        },
        {
            question: "ส่วนประกอบใดที่เปรียบเสมือน 'กระดูกสันหลัง' ของคอมพิวเตอร์ ที่เชื่อมต่ออุปกรณ์ทั้งหมดเข้าด้วยกัน?",
            choices: ["ฮาร์ดดิสก์", "การ์ดจอ", "เมนบอร์ด", "พาวเวอร์ซัพพลาย"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: เมนบอร์ด (ค.)
            info: "เมนบอร์ด (Motherboard) เป็นแผงวงจรหลักที่เชื่อมต่อส่วนประกอบสำคัญทั้งหมดของคอมพิวเตอร์เข้าด้วยกัน เพื่อให้สามารถทำงานร่วมกันได้"
        },
        {
            question: "ข้อใดคือประโยชน์หลักของการ 'สำรองข้อมูล' (Backup Data)?",
            choices: ["ทำให้คอมพิวเตอร์บูทเร็วขึ้น", "ช่วยประหยัดค่าอินเทอร์เน็ต", "ป้องกันข้อมูลสูญหายจากความเสียหายหรือไวรัส", "เพิ่มพื้นที่ว่างใน RAM"], // ลบ 'ก. ' ออก
            answer: 2, // Correct: ป้องกันข้อมูลสูญหายจากความเสียหายหรือไวรัส (ค.)
            info: "การสำรองข้อมูลคือการคัดลอกข้อมูลสำคัญไปเก็บไว้ในที่อื่น เพื่อป้องกันการสูญหายอันเนื่องมาจากความเสียหายของอุปกรณ์, ไวรัส, อุบัติเหตุ หรือความผิดพลาดของผู้ใช้งาน"
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
const timeLeftEl = document = document.getElementById("time-left");

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

    const prefixes = ["ก. ", "ข. ", "ค. ", "ง. "]; 
    currentQuestion.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = prefixes[index] + choice; 
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
