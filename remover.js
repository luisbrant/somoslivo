const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove A LIVO em Números
const numbersRegex = /<!-- NOVO: Números -->\s*<section class="numbers-section" id="numeros">[\s\S]*?<\/section>/;
html = html.replace(numbersRegex, '');

// 2. Remove Por Que Escolher a LIVO
const comparativoRegex = /<section class="comparison-table-section" id="comparativo">[\s\S]*?<\/section>/;
html = html.replace(comparativoRegex, '');

// 3. Remove Veja a LIVO em Funcionamento (Deixar para o futuro - I will comment it out so it's easy to bring back, or just remove. The prompt says "Deixar para futuro", commenting it out is a nice touch)
const galeriaRegex = /(<!-- NOVO: Galeria de Fotos e Comparativo -->\s*<section class="real-photos" id="galeria">[\s\S]*?<\/section>)/;
html = html.replace(galeriaRegex, '<!-- FUTURO: \n$1 \n-->');

// 4. Remove FAQ item about security
const faqSecurityRegex = /<div class="faq-item">\s*<div class="faq-question">\s*<span>Como funciona a questão da segurança e prevenção de furtos\?<\/span>[\s\S]*?<\/div>\s*<\/div>/;
html = html.replace(faqSecurityRegex, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Modifications completed.');
