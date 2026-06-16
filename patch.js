const fs = require('fs');

let code = fs.readFileSync('app.js', 'utf8');

const replacements = [
    [/<h2 class="mb-4">Analyzing Document<\/h2>/g, `<h2 class="mb-4">\${t('analyzingTitle')}</h2>`],
    [/Scanning For:/g, `\${t('scanningFor')}`],
    [/<span>Formatting<\/span> • <span style="color:var\(--accent-primary\)">Accuracy<\/span> • <span>Methodology<\/span>/g, "<span>${t('pillar1Title')}</span> • <span style=\"color:var(--accent-primary)\">${t('pillar2Title')}</span> • <span>${t('pillar3Title')}</span>"],
    [/The document showcases solid baseline knowledge\./g, "${t('aiReview1')}"],
    [/Formatting \(\$\{formattingScore\}%\) is \$\{formattingScore > 80 \? 'very well constructed' : 'lacking in some structural areas'\}\./g, "(${formattingScore}%) ${formattingScore > 80 ? t('aiReviewFmtGood') : t('aiReviewFmtBad')}."],
    [/Methodology \(\$\{methodologyScore\}%\) is \$\{methodologyScore > 80 \? 'extremely sound and well detailed' : 'a bit brief and could use more rigorous steps'\}\./g, "${t('aiReviewMeth')} (${methodologyScore}%) ${methodologyScore > 80 ? t('aiReviewMethGood') : t('aiReviewMethBad')}."],
    [/Overall factual accuracy is graded at \$\{accuracyScore\}%\./g, "${t('aiReviewAcc')} ${accuracyScore}%."],
    [/<h2>Analysis Complete<\/h2>/g, "<h2>${t('analysisComplete')}</h2>"],
    [/<p class="form-label mb-1 text-center">Overall Grade<\/p>/g, "<p class=\"form-label mb-1 text-center\">${t('overallGrade')}</p>"],
    [/renderScoreBar\('Formatting'/g, "renderScoreBar(t('pillar1Title')"],
    [/renderScoreBar\('Accuracy'/g, "renderScoreBar(t('pillar2Title')"],
    [/renderScoreBar\('Methodology'/g, "renderScoreBar(t('pillar3Title')"],
    [/>AI Feedback<\/p>/g, ">${t('aiFeedback')}</p>"],
    [/Close & Save<\/button>/g, "${t('closeSaveBtn')}</button>"],
    [/<h2>Detailed Evaluation<\/h2>/g, "<h2>${t('detailedEval')}</h2>"],
    [/>Reviewed<\/span>/g, ">${t('statusReviewed')}</span>"],
    [/Student: <span/g, "${t('studentLabel')} <span"],
    [/File: <span/g, "${t('fileLabel')} <span"],
    [/>Close Dialog<\/button>/g, ">${t('closeDialogBtn')}</button>"]
];

replacements.forEach(([regex, replacement]) => {
    code = code.replace(regex, replacement);
});

fs.writeFileSync('app.js', code);
console.log("Patch applied correctly.");
