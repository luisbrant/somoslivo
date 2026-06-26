const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. SEO
html = html.replace(
  /<title>.*?<\/title>/s,
  '<title>LIVO | Geladeiras Inteligentes e Minimercados Autônomos</title>'
);
html = html.replace(
  /<meta name="description" content=".*?" \/>/s,
  '<meta name="description" content="Instalação gratuita de geladeiras inteligentes e minimercados autônomos para condomínios, empresas, academias e coworkings." />'
);
html = html.replace(
  /<meta name="keywords" content=".*?" \/>/s,
  '<meta name="keywords" content="minimercado autônomo, mercado autônomo, geladeira inteligente, conveniência para condomínio, mercado 24 horas, minimercado para condomínio" />'
);

// 2. Hero Section
const newHero = `
  <section class="hero">
    <div class="container">
      <div class="hero-content-wrapper">
        <div class="hero-text">
          <h1>Conveniência Inteligente 24h para Condomínios e Empresas</h1>
          <p class="hero-subtitle">
            Instalamos gratuitamente geladeiras inteligentes e minimercados autônomos. Operação completa, reposição automatizada e experiência premium para seus usuários.
          </p>
          <div class="hero-buttons">
            <a href="#contato" class="btn-primary">
              Solicitar Proposta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://wa.me/5511999999999?text=Olá!%20Quero%20conhecer%20a%20solução%20LIVO." class="btn-secondary" target="_blank" rel="noopener">Falar no WhatsApp</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-mockup-placeholder animate-on-scroll">
            <span>[Espaço reservado para mockup da Geladeira LIVO em funcionamento]</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NOVO: Como a LIVO Funciona -->
  <section class="how-it-works" id="como-funciona">
    <div class="container">
      <div class="section-header">
        <h2>Como a LIVO Funciona</h2>
        <p>Praticidade do início ao fim, sem custos para você.</p>
      </div>
      <div class="steps-grid">
        <div class="step-card animate-on-scroll">
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h3>Passo 1:<br>Instalação Gratuita</h3>
          <p>Nossa equipe realiza toda a implantação.</p>
        </div>
        <div class="step-card animate-on-scroll" style="transition-delay: 0.1s;">
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <h3>Passo 2:<br>Operação Completa</h3>
          <p>Reposição, monitoramento e suporte realizados pela LIVO.</p>
        </div>
        <div class="step-card animate-on-scroll" style="transition-delay: 0.2s;">
          <div class="step-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <h3>Passo 3:<br>Conveniência 24h</h3>
          <p>Moradores e colaboradores compram quando quiserem.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- NOVO: Prova Social -->
  <section class="social-proof" id="quem-confia">
    <div class="container">
      <div class="section-header">
        <h2>Quem Confia na LIVO</h2>
        <p>A escolha de condomínios e empresas que valorizam a experiência de seus usuários.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card animate-on-scroll">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">A instalação foi super rápida e o funcionamento é perfeito. Os moradores adoraram a praticidade de ter um minimercado no prédio, e eu não tenho nenhuma dor de cabeça com a operação.</p>
          <div class="testimonial-author">
            <div class="author-photo placeholder-photo"></div>
            <div class="author-info">
              <strong>[Nome do Cliente]</strong>
              <span>Síndico, [Nome do Condomínio]</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card animate-on-scroll" style="transition-delay: 0.1s;">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">Foi a melhor decisão para o nosso escritório. Nossos colaboradores têm opções de lanches saudáveis a qualquer hora, o que melhorou muito o clima e a produtividade no ambiente de trabalho.</p>
          <div class="testimonial-author">
            <div class="author-photo placeholder-photo"></div>
            <div class="author-info">
              <strong>[Nome do Cliente]</strong>
              <span>Facilities Manager, [Empresa]</span>
            </div>
          </div>
        </div>
        <div class="testimonial-card animate-on-scroll" style="transition-delay: 0.2s;">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">A reposição é sempre pontual e a variedade de produtos atende muito bem o perfil do nosso público. A operação da LIVO é realmente redonda e impecável.</p>
          <div class="testimonial-author">
            <div class="author-photo placeholder-photo"></div>
            <div class="author-info">
              <strong>[Nome do Cliente]</strong>
              <span>Gestor, [Coworking]</span>
            </div>
          </div>
        </div>
      </div>
      <div class="logos-grid animate-on-scroll">
        <div class="logo-placeholder"><span>[Logo Cliente]</span></div>
        <div class="logo-placeholder"><span>[Logo Cliente]</span></div>
        <div class="logo-placeholder"><span>[Logo Cliente]</span></div>
        <div class="logo-placeholder"><span>[Logo Cliente]</span></div>
        <div class="logo-placeholder"><span>[Logo Cliente]</span></div>
      </div>
    </div>
  </section>

  <!-- NOVO: Números -->
  <section class="numbers-section" id="numeros">
    <div class="container">
      <div class="section-header white-text">
        <h2>A LIVO em Números</h2>
      </div>
      <div class="numbers-grid" id="counters-grid">
        <div class="number-item">
          <div class="number-value" data-target="500">+<span class="count">0</span></div>
          <div class="number-label">Instalações</div>
        </div>
        <div class="number-item">
          <div class="number-value" data-target="50">+<span class="count">0</span>k</div>
          <div class="number-label">Usuários Ativos</div>
        </div>
        <div class="number-item">
          <div class="number-value" data-target="200">+<span class="count">0</span>k</div>
          <div class="number-label">Compras Realizadas</div>
        </div>
        <div class="number-item">
          <div class="number-value" data-target="99"><span class="count">0</span>%</div>
          <div class="number-label">Satisfação</div>
        </div>
      </div>
    </div>
  </section>
`;

const oldHeroRegex = /<section class="hero">.*?<\/section>/s;
html = html.replace(oldHeroRegex, newHero);

// 3. New Benefits Section
const newBenefits = `
  <section class="common-benefits" id="beneficios">
    <div class="container">
      <div class="benefits-header section-header">
        <span class="eyebrow" style="color: var(--beige);">Benefícios</span>
        <h2>Tudo o que você precisa, sem complicações</h2>
        <p>A experiência completa da LIVO pensada para entregar valor real ao seu espaço.</p>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <h3>Implantação Gratuita</h3>
          <p>Sem custos de instalação, equipamentos ou mensalidades. Nós assumimos o investimento inicial.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
          <h3>Operação Completa</h3>
          <p>Limpeza, manutenção e gestão do dia a dia por nossa conta. Zero trabalho para sua equipe.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          <h3>Reposição Automatizada</h3>
          <p>Sistema inteligente que garante prateleiras sempre cheias com os produtos que mais vendem.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h4l2-9 5 18 3-9h6"></path></svg>
          <h3>Monitoramento Inteligente</h3>
          <p>Controle de estoque, vendas e validade dos produtos em tempo real via sistema proprietário.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <h3>Segurança Total</h3>
          <p>Câmeras integradas e visão computacional auditablem todas as compras com precisão.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
          <h3>Relatórios e Analytics</h3>
          <p>Acompanhe o desempenho, preferências de consumo e repasses financeiros com transparência.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <h3>Atendimento Especializado</h3>
          <p>Suporte rápido e dedicado aos usuários para garantir a melhor experiência de compra.</p>
        </div>
        <div class="benefit-card animate-on-scroll">
          <svg class="benefit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          <h3>Conveniência 24h</h3>
          <p>Disponibilidade ininterrupta, todos os dias da semana, sem filas e sem sair de casa ou do escritório.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- NOVO: Galeria de Fotos e Comparativo -->
  <section class="real-photos" id="galeria">
    <div class="container">
      <div class="section-header">
        <h2>Veja a LIVO em Funcionamento</h2>
        <p>Soluções adaptadas perfeitamente ao seu ambiente.</p>
      </div>
      <div class="photos-grid">
        <div class="photo-card animate-on-scroll">
          <div class="photo-placeholder"><span>[Foto Condomínio]</span></div>
          <h3>Condomínios</h3>
        </div>
        <div class="photo-card animate-on-scroll">
          <div class="photo-placeholder"><span>[Foto Empresa]</span></div>
          <h3>Empresas</h3>
        </div>
        <div class="photo-card animate-on-scroll">
          <div class="photo-placeholder"><span>[Foto Academia]</span></div>
          <h3>Academias</h3>
        </div>
        <div class="photo-card animate-on-scroll">
          <div class="photo-placeholder"><span>[Foto Coworking]</span></div>
          <h3>Coworkings</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="comparison-table-section" id="comparativo">
    <div class="container">
      <div class="section-header">
        <h2>Por Que Escolher a LIVO</h2>
        <p>A evolução da conveniência, lado a lado com o mercado.</p>
      </div>
      <div class="table-responsive animate-on-scroll">
        <table class="livo-table">
          <thead>
            <tr>
              <th>Critérios</th>
              <th class="col-livo">LIVO</th>
              <th>Soluções Tradicionais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Implantação</td>
              <td class="col-livo"><strong>100% Gratuita</strong></td>
              <td>Cobrança de taxa ou equipamento</td>
            </tr>
            <tr>
              <td>Operação</td>
              <td class="col-livo"><strong>Totalmente por nossa conta</strong></td>
              <td>Exige gestão do síndico/empresa</td>
            </tr>
            <tr>
              <td>Reposição</td>
              <td class="col-livo"><strong>Automatizada e baseada em dados</strong></td>
              <td>Manual e com risco de rupturas</td>
            </tr>
            <tr>
              <td>Suporte ao Usuário</td>
              <td class="col-livo"><strong>Atendimento rápido e dedicado</strong></td>
              <td>Suporte lento ou inexistente</td>
            </tr>
            <tr>
              <td>Monitoramento</td>
              <td class="col-livo"><strong>Tecnologia avançada e analytics 24/7</strong></td>
              <td>Câmeras básicas ou sem monitoramento</td>
            </tr>
            <tr>
              <td>Experiência do Usuário</td>
              <td class="col-livo"><strong>Premium, rápida e intuitiva</strong></td>
              <td>Comum e passível de falhas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
`;

const oldBenefitsRegex = /<!-- COMMON BENEFITS -->[\s\S]*?<\/section>/;
html = html.replace(oldBenefitsRegex, newBenefits);

// 4. Update Form
const newFormSection = `
  <section class="cta-section" id="contato">
    <div class="container">
      <span class="eyebrow">Próximo Passo</span>
      <h2>Pronto para modernizar seu espaço?</h2>
      <p>
        Receba uma proposta sem compromisso. Agende uma visita técnica ou fale com nossos especialistas para levarmos a conveniência inteligente LIVO para o seu condomínio ou empresa.
      </p>
      <form class="contact-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Formulário enviado com sucesso! Em breve entraremos em contato.');">
        <div class="form-row">
          <div class="form-group half">
            <label for="nome">Nome Completo *</label>
            <input type="text" id="nome" class="form-control" placeholder="Seu nome" required>
          </div>
          <div class="form-group half">
            <label for="telefone">WhatsApp *</label>
            <input type="tel" id="telefone" class="form-control" placeholder="(00) 00000-0000" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group half">
            <label for="condominio">Empresa ou Condomínio</label>
            <input type="text" id="condominio" class="form-control" placeholder="Opcional">
          </div>
          <div class="form-group half">
            <label for="email">E-mail</label>
            <input type="email" id="email" class="form-control" placeholder="Opcional">
          </div>
        </div>
        <button type="submit" class="btn-primary" style="margin-top: 10px; width: 100%; justify-content: center;">
          Solicitar Proposta
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  </section>
`;
const oldFormRegex = /<!-- CTA SECTION -->[\s\S]*?<\/section>/;
html = html.replace(oldFormRegex, newFormSection);

// 5. Add WhatsApp Float right before </body>
const waFloatHtml = `
  <a href="https://wa.me/5511999999999?text=Olá!%20Quero%20conhecer%20a%20solução%20LIVO." class="whatsapp-float" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>
`;
html = html.replace('</body>', waFloatHtml + '\n</body>');

// 6. JavaScript Additions (Counters)
const jsAddition = `
    // Number Counters Animation
    const numberItems = document.querySelectorAll('.number-value');
    let counted = false;

    const startCounters = () => {
      numberItems.forEach(item => {
        const target = +item.getAttribute('data-target');
        const countEl = item.querySelector('.count');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            countEl.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            countEl.innerText = target;
          }
        };
        updateCounter();
      });
    };

    const numbersSection = document.getElementById('counters-grid');
    if (numbersSection) {
      const numObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !counted) {
          counted = true;
          startCounters();
        }
      }, { threshold: 0.5 });
      numObserver.observe(numbersSection);
    }
`;

html = html.replace(/const observerOptions = \{/, jsAddition + '\n    const observerOptions = {');

// 7. Add "loading='lazy'" to images
html = html.replace(/<img src="(.*?)" alt="(.*?)" style="(.*?)">/g, '<img src="$1" alt="$2" style="$3" loading="lazy">');

// 8. Add New CSS
const newCss = `
    /* NOVO: Hero Improvements */
    .hero-content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      text-align: left;
    }
    .hero-mockup-placeholder {
      background: var(--beige-light);
      border-radius: 24px;
      aspect-ratio: 4/5;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      color: var(--gray);
      font-size: 0.9rem;
      border: 2px dashed var(--beige);
      box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    }
    .hero h1 { text-align: left; }
    .hero-subtitle { text-align: left; }

    /* NOVO: Utilities */
    .section-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 60px;
    }
    .section-header h2 { margin-bottom: 20px; font-weight: 300; }
    .section-header p { font-size: 1.1rem; color: var(--gray); line-height: 1.6; }
    .white-text h2, .white-text p { color: var(--white); }

    /* NOVO: Como Funciona */
    .how-it-works { padding: 120px 0; background: var(--white); }
    .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
    .step-card { padding: 40px 30px; background: var(--cream); border-radius: 20px; text-align: center; border: 1px solid rgba(0,0,0,0.03); }
    .step-icon { width: 64px; height: 64px; background: var(--black); color: var(--beige); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
    .step-icon svg { width: 28px; height: 28px; }
    .step-card h3 { font-family: 'Josefin Sans', sans-serif; font-size: 1.4rem; margin-bottom: 16px; color: var(--black); line-height: 1.3;}
    .step-card p { color: var(--gray); font-size: 0.95rem; }

    /* NOVO: Prova Social */
    .social-proof { padding: 120px 0; background: var(--cream); }
    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 60px; }
    .testimonial-card { background: var(--white); padding: 40px 30px; border-radius: 20px; position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
    .quote-icon { position: absolute; top: 20px; right: 30px; font-family: serif; font-size: 5rem; color: var(--beige-light); line-height: 1; }
    .testimonial-text { position: relative; z-index: 1; font-size: 0.95rem; line-height: 1.7; color: var(--gray); margin-bottom: 30px; font-style: italic; }
    .testimonial-author { display: flex; align-items: center; gap: 16px; }
    .author-photo.placeholder-photo { width: 50px; height: 50px; border-radius: 50%; background: var(--beige-light); border: 2px solid var(--beige); flex-shrink: 0; }
    .author-info strong { display: block; font-size: 0.95rem; color: var(--black); }
    .author-info span { font-size: 0.8rem; color: var(--gray-light); }
    .logos-grid { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; opacity: 0.6; filter: grayscale(100%); }
    .logo-placeholder { font-size: 1.2rem; font-weight: bold; color: var(--gray); padding: 10px 20px; border: 1px solid var(--gray-light); border-radius: 8px; }

    /* NOVO: Números */
    .numbers-section { padding: 100px 0; background: var(--black); color: var(--white); }
    .numbers-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
    .number-item { padding: 20px; }
    .number-value { font-family: 'Josefin Sans', sans-serif; font-size: 3.5rem; font-weight: 300; color: var(--beige); margin-bottom: 10px; }
    .number-label { font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.7); }

    /* NOVO: Galeria */
    .real-photos { padding: 120px 0; background: var(--white); }
    .photos-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
    .photo-card { text-align: center; }
    .photo-placeholder { background: var(--cream); aspect-ratio: 16/9; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: var(--gray); border: 2px dashed rgba(0,0,0,0.1); margin-bottom: 20px; }
    .photo-card h3 { font-size: 1.2rem; color: var(--black); }

    /* NOVO: Comparativo */
    .comparison-table-section { padding: 120px 0; background: var(--cream); }
    .table-responsive { overflow-x: auto; background: var(--white); border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); padding: 40px; }
    .livo-table { width: 100%; border-collapse: collapse; min-width: 600px; }
    .livo-table th { padding: 20px; text-align: left; font-family: 'Montserrat', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 2px solid var(--beige-light); }
    .livo-table td { padding: 20px; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 0.95rem; color: var(--gray); line-height: 1.5;}
    .livo-table .col-livo { background: rgba(212, 184, 150, 0.1); color: var(--black); border-radius: 8px; }
    .livo-table th.col-livo { color: var(--beige); font-size: 1rem; }

    /* NOVO: Form Row */
    .form-row { display: flex; gap: 20px; }
    .form-group.half { width: 50%; }

    /* NOVO: WhatsApp Float */
    .whatsapp-float { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background-color: #25d366; color: #FFF; border-radius: 50px; text-align: center; font-size: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); z-index: 1000; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; }
    .whatsapp-float:hover { transform: scale(1.1); }
    .whatsapp-float svg { width: 35px; height: 35px; }

    @media (max-width: 992px) {
      .hero-content-wrapper { grid-template-columns: 1fr; text-align: center; }
      .hero h1, .hero-subtitle { text-align: center; }
      .hero-buttons { justify-content: center; }
      .steps-grid, .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
      .numbers-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .steps-grid, .testimonials-grid, .photos-grid { grid-template-columns: 1fr; }
      .numbers-grid { grid-template-columns: 1fr; }
      .form-row { flex-direction: column; gap: 0; }
      .form-group.half { width: 100%; }
      .whatsapp-float { bottom: 20px; right: 20px; width: 50px; height: 50px; }
      .whatsapp-float svg { width: 28px; height: 28px; }
      .table-responsive { padding: 20px; }
    }
`;

html = html.replace('/* Animations */', newCss + '\n    /* Animations */');

// Add new classes to animate array
html = html.replace(
  "const animateElements = document.querySelectorAll('.manager-card",
  "const animateElements = document.querySelectorAll('.step-card, .testimonial-card, .logos-grid, .photo-card, .table-responsive, .manager-card"
);


fs.writeFileSync('index.html', html, 'utf8');
console.log('Modifications completed.');
