const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const brokenHeaderRegex = /<div class="brand-logo header-logo">\s*<\/nav>/;
const fixedHeader = `<div class="brand-logo header-logo">
          <span class="somos">somos</span>
          <span class="livo">LIVO</span>
          <div class="line"></div>
          <span class="tagline">conveniência inteligente</span>
        </div>
        <ul class="nav-links">
          <li><a href="#como-funciona">Como Funciona</a></li>
          <li><a href="#beneficios-gestor">Benefícios</a></li>
          <li><a href="#linhas">Nossas Linhas</a></li>
          <li><a href="#faq">Dúvidas</a></li>
        </ul>
        <a href="#contato" class="nav-cta">Levar para meu espaço</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>`;

html = html.replace(brokenHeaderRegex, fixedHeader);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed header');
