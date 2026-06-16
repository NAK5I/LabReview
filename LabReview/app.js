// app.js - Логика для проверяющего преподавателя

const translations = {
    en: {
        welcomeTitle: "Welcome to LabReview",
        welcomeSubtitle: "Automated Laboratory Assessment",
        welcomeDesc: "This platform leverages advanced analysis to automatically review student laboratory and practical works. It evaluates submissions strictly based on the uploaded methodological guide (guidelines).",
        complianceDetails: "The system analyzes the document's structure, calculations, formatting of tables/figures/formulas, and completeness of conclusions based on the requirements defined in your uploaded guidelines.",
        howToUseLabel: "How to Use:",
        howToUseDesc: "Upload student submissions on the right panel. The system will process each file and generate a comprehensive compliance analysis and score.",
        badgeAi: "Automated AI Grading",
        badgeFeedback: "Instant Feedback",
        teacherPortal: "Teacher Portal",
        docSubmissions: "Document Submissions",
        docSubmissionsDesc: "Upload student practical works to receive automated analysis based on the active methodological guide.",
        uploadGuidelineBtn: "Upload Guidelines",
        currentGuideline: "Active Guidelines",
        uploadGuidelineTitle: "Upload Guidelines Document",
        removeGuidelineBtn: "Remove",
        settingsBtn: "API Settings",
        apiSettingsTitle: "Gemini API Configuration",
        apiKeyLabel: "Google Gemini API Key",
        apiKeyPlaceholder: "Paste your API key here...",
        saveSettingsBtn: "Save Settings",
        apiError: "Error communicating with AI. Check API key.",
        noGuidelineError: "Please upload Guidelines first before generating a report.",
        aiThinking: "Analyzing document...",
        uploadWorksBtn: "+ Upload Works",
        allUploads: "All Uploads",
        noDocs: "No documents uploaded yet. Click '+ Upload Works' to begin.",
        fileLabel: "File:",
        statusPending: "PENDING",
        statusReviewed: "REVIEWED",
        analyzeBtn: "Generate Report",
        viewReportBtn: "View Report",
        uploadTitle: "Upload Laboratory Document",
        studentNameLabel: "Student Name",
        studentNamePlaceholder: "e.g. Jane Doe",
        uploadFileTitle: "Upload File",
        uploadFileDesc: "Click to browse (TXT, PDF, DOCX)",
        selectedPrefix: "Selected: ",
        cancelBtn: "Cancel",
        addBtn: "Add to System",
        analyzingTitle: "Generating Report",
        scanningFor: "Scanning For:",
        guidelineCheckInProgress: "Checking structure, calculations, formatting, and content...",
        analysisComplete: "Report Generated",
        overallGrade: "Guideline Compliance",
        aiFeedback: "AI Feedback",
        closeSaveBtn: "Close & Save",
        detailedEval: "Detailed Evaluation",
        studentLabel: "Student:",
        closeDialogBtn: "Close Dialog",
        confirmDelete: "Are you sure you want to delete this report?",
        alertStudentName: "Please enter the student's name!",
        strengthsTitle: "Strengths Identified",
        weaknessesTitle: "Areas for Improvement",
        recommendationsTitle: "Recommendations"
    },
    ru: {
        welcomeTitle: "Добро пожаловать в LabReview",
        welcomeSubtitle: "Автоматизированная Оценка Лабораторных",
        welcomeDesc: "Платформа использует передовой анализ для автоматической проверки работ студентов. Оценка производится на строгом соответствии с загруженными методическими указаниями.",
        complianceDetails: "Система проверяет структуру документа, точность расчетов, оформление таблиц, графиков, формул и полноту выводов на соответствие требованиям загруженных методических указаний.",
        howToUseLabel: "Как использовать:",
        howToUseDesc: "Загрузите работы студентов на панели справа. Система обработает каждый файл и создаст подробный отчет с оценкой соответствия.",
        badgeAi: "Автоматическая ИИ Оценка",
        badgeFeedback: "Мгновенная Обратная Связь",
        teacherPortal: "Портал Преподавателя",
        docSubmissions: "Отправленные Документы",
        docSubmissionsDesc: "Загружайте практические работы для получения автоматического анализа на соответствие активным методическим указаниям.",
        uploadGuidelineBtn: "Методические материалы",
        currentGuideline: "Текущая Методичка",
        uploadGuidelineTitle: "Загрузка Методических Указаний",
        removeGuidelineBtn: "Удалить",
        settingsBtn: "Настройки API",
        apiSettingsTitle: "Конфигурация Gemini API",
        apiKeyLabel: "Ключ API (Google Gemini)",
        apiKeyPlaceholder: "Вставьте ваш ключ API здесь...",
        saveSettingsBtn: "Сохранить",
        apiError: "Ошибка связи с ИИ. Проверьте ключ API.",
        noGuidelineError: "Сначала загрузите методические материалы (методичку)!",
        aiThinking: "Анализ документа...",
        uploadWorksBtn: "+ Загрузить Работы",
        allUploads: "Все Загрузки",
        noDocs: "Документы пока не загружены. Нажмите '+ Загрузить Работы', чтобы начать.",
        fileLabel: "Файл:",
        statusPending: "В ОЖИДАНИИ",
        statusReviewed: "ПРОВЕРЕНО",
        analyzeBtn: "Формирование отчёта",
        viewReportBtn: "Посмотреть Отчет",
        uploadTitle: "Загрузить документ",
        studentNameLabel: "Имя Студента",
        studentNamePlaceholder: "напр., Иван Иванов",
        uploadFileTitle: "Загрузить Файл",
        uploadFileDesc: "Нажмите для выбора (TXT, PDF, DOCX)",
        selectedPrefix: "Выбрано: ",
        cancelBtn: "Отмена",
        addBtn: "Добавить в Систему",
        analyzingTitle: "Формирование отчёта",
        scanningFor: "Поиск по:",
        guidelineCheckInProgress: "Проверяем структуру, расчёты, оформление и содержание...",
        analysisComplete: "Отчёт сформирован",
        overallGrade: "Соответствие методичке",
        aiFeedback: "Отзыв ИИ",
        closeSaveBtn: "Закрыть и Сохранить",
        detailedEval: "Подробная Оценка",
        studentLabel: "Студент:",
        closeDialogBtn: "Закрыть Диалог",
        confirmDelete: "Вы уверены, что хотите удалить этот отчет?",
        alertStudentName: "Пожалуйста, введите имя студента!",
        strengthsTitle: "Сильные стороны",
        weaknessesTitle: "Зоны для улучшения",
        recommendationsTitle: "Рекомендации"
    },
    kk: {
        welcomeTitle: "LabReview-ге қош келдіңіз",
        welcomeSubtitle: "Автоматты Зертханалық Бағалау",
        welcomeDesc: "Бұл платформа студенттердің зертханалық жұмыстарын автоматты түрде тексеру үшін озық талдауды пайдаланады. Бағалау жүктелген әдістемелік нұсқаулыққа сәйкес жүргізіледі.",
        complianceDetails: "Жүйе жүктелген әдістемелік нұсқаулықтың талаптарына сәйкес құжаттың құрылымын, есептеулердің дәлдігін, кестелердің/графиктердің/формулалардың рәсімделуін және қорытындылардың толықтығын тексеріп, нәтиже береді.",
        howToUseLabel: "Қалай қолдануға болады:",
        howToUseDesc: "Оң жақ панельге студенттердің жұмыстарын жүктеңіз. Жүйе әр файлды өңдеп, әдістемелік нұсқаулыққа сәйкестік бағасымен бірге толық есеп жасайды.",
        badgeAi: "Автоматты ЖИ Бағалауы",
        badgeFeedback: "Лездік Кері Байланыс",
        teacherPortal: "Оқытушы Порталы",
        docSubmissions: "Жіберілген Құжаттар",
        docSubmissionsDesc: "Әдістемелік нұсқаулыққа сәйкестігін автоматты түрде талдау үшін студенттердің жұмыстарын жүктеңіз.",
        uploadGuidelineBtn: "Әдістемелік нұсқауды жүктеу",
        currentGuideline: "Ағымдағы әдістемелік нұсқау",
        uploadGuidelineTitle: "Әдістемелік нұсқауды жүктеу",
        removeGuidelineBtn: "Өшіру",
        settingsBtn: "API Баптаулары",
        apiSettingsTitle: "Gemini API Конфигурациясы",
        apiKeyLabel: "Google Gemini API Кілт",
        apiKeyPlaceholder: "API кілтіңізді осында қойыңыз...",
        saveSettingsBtn: "Сақтау",
        apiError: "ЖИ-мен байланыс қатесі. API кілтін тексеріңіз.",
        noGuidelineError: "Есепті жасамас бұрын әдістемелік нұсқауды жүктеңіз.",
        aiThinking: "Құжатты талдауда...",
        uploadWorksBtn: "+ Жұмыстарды Жүктеу",
        allUploads: "Барлық Жүктеулер",
        noDocs: "Әлі құжаттар жүктелмеген. Бастау үшін '+ Жұмыстарды Жүктеу' түймесін басыңыз.",
        fileLabel: "Файл:",
        statusPending: "КҮТУДЕ",
        statusReviewed: "ТЕКСЕРІЛДІ",
        analyzeBtn: "Есепті қалыптастыру",
        viewReportBtn: "Есепті Көру",
        uploadTitle: "Зертханалық Құжатты Жүктеу",
        studentNameLabel: "Студенттің Аты",
        studentNamePlaceholder: "мыс., Аружан Серік",
        uploadFileTitle: "Файлды Жүктеу",
        uploadFileDesc: "Таңдау үшін басыңыз (TXT, PDF, DOCX)",
        selectedPrefix: "Таңдалды: ",
        cancelBtn: "Болдырмау",
        addBtn: "Жүйеге Қосу",
        analyzingTitle: "Есеп қалыптастырылуда",
        scanningFor: "Ізденуде:",
        guidelineCheckInProgress: "Құрылымын, есептеулерін, рәсімделуін және мазмұнын тексеру...",
        analysisComplete: "Есеп қалыптастырылды",
        overallGrade: "Әдістемелікке сәйкестік",
        aiFeedback: "ЖИ Пікірі",
        closeSaveBtn: "Жабу және Сақтау",
        detailedEval: "Толық Бағалау",
        studentLabel: "Студент:",
        closeDialogBtn: "Диалогты Жабу",
        confirmDelete: "Бұл есепті өшіргіңіз келетініне сенімдісіз бе?",
        alertStudentName: "Студенттің атын енгізіңіз!",
        strengthsTitle: "Күшті жақтары",
        weaknessesTitle: "Жақсартуды қажет ететін аймақтар",
        recommendationsTitle: "Ұсыныстар"
    }
};

let currentLang = localStorage.getItem('lab_app_lang') || 'en';
function t(key) { return translations[currentLang][key] || translations['en'][key]; }

window.changeLang = function (lang) {
    currentLang = lang;
    localStorage.setItem('lab_app_lang', lang);
    render();
}

// --- тестовая база данных ---
const storageKey = 'lab_app_data_teacher_only';

const defaultData = {
    submissions: [], // { id, studentName, content, fileName, status, scores, review }
    guideline: null,
    apiKey: ""
};

let db = JSON.parse(localStorage.getItem(storageKey)) || defaultData;

function saveDb() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(db));
    } catch (e) {
        console.error("Storage error:", e);
        alert("Ошибка: файл слишком большой! Попробуйте загрузить файл меньшего размера.");
    }
}

// --- dom element ---
const appContainer = document.getElementById('app');

// --- движок рендеринга ---
function render() {
    appContainer.innerHTML = ''; // Clear

    renderNavbar(appContainer);

    const splitLayout = document.createElement('div');
    splitLayout.className = 'split-layout';

    const leftSide = document.createElement('div');
    leftSide.className = 'left-side';
    leftSide.innerHTML = `
        <div class="glass-panel sticky animate-fade-in">
            <h1 class="text-gradient mb-2">${t('welcomeTitle')}</h1>
            <h3 class="mb-4" style="color: var(--text-primary);">${t('welcomeSubtitle')}</h3>
            <p class="mb-4">${t('welcomeDesc')}</p>
            <p class="mb-8" style="color: var(--text-secondary); line-height: 1.8;">${t('complianceDetails')}</p>
            <p class="mb-8"><strong>${t('howToUseLabel')}</strong> ${t('howToUseDesc')}</p>
            <div class="flex items-center gap-2 flex-wrap">
                <span class="role-badge teacher">${t('badgeAi')}</span>
                <span class="role-badge student">${t('badgeFeedback')}</span>
            </div>
        </div>
    `;

    const rightSide = document.createElement('div');
    rightSide.className = 'right-side';

    renderTeacherDashboard(rightSide);

    splitLayout.appendChild(leftSide);
    splitLayout.appendChild(rightSide);
    appContainer.appendChild(splitLayout);
}

function renderNavbar(container) {
    const nav = document.createElement('nav');
    nav.className = 'glass-panel navbar animate-fade-in mb-8';
    nav.innerHTML = `
        <div class="navbar-brand">
            <span class="text-gradient">Lab</span>Review
        </div>
        <div class="flex items-center gap-4">
            <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick="showSettingsModal()">⚙️ ${t('settingsBtn')}</button>
            <select class="form-control" style="width: auto; padding: 0.5rem; cursor: pointer; color: var(--text-primary); font-weight: 600;" onchange="changeLang(this.value)">
                <option value="en" ${currentLang === 'en' ? 'selected' : ''}>ENG</option>
                <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>РУС</option>
                <option value="kk" ${currentLang === 'kk' ? 'selected' : ''}>ҚАЗ</option>
            </select>
            <span class="role-badge" style="color: var(--accent-primary); border: 1px solid var(--accent-primary);">${t('teacherPortal')}</span>
        </div>
    `;
    container.appendChild(nav);
}

// ---------------- окно преподавателя ----------------

function renderTeacherDashboard(container) {
    const dashboard = document.createElement('div');
    dashboard.className = 'animate-fade-in w-full';

    // секция шапки
    let html = `
        <div class="flex justify-between items-center mb-8">
            <div>
                <h2>${t('docSubmissions')}</h2>
                <p>${t('docSubmissionsDesc')}</p>
            </div>
            <div class="flex gap-2">
                <button class="btn btn-secondary" onclick="showGuidelineModal()">${t('uploadGuidelineBtn')}</button>
                <button class="btn btn-primary" onclick="showUploadModal()">${t('uploadWorksBtn')}</button>
            </div>
        </div>
        
        ${db.guideline ? `
        <div class="glass-panel w-full mb-4" style="padding: 1rem; border-left: 4px solid var(--accent-secondary);">
            <div class="flex justify-between items-center">
                <div>
                    <h4 style="margin-bottom: 0.2rem; color: var(--text-primary);">${t('currentGuideline')}</h4>
                    <p style="font-size: 0.9rem; margin: 0;">${db.guideline.fileName}</p>
                </div>
                <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick="removeGuideline()">${t('removeGuidelineBtn')}</button>
            </div>
        </div>
        ` : ''}

        <div class="glass-panel w-full">
            <h3 class="mb-4">${t('allUploads')}</h3>
            <div class="flex flex-col gap-4">
    `;

    if (db.submissions.length === 0) {
        html += `<p class="text-center py-8">${t('noDocs')}</p>`;
    } else {
        [...db.submissions].reverse().forEach(sub => {
            const statusClass = sub.status === 'pending' ? 'status-pending' : 'status-reviewed';
            const statusText = sub.status === 'pending' ? t('statusPending') : t('statusReviewed');

            html += `
                <div class="glass-panel" style="padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.7);">
                    <div>
                        <h3 style="margin-bottom: 0.25rem;">${sub.studentName}</h3>
                        <p style="font-size: 0.9rem; margin: 0;">${t('fileLabel')} <span style="color:var(--text-primary); font-weight: 500;">${sub.fileName}</span></p>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="status ${statusClass}">${statusText}</span>
                        ${sub.status === 'pending'
                    ? `<button class="btn btn-primary" onclick="reviewSubmission(${sub.id})">${t('analyzeBtn')}</button>`
                    : `<button class="btn btn-secondary" onclick="viewReport(${sub.id})">${t('viewReportBtn')}</button>
                               <button class="btn" style="background:var(--accent-danger); color:white; padding: 0.5rem;" onclick="deleteSubmission(${sub.id})">🗑️</button>`
                }
                    </div>
                </div>
            `;
        });
    }

    html += `
            </div>
        </div>

        <!-- Upload Modal -->
        <div id="uploadModal" class="modal-overlay">
            <div class="glass-panel modal-content">
                <h2 class="mb-4">${t('uploadTitle')}</h2>
                <div class="form-group">
                    <label class="form-label">${t('studentNameLabel')}</label>
                    <input type="text" id="studentNameInput" class="form-control" placeholder="${t('studentNamePlaceholder')}">
                </div>
                <div class="file-drop-area mb-4">
                    <div class="file-icon">📄</div>
                    <h3>${t('uploadFileTitle')}</h3>
                    <p>${t('uploadFileDesc')}</p>
                    <input type="file" id="fileUpload" onchange="handleFileSelect(event)">
                </div>
                <div id="selectedFileName" class="mb-4 text-center" style="font-weight:bold; color:var(--accent-secondary);"></div>
                <div class="flex gap-4 justify-between mt-4">
                    <button class="btn btn-secondary" onclick="hideModal('uploadModal')">${t('cancelBtn')}</button>
                    <button class="btn btn-primary" id="submitBtn" disabled onclick="submitUpload()">${t('addBtn')}</button>
                </div>
            </div>
        </div>

        <!-- Review Modal -->
        <div id="reviewModal" class="modal-overlay">
            <div class="glass-panel modal-content" id="reviewModalContent">
                <!-- Populated dynamically -->
            </div>
        </div>

        <!-- Guideline Modal -->
        <div id="guidelineModal" class="modal-overlay">
            <div class="glass-panel modal-content">
                <h2 class="mb-4">${t('uploadGuidelineTitle')}</h2>
                <div class="file-drop-area mb-4">
                    <div class="file-icon">📚</div>
                    <h3>${t('uploadFileTitle')}</h3>
                    <p>${t('uploadFileDesc')}</p>
                    <input type="file" id="guidelineUpload" onchange="handleGuidelineSelect(event)">
                </div>
                <div id="selectedGuidelineName" class="mb-4 text-center" style="font-weight:bold; color:var(--accent-secondary);"></div>
                <div class="flex gap-4 justify-between mt-4">
                    <button class="btn btn-secondary" onclick="hideModal('guidelineModal')">${t('cancelBtn')}</button>
                    <button class="btn btn-primary" id="submitGuidelineBtn" disabled onclick="submitGuideline()">${t('addBtn')}</button>
                </div>
            </div>
        </div>

        <!-- Settings Modal -->
        <div id="settingsModal" class="modal-overlay">
            <div class="glass-panel modal-content">
                <h2 class="mb-4">${t('apiSettingsTitle')}</h2>
                <div class="form-group mb-4">
                    <label class="form-label">${t('apiKeyLabel')}</label>
                    <input type="password" id="apiKeyInput" class="form-control" placeholder="${t('apiKeyPlaceholder')}" value="${db.apiKey || ''}">
                    <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem;">Get a free API key at <a href="https://aistudio.google.com/" target="_blank" style="color: var(--accent-primary);">Google AI Studio</a>.</p>
                </div>
                <div class="flex justify-end mt-4">
                    <button class="btn btn-secondary mr-2" onclick="hideModal('settingsModal')">${t('cancelBtn')}</button>
                    <button class="btn btn-primary" onclick="saveSettings()">${t('saveSettingsBtn')}</button>
                </div>
            </div>
        </div>
    `;

    dashboard.innerHTML = html;
    container.appendChild(dashboard);
}


// --- Глобальные действия и логика ---

window.showSettingsModal = function () {
    showModal('settingsModal');
}

window.saveSettings = function () {
    const key = document.getElementById('apiKeyInput').value.trim();
    db.apiKey = key;
    saveDb();
    hideModal('settingsModal');
}

window.showModal = function (id) {
    document.getElementById(id).classList.add('active');
}

window.hideModal = function (id) {
    document.getElementById(id).classList.remove('active');
}

window.deleteSubmission = function (id) {
    if (confirm(t('confirmDelete'))) {
        db.submissions = db.submissions.filter(s => s.id !== id);
        saveDb();
        render();
    }
}

// действие загрузки
let currentFileContentMock = "";
let currentFileNameMock = "";

window.showUploadModal = function () {
    document.getElementById('studentNameInput').value = '';
    document.getElementById('fileUpload').value = '';
    document.getElementById('selectedFileName').innerText = '';
    document.getElementById('submitBtn').disabled = true;
    currentFileContentMock = "";
    showModal('uploadModal');
}

window.handleFileSelect = function (e) {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('selectedFileName').innerText = t('selectedPrefix') + file.name;
    document.getElementById('submitBtn').disabled = false;
    currentFileNameMock = file.name;

    const reader = new FileReader();
    reader.onload = function (evt) {
        // Ограничиваем размер сохраняемого текста, чтобы не превысить лимит localStorage
        currentFileContentMock = evt.target.result ? evt.target.result.substring(0, 100000) : "";
    }
    reader.readAsText(file);
}

window.submitUpload = function () {
    const studentName = document.getElementById('studentNameInput').value.trim();
    if (!studentName) return alert(t('alertStudentName'));

    const newId = db.submissions.length > 0 ? Math.max(...db.submissions.map(s => s.id)) + 1 : 1;

    // запасной вариант
    if (!currentFileContentMock || currentFileContentMock.length < 10) {
        currentFileContentMock = "Mock Data: This experiment successfully calculated the primary variables using the required algorithms. However, some formatting issues were present in the tables, and the methodology section could be expanded.";
    }

    db.submissions.push({
        id: newId,
        studentName: studentName,
        fileName: currentFileNameMock,
        content: currentFileContentMock,
        status: 'pending',
        scores: null,
        review: null
    });

    saveDb();
    hideModal('uploadModal');
    render();
}

let currentGuidelineFileMock = "";
let currentGuidelineNameMock = "";

window.showGuidelineModal = function () {
    document.getElementById('guidelineUpload').value = '';
    document.getElementById('selectedGuidelineName').innerText = '';
    document.getElementById('submitGuidelineBtn').disabled = true;
    currentGuidelineFileMock = "";
    showModal('guidelineModal');
}

window.handleGuidelineSelect = function (e) {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById('selectedGuidelineName').innerText = t('selectedPrefix') + file.name;
    document.getElementById('submitGuidelineBtn').disabled = false;
    currentGuidelineNameMock = file.name;

    const reader = new FileReader();
    reader.onload = function (evt) {
        // Ограничиваем размер сохраняемого текста, чтобы не превысить лимит localStorage
        currentGuidelineFileMock = evt.target.result ? evt.target.result.substring(0, 100000) : "";
    }
    reader.readAsText(file);
}

window.submitGuideline = function () {
    db.guideline = {
        fileName: currentGuidelineNameMock,
        content: currentGuidelineFileMock
    };
    saveDb();
    hideModal('guidelineModal');
    render();
}

window.removeGuideline = function () {
    db.guideline = null;
    saveDb();
    render();
}

// логика категорий 
function renderScoreBar(label, score) {
    let color = 'var(--accent-success)';
    if (score < 80) color = 'var(--accent-warning)';
    if (score < 60) color = 'var(--accent-danger)';

    return `
        <div class="mb-2">
            <div class="flex justify-between" style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
                <span>${label}</span>
                <span style="color: ${color}">${score}%</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden;">
                <div style="width: ${score}%; height: 100%; background: ${color}; border-radius: 4px; transition: width 1s ease;"></div>
            </div>
        </div>
    `;
}

// генерация отчёта с помощью ии
window.reviewSubmission = async function (submissionId) {
    const sub = db.submissions.find(s => s.id === submissionId);
    if (!sub) return;

    if (!db.guideline || !db.guideline.content) {
        alert(t('noGuidelineError'));
        return;
    }

    if (!db.apiKey) {
        showSettingsModal();
        return;
    }

    showModal('reviewModal');
    const contentDiv = document.getElementById('reviewModalContent');

    contentDiv.innerHTML = `
        <div class="text-center py-8">
            <h2 class="mb-4">${t('aiThinking')}</h2>
            <div style="font-size: 3rem; animation: float 2s infinite ease-in-out;">🤖</div>
            <p class="mt-4" style="color: var(--accent-secondary)">${t('scanningFor')}</p>
            <div class="flex justify-center gap-4 mt-2 mb-4" style="font-weight: 600; font-size: 0.9rem; color: var(--accent-primary);">
                <span>🔍 ${t('guidelineCheckInProgress')}</span>
            </div>
        </div>
    `;

    try {
        const langName = currentLang === 'ru' ? 'Russian' : currentLang === 'kk' ? 'Kazakh' : 'English';
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${encodeURIComponent(db.apiKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `
You are a strict but fair university professor grading a student's laboratory/practical work against a methodological guide.
You must be highly specific, citing exact rules, guidelines, or formatting requirements from the guide, and pinpointing exact sections, paragraphs, tables, or calculations in the student's submission that violate or follow them. Avoid generic comments!

Methodological Guide:
"""
${db.guideline.content}
"""

Student Submission:
"""
${sub.content}
"""

Analyze the submission against the guide and output ONLY a valid JSON object with the following structure (no markdown formatting, no code blocks, just raw JSON).
CRITICAL: All text values inside the JSON (summary, strengths, weaknesses, recommendations) MUST be written in ${langName}.

JSON structure:
{
  "score": (integer 0-100, representing overall compliance with the methodological guide),
  "summary": "(A brief 2-3 sentence overview of how well the student's work aligns with the methodological guide in ${langName})",
  "strengths": [
    "(concrete compliance strength 1: cite the specific guideline rule met and where/how it is implemented in the student's work)",
    "(concrete compliance strength 2: ...)"
  ],
  "weaknesses": [
    "(specific guideline deviation 1: describe the exact rule violated, what was expected, and point out the exact section, table, formula, or text in the student's submission that is incorrect/missing)",
    "(specific guideline deviation 2: ...)"
  ],
  "recommendations": [
    "(detailed recommendation 1: provide a clear step-by-step action plan to resolve weakness 1, referencing the specific guide requirements)",
    "(detailed recommendation 2: ...)"
  ]
}
`
                    }]
                }],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const aiResultText = data.candidates[0].content.parts[0].text.replace(/```json/g, '').replace(/```/g, '').trim();
        const aiResult = JSON.parse(aiResultText);
        
        const overallScore = aiResult.score !== undefined ? aiResult.score : 0;

        const renderList = (items) => items.map(i => `<li>${i}</li>`).join('');

        const detailedReviewHTML = `
            <div style="margin-bottom: 1rem;">
                <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">${aiResult.summary}</p>
            </div>
            
            ${(aiResult.strengths && aiResult.strengths.length > 0) ? `
            <div style="margin-bottom: 0.75rem;">
                <strong style="color: var(--accent-success); font-size: 0.9rem;">✓ ${t('strengthsTitle')}</strong>
                <ul style="list-style: disc inside; font-size: 0.9rem; margin-top: 0.25rem; color: var(--text-secondary);">
                    ${renderList(aiResult.strengths)}
                </ul>
            </div>` : ''}

            ${(aiResult.weaknesses && aiResult.weaknesses.length > 0) ? `
            <div style="margin-bottom: 0.75rem;">
                <strong style="color: var(--accent-danger); font-size: 0.9rem;">✗ ${t('weaknessesTitle')}</strong>
                <ul style="list-style: disc inside; font-size: 0.9rem; margin-top: 0.25rem; color: var(--text-secondary);">
                    ${renderList(aiResult.weaknesses)}
                </ul>
            </div>` : ''}

            ${(aiResult.recommendations && aiResult.recommendations.length > 0) ? `
            <div>
                <strong style="color: var(--accent-primary); font-size: 0.9rem;">💡 ${t('recommendationsTitle')}</strong>
                <ul style="list-style: disc inside; font-size: 0.9rem; margin-top: 0.25rem; color: var(--text-secondary);">
                    ${renderList(aiResult.recommendations)}
                </ul>
            </div>` : ''}
        `;

        sub.scores = {
            overall: overallScore
        };
        sub.review = detailedReviewHTML;
        sub.status = 'reviewed';
        saveDb();

        let scoreClass = 'high';
        if (overallScore < 80) scoreClass = 'med';
        if (overallScore < 70) scoreClass = 'low';

        contentDiv.innerHTML = `
            <h2>${t('analysisComplete')}</h2>
            
            <div class="flex flex-col gap-4 mt-4 w-full">
                <!-- Overall Score and Compliance Progress Bar -->
                <div class="result-panel m-0 w-full flex flex-col justify-center items-center" style="border-radius: var(--border-radius-sm); padding: 1.5rem; text-align: center;">
                    <p class="form-label mb-1 text-center">${t('overallGrade')}</p>
                    <div class="score ${scoreClass}" style="font-size: 3.5rem; font-weight: 700; margin-bottom: 0.5rem;">${overallScore}%</div>
                    <div style="width: 80%; max-width: 300px; height: 10px; background: rgba(0,0,0,0.05); border-radius: 5px; overflow: hidden; margin-top: 0.5rem;">
                        <div style="width: ${overallScore}%; height: 100%; background: ${scoreClass === 'high' ? 'var(--accent-success)' : scoreClass === 'med' ? 'var(--accent-warning)' : 'var(--accent-danger)'}; border-radius: 5px; transition: width 1s ease;"></div>
                    </div>
                </div>
            </div>
            
            <div class="glass-panel mt-4" style="padding: 1rem; border-left: 4px solid var(--accent-primary);">
                <p class="text-primary" style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">${t('aiFeedback')}</p>
                <div style="font-size: 0.95rem;">${sub.review}</div>
            </div>
            
            <div class="flex justify-end mt-4">
                <button class="btn btn-primary" onclick="hideModal('reviewModal'); render();">${t('closeSaveBtn')}</button>
            </div>
        `;
    } catch (e) {
        console.error(e);
        contentDiv.innerHTML = `
            <div class="text-center py-8">
                <h2 class="mb-4" style="color: var(--accent-danger);">Error</h2>
                <p>${t('apiError')}</p>
                <p style="font-size: 0.8rem; margin-top: 1rem; color: var(--text-secondary);">${e.message}</p>
                <button class="btn btn-primary mt-4" onclick="hideModal('reviewModal')">${t('closeDialogBtn')}</button>
            </div>
        `;
    }
}

window.viewReport = function (submissionId) {
    const sub = db.submissions.find(s => s.id === submissionId);
    if (!sub) return;

    showModal('reviewModal');

    let scoreClass = 'high';
    if (sub.scores.overall < 80) scoreClass = 'med';
    if (sub.scores.overall < 70) scoreClass = 'low';

    document.getElementById('reviewModalContent').innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h2>${t('detailedEval')}</h2>
            <span class="status status-reviewed">${t('statusReviewed')}</span>
        </div>
        <p class="form-label">${t('studentLabel')} <span style="color:var(--text-primary); font-weight: 600;">${sub.studentName}</span></p>
        <p class="form-label">${t('fileLabel')} <span style="color:var(--text-primary); font-weight: 600;">${sub.fileName}</span></p>
        
        <div class="flex flex-col gap-4 mt-6 w-full">
            <div class="result-panel m-0 w-full flex flex-col justify-center items-center" style="border-radius: var(--border-radius-sm); padding: 1.5rem; text-align: center;">
                <p class="form-label mb-1 text-center">${t('overallGrade')}</p>
                <div class="score ${scoreClass}" style="font-size: 3.5rem; font-weight: 700; margin-bottom: 0.5rem;">${sub.scores.overall}%</div>
                <div style="width: 80%; max-width: 300px; height: 10px; background: rgba(0,0,0,0.05); border-radius: 5px; overflow: hidden; margin-top: 0.5rem;">
                    <div style="width: ${sub.scores.overall}%; height: 100%; background: ${scoreClass === 'high' ? 'var(--accent-success)' : scoreClass === 'med' ? 'var(--accent-warning)' : 'var(--accent-danger)'}; border-radius: 5px; transition: width 1s ease;"></div>
                </div>
            </div>
        </div>
        
        <div class="glass-panel mt-4" style="padding: 1rem; border-left: 4px solid var(--accent-primary);">
            <p class="text-primary" style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">${t('aiFeedback')}</p>
            <div style="font-size: 0.95rem;">${sub.review}</div>
        </div>
        
        <div class="flex justify-end mt-4">
            <button class="btn btn-secondary" onclick="hideModal('reviewModal')">${t('closeDialogBtn')}</button>
        </div>
    `;
}

// --- запуск ---
render();
