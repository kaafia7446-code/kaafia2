// ================= GLOBAL CONTENT HANDLER =================
const content = document.getElementById("content");

// ================= HOME =================
function showHome() {
    content.innerHTML = `
        <div class="welcome-section">
            <h1>Welcome to JavaScript Learning Project</h1>
            <p class="subtitle">Explore Chapters 7, 8, and 9</p>

            <div class="feature-cards">
                <div class="card" onclick="showChapter7Questions()">
                    <h3>Chapter 7</h3>
                    <p>Objects in JavaScript</p>
                </div>
                <div class="card" onclick="showChapter8Questions()">
                    <h3>Chapter 8</h3>
                    <p>Document Object Model (DOM)</p>
                </div>
                <div class="card" onclick="showChapter9Questions()">
                    <h3>Chapter 9</h3>
                    <p>Events in JavaScript</p>
                </div>
            </div>
        </div>
    `;
}

// ================= ABOUT =================
function showAbout() {
    content.innerHTML = `
        <div class="about-section">
            <h1>About This Project</h1>

            <div class="about-content">
                <div class="info-card">
                    <h3>Student Information</h3>
                    <p><strong>Name:</strong> Kaafia Abdullahi Bulle</p>
                    <p><strong>ID:</strong> C5240073</p>
                    <p><strong>Department:</strong> IT</p>
                    <p><strong>University:</strong> Jamhuuriya University</p>
                </div>

                <div class="info-card">
                    <h3>Project Purpose</h3>
                    <ul>
                        <li>Learn JavaScript Objects</li>
                        <li>Understand DOM manipulation</li>
                        <li>Practice JavaScript Events</li>
                    </ul>
                </div>
            </div>

            <button class="back-btn" onclick="showHome()">Back to Home</button>
        </div>
    `;
}

// ================= CHAPTERS LIST =================
function showChapters() {
    content.innerHTML = `
        <div class="chapters-section">
            <h1>JavaScript Chapters</h1>

            <div class="chapter-buttons">
                <button class="chapter-btn" onclick="showChapter7Questions()">
                    <span class="btn-number">7</span>
                    <span class="btn-text">Objects in JavaScript</span>
                </button>

                <button class="chapter-btn" onclick="showChapter8Questions()">
                    <span class="btn-number">8</span>
                    <span class="btn-text">Document Object Model (DOM)</span>
                </button>

                <button class="chapter-btn" onclick="showChapter9Questions()">
                    <span class="btn-number">9</span>
                    <span class="btn-text">Events in JavaScript</span>
                </button>
            </div>
        </div>
    `;
}

// ================= CHAPTER 7 =================
function showChapter7Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 7: Objects in JavaScript</h1>

            <div class="topic-section">
                <h2>Creating an Object</h2>
                <div class="code-example">
<pre><code>
let student = {
    name: "Kaafia",
    id: "C5240073",
    department: "IT"
};
</code></pre>
                </div>
            </div>

            <div class="topic-section">
                <h2>Accessing Object Properties</h2>
                <div class="code-example">
<pre><code>
console.log(student.name);
console.log(student["id"]);
</code></pre>
                </div>
            </div>

            <div class="topic-section">
                <h2>JSON Example</h2>
                <div class="code-example">
<pre><code>
let jsonData = JSON.stringify(student);
let jsObject = JSON.parse(jsonData);
</code></pre>
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">Back</button>
        </div>
    `;
}

// ================= CHAPTER 8 =================
function showChapter8Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 8: Document Object Model (DOM)</h1>

            <div class="topic-section">
                <h2>Selecting Elements</h2>
                <div class="code-example">
<pre><code>
document.getElementById("demo");
document.querySelector(".box");
document.querySelectorAll("p");
</code></pre>
                </div>
            </div>

            <div class="topic-section">
                <h2>DOM Manipulation Demo</h2>
                <div class="demo-area">
                    <p id="domText">Original Text</p>
                    <button class="demo-btn" onclick="changeText()">Change Text</button>
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">Back</button>
        </div>
    `;
}

function changeText() {
    document.getElementById("domText").innerText = "Text Changed using DOM!";
}

// ================= CHAPTER 9 =================
function showChapter9Questions() {
    content.innerHTML = `
        <div class="chapter-content">
            <h1>Chapter 9: Events in JavaScript</h1>

            <div class="topic-section">
                <h2>Click Event</h2>
                <div class="demo-area">
                    <button class="demo-btn" onclick="showMessage()">Click Me</button>
                    <p id="eventResult"></p>
                </div>
            </div>

            <div class="topic-section">
                <h2>Input Event</h2>
                <div class="demo-area">
                    <input type="text" class="demo-input" oninput="showInput(this.value)">
                    <p id="inputResult"></p>
                </div>
            </div>

            <button class="back-btn" onclick="showChapters()">Back</button>
        </div>
    `;
}

function showMessage() {
    document.getElementById("eventResult").innerText =
        "Button Click Event Activated!";
}

function showInput(value) {
    document.getElementById("inputResult").innerText =
        "You typed: " + value;
}

// ================= LOAD HOME ON START =================
showHome();
